import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SongService {

	artists: any;

  	constructor(private http: HttpClient) { }

	artistsUrl = 'assets/artists.json';
	albumsUrl: any;
	albumsUrl1 = 'assets/albums1.json';
	albumsUrl2 = 'assets/albums2.json';
	albumsUrl3 = 'assets/albums3.json';
	albumsUrl4 = 'assets/albums4.json';
	songsUrl: any;
	songsUrl11 = 'assets/songs11.json';
	songsUrl12 = 'assets/songs12.json';
	songsUrl13 = 'assets/songs13.json';
	songsUrl14 = 'assets/songs14.json';

	songsUrl21 = 'assets/songs21.json';
	songsUrl22 = 'assets/songs22.json';
	songsUrl23 = 'assets/songs23.json';
	songsUrl24 = 'assets/songs24.json';

	songsUrl31 = 'assets/songs31.json';
	songsUrl32 = 'assets/songs32.json';
	songsUrl33 = 'assets/songs33.json';

	songsUrl41 = 'assets/songs41.json';
	songsUrl42 = 'assets/songs42.json';
	songsUrl43 = 'assets/songs43.json';
	songsUrl44 = 'assets/songs44.json';
	songsUrl45 = 'assets/songs45.json';
	songsUrl46 = 'assets/songs46.json';
	songsUrl47 = 'assets/songs47.json';

	getArtists( ) {
		return this.http.get(this.artistsUrl);
	}

	getAlbums( artistId: number ) {
		console.log('artist id');
		console.log(artistId);
		switch (artistId) {
			case 1:
				this.albumsUrl = this.albumsUrl1;
				break;
			case 2:
				this.albumsUrl = this.albumsUrl2;
				break;
			case 3:
				this.albumsUrl = this.albumsUrl3;
				break;
			case 4:
				this.albumsUrl = this.albumsUrl4;
				break;
		}

		return this.http.get(this.albumsUrl);
	}

	getSongs( albumId: number ) {
		console.log('album id');
		console.log(albumId);
		switch (albumId) {
			case 11:
				this.songsUrl = this.songsUrl11;
				break;
			case 12:
				this.songsUrl = this.songsUrl12;
				break;
			case 13:
				this.songsUrl = this.songsUrl13;
				break;
			case 14:
				this.songsUrl = this.songsUrl14;
				break;
			
			case 21:
				this.songsUrl = this.songsUrl21;
				break;
			case 22:
				this.songsUrl = this.songsUrl22;
				break;
			case 23:
				this.songsUrl = this.songsUrl23;
				break;
			case 24:
				this.songsUrl = this.songsUrl24;
				break;

			case 31:
				this.songsUrl = this.songsUrl31;
				break;
			case 32:
				this.songsUrl = this.songsUrl32;
				break;
			case 33:
				this.songsUrl = this.songsUrl33;
				break;

			case 41:
				this.songsUrl = this.songsUrl41;
				break;
			case 42:
				this.songsUrl = this.songsUrl42;
				break;
			case 43:
				this.songsUrl = this.songsUrl43;
				break;
			case 44:
				this.songsUrl = this.songsUrl44;
				break;
			case 45:
				this.songsUrl = this.songsUrl45;
				break;
			case 46:
				this.songsUrl = this.songsUrl46;
				break;
			case 47:
				this.songsUrl = this.songsUrl47;
				break;
		}

		return this.http.get(this.songsUrl);
	}  
}
