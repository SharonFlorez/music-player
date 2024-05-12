import { Injectable } from '@angular/core';
import { PlaylistsInterface } from '../interfaces/playlists.interface';

@Injectable({
  providedIn: 'root',
})
export class PlaylistsService {
  private localStorageKey = 'playlists';
  playlists: PlaylistsInterface[] = JSON.parse(
    localStorage.getItem(this.localStorageKey) || '[]'
  );

  createPlaylist(name: string): void {
    this.playlists.push({
      id: (this.playlists.slice(-1)[0]?.id ?? 0) + 1,
      name,
      songs: [],
    });
    this.saveToLocalStorage();
  }

  addToPlaylist(id: number, song: any): boolean {
    const playlist = this.playlists.find((playlist) => playlist.id === id);
    let addedToPlaylist = false;
    if (playlist) {
      const existSong = playlist.songs.find((s) => s.id === song.id);
      if (existSong) {
        addedToPlaylist = false;
      } else {
        playlist.songs.push(song);
        this.saveToLocalStorage();
        addedToPlaylist = true;
      }
    }
    return addedToPlaylist;
  }

  removeFromPlaylist(playlistId: number, songId: number): void {
    const playlistIndex = this.playlists.findIndex(
      (playlist) => playlist.id === playlistId
    );

    if (playlistIndex !== -1) {
      const songIndex = this.playlists[playlistIndex].songs.findIndex(
        (song) => song.id === songId
      );

      if (songIndex !== -1) {
        this.playlists[playlistIndex].songs.splice(songIndex, 1);
        this.saveToLocalStorage();
      } else {
        console.error(
          `La canción con ID ${songId} no se encontró en la lista de reproducción.`
        );
      }
    } else {
      console.error(
        `La lista de reproducción con ID ${playlistId} no se encontró.`
      );
    }
  }

  getPlaylists(): PlaylistsInterface[] {
    return this.playlists;
  }

  getPlaylistById(id: number): PlaylistsInterface | undefined {
    return this.playlists.find((playlist) => playlist.id === id);
  }

  private saveToLocalStorage(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.playlists));
  }
}
