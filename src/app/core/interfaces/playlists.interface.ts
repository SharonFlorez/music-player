import { SongsInterface } from './songs.interface';

export interface PlaylistsInterface {
  id: number;
  name: string;
  songs: SongsInterface[];
}
