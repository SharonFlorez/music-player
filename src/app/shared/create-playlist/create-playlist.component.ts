import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PlaylistsService } from '../../core/services/playlists.service';

@Component({
  selector: 'app-create-playlist',
  standalone: true,
  imports: [
    CommonModule,
    DynamicDialogModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
  ],
  templateUrl: './create-playlist.component.html',
})
export class CreatePlaylistComponent implements OnInit {
  public playlistForm: FormGroup | any;
  private formBuilder = inject(FormBuilder);
  private dialogRef = inject(DynamicDialogRef);
  private playlistsService = inject(PlaylistsService);

  ngOnInit(): void {
    this.playlistForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  public createPlaylist(): void {
    const namePlaylist = this.playlistForm.value.name;
    this.playlistsService.createPlaylist(namePlaylist);
    this.dialogRef.close(true);
  }

  public cancel(): void {
    this.dialogRef.close(true);
  }
}
