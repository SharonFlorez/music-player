import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../../core/services/auth.service';
import { ErrorsFirebaseHelper } from '../../../core/helpers/errors-firebase.helper';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    FormsModule,
    NgOptimizedImage,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup | any;
  public errorLogin: boolean = false;
  public isLoading: boolean = false;
  public showPassword: boolean = false;
  public error: string = '';
  private authService = inject(AuthService);
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [
        { value: '', disabled: this.isLoading },
        [Validators.required, Validators.minLength(3)],
      ],
      password: [
        { value: '', disabled: this.isLoading },
        [Validators.required, Validators.minLength(6)],
      ],
    });
  }

  onSubmit() {
    this.isLoading = true;
    this.errorLogin = false;
    this.authService
      .loginWithCredentials(this.loginForm.value)
      .then(() => {
        this.isLoading = false;
        this.router.navigate(['/']);
      })
      .catch((error) => {
        this.error = ErrorsFirebaseHelper.getError(error.code);
        this.errorLogin = true;
        this.isLoading = false;
      });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
