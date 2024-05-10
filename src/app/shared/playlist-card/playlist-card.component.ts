import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-playlist-card',
  standalone: true,
  imports: [CommonModule, TooltipModule],
  templateUrl: './playlist-card.component.html',
})
export class PlaylistCardComponent {}
