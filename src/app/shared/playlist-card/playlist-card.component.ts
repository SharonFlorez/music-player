import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { PlaylistsInterface } from '../../../app/core/interfaces/playlists.interface';

@Component({
  selector: 'app-playlist-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TooltipModule],
  templateUrl: './playlist-card.component.html',
})
export class PlaylistCardComponent {
  @Input() public playlists: PlaylistsInterface[] = [];
  @Output() public playlistSelected = new EventEmitter<number>();
  @Output() public showAllSongsList = new EventEmitter<boolean>();

  public showPlaylist(id: number): void {
    this.playlistSelected.emit(id);
    this.showAllSongsList.emit(false);
  }
}
