import { Component } from '@angular/core';

import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { MusicDisplayComponent } from './components/music-display/music-display.component';
import { PlayerComponent } from './components/player/player.component';

@Component({
  selector: 'app-private-layout',
  standalone: true,
  imports: [SidePanelComponent, MusicDisplayComponent, PlayerComponent],
  templateUrl: './private-layout.component.html',
})
export class PrivateLayoutComponent {}
