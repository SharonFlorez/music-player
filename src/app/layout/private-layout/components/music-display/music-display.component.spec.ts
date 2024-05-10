import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MusicDisplayComponent } from './music-display.component';

describe('MusicDisplayComponent', () => {
  let component: MusicDisplayComponent;
  let fixture: ComponentFixture<MusicDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicDisplayComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MusicDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
