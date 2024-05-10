import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { AuthService } from '../../../../core/services/auth.service';
import { PlaylistCardComponent } from '../../../../shared/playlist-card/playlist-card.component';

@Component({
  selector: 'app-side-panel',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterModule,
    TooltipModule,
    PlaylistCardComponent,
  ],
  templateUrl: './side-panel.component.html',
})
export class SidePanelComponent {
  private router = inject(Router);
  private authService = inject(AuthService);

  public logout(): void {
    this.authService
      .logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((error) => console.log(error));
  }
}
