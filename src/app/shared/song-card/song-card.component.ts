import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { SongsInterface } from '../../core/interfaces/songs.interface';
import { PlaylistsInterface } from '../../core/interfaces/playlists.interface';
import { PlaylistsService } from '../../core/services/playlists.service';

@Component({
  selector: 'app-song-card',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    TooltipModule,
    TieredMenuModule,
    TieredMenuModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './song-card.component.html',
})
export class SongCardComponent implements OnInit {
  @Input() public allSongsView: boolean = true;
  @Input() public allSongs: SongsInterface[] = [];
  @Input() public album!: PlaylistsInterface;
  @Output() public songSelected = new EventEmitter<number>();
  public playlists: PlaylistsInterface[] = [];
  public namesPlaylists: MenuItem[] | undefined;
  private playlistsService = inject(PlaylistsService);
  private messageService = inject(MessageService);

  ngOnInit(): void {
    this.getPlaylists();
  }

  public getPlaylists(): void {
    this.playlists = this.playlistsService.getPlaylists();
  }

  public addToPlaylist(song: SongsInterface): void {
    const songSelected = song;
    this.namesPlaylists = this.playlists.map((playlist) => ({
      label: playlist.name,
      command: () => {
        const addedToPlaylist = this.playlistsService.addToPlaylist(
          playlist.id,
          songSelected
        );
        if (addedToPlaylist) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: `La canción se ha agregado a ${playlist.name}`,
            life: 3000,
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: `La canción ya existe en ${playlist.name}`,
            life: 3000,
          });
        }
      },
    }));
  }

  public deleteToPlaylist(playlistId: number, songId: number): void {
    this.playlistsService.removeFromPlaylist(playlistId, songId);
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: `La canción se ha eliminado`,
      life: 3000,
    });
  }

  public playSong(id: number): void {
    this.songSelected.emit(id);
  }
}
