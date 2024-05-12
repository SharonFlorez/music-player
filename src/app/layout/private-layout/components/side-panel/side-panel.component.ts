import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { DialogService } from 'primeng/dynamicdialog';
import { PlaylistsInterface } from '../../../../core/interfaces/playlists.interface';
import { AuthService } from '../../../../core/services/auth.service';
import { PlaylistsService } from '../../../../core/services/playlists.service';
import { PlaylistCardComponent } from '../../../../shared/playlist-card/playlist-card.component';
import { CreatePlaylistComponent } from '../../../../shared/create-playlist/create-playlist.component';

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
export class SidePanelComponent implements OnInit {
  @Output() public playlistSelected = new EventEmitter<PlaylistsInterface>();
  @Output() public showAllSongs = new EventEmitter<boolean>();
  public playlists: PlaylistsInterface[] = [];
  private router = inject(Router);
  private authService = inject(AuthService);
  private playlistsService = inject(PlaylistsService);
  private dialogService = inject(DialogService);

  ngOnInit(): void {
    this.getPlaylists();
  }

  public getPlaylists(): void {
    this.playlists = this.playlistsService.getPlaylists();
  }

  public showPlaylist(id: number): void {
    const playlist = this.playlistsService.getPlaylistById(id);
    this.playlistSelected.emit(playlist);
  }

  public showAllSongsList(value: boolean): void {
    this.showAllSongs.emit(value);
  }

  public showSongs(): void {
    this.showAllSongs.emit(true);
  }

  public createPlaylist(): void {
    const dialogRef = this.dialogService.open(CreatePlaylistComponent, {
      header: 'Playlist',
      width: '30vw',
      closable: false,
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
    });

    dialogRef.onClose.subscribe((data: any) => {
      this.getPlaylists();
    });
  }

  public logout(): void {
    this.authService
      .logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((error) => console.log(error));
  }
}
