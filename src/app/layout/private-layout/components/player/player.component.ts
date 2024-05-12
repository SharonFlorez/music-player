import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SongsInterface } from '../../../../core/interfaces/songs.interface';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player.component.html',
})
export class PlayerComponent {
  @Input() public playSong: SongsInterface | null = null;
}
