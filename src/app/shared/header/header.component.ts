import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() public albumImage: string | null = '';
  @Input() public albumName: string = '';
}
