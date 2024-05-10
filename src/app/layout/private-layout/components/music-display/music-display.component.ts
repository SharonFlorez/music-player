import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/header/header.component';
import { SongCardComponent } from '../../../../shared/song-card/song-card.component';

@Component({
  selector: 'app-music-display',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SongCardComponent],
  templateUrl: './music-display.component.html',
})
export class MusicDisplayComponent {}
