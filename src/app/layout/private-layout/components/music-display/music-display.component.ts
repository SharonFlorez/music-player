import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { HeaderComponent } from '../../../../shared/header/header.component';
import { SongCardComponent } from '../../../../shared/song-card/song-card.component';
import { SongsInterface } from '../../../../core/interfaces/songs.interface';
import { SongsService } from '../../../../core/services/songs.service';
import { PlaylistsInterface } from '../../../../core/interfaces/playlists.interface';

@Component({
  selector: 'app-music-display',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SongCardComponent],
  templateUrl: './music-display.component.html',
})
export class MusicDisplayComponent implements OnInit {
  @Input() public showPlaylist!: PlaylistsInterface;
  @Input() public showAllSongsList!: Boolean;
  @Output() public songSelected = new EventEmitter<SongsInterface>();
  public isSongSelected = false;
  public albumImage: string = '';
  public allSongs: SongsInterface[] = [];
  private songsService = inject(SongsService);

  ngOnInit(): void {
    this.getAllSongs();
  }

  public getAllSongs(): void {
    this.songsService.getSongs().subscribe((data) => {
      this.allSongs = data;
      this.albumImage = data[0].image;
    });
  }

  public playSong(id: number): void {
    this.songsService.getSongById(id).subscribe((data) => {
      this.songSelected.emit(data);
      this.isSongSelected = true;
    });
  }
}
