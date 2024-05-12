import { Component } from '@angular/core';

import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { MusicDisplayComponent } from './components/music-display/music-display.component';
import { PlayerComponent } from './components/player/player.component';
import { SongsInterface } from '../../core/interfaces/songs.interface';
import { PlaylistsInterface } from '../../core/interfaces/playlists.interface';

@Component({
  selector: 'app-private-layout',
  standalone: true,
  imports: [SidePanelComponent, MusicDisplayComponent, PlayerComponent],
  templateUrl: './private-layout.component.html',
})
export class PrivateLayoutComponent {
  public showAllSongsList!: boolean;
  public songSelected: SongsInterface | null = null;
  public playlistSelected!: PlaylistsInterface;

  public playSong(song: SongsInterface): void {
    this.songSelected = song;
  }

  public showPlaylist(playlist: PlaylistsInterface): void {
    this.playlistSelected = playlist;
  }

  public showAllSongs(value: boolean): void {
    this.showAllSongsList = value;
  }
}
