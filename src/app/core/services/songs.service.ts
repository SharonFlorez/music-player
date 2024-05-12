import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SongsInterface } from '../interfaces/songs.interface';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  private songsUrl = 'assets/songs.json';
  private http = inject(HttpClient);

  getSongs(): Observable<any[]> {
    return this.http.get<any[]>(this.songsUrl);
  }

  getSongById(id: number): Observable<SongsInterface> {
    return this.getSongs().pipe(
      map((songs) => songs.find((song) => song.id === id))
    );
  }
}
