import { Component, OnInit, Inject, AfterViewInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatSelectionList, MatSelectionListChange, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SongService } from '../service/song.service';

@Component({
	selector: 'song-dialog',
	templateUrl: './song-dialog.component.html',
	styleUrls: ['./song-dialog.component.scss']
})
export class SongDialogComponent implements OnInit {

	dataLoading = true;

    @ViewChild('artistList') artistList: MatSelectionList;
    @ViewChild('albumList') albumList: MatSelectionList;
    @ViewChild('songList') songList: MatSelectionList;

    artists: any;
    artistSelected = false;
    displayArtists = '';
    selectedArtist: any;

    albums: any;
    albumSelected = false;
    displayAlbums = 'hidden';
    selectedAlbum: any;

    songs: any;
    songSelected = false;
    displaySongs = 'hidden';
    selectedSong: any;

    newSong = {
        artistCode: '',
		artistDescription: '',
		albumCode: '',
		albumDescription: '',
		songCode: '',
        songDescription: ''
    };

    newSongId: any;

    songForm: FormGroup;
    songNameFormControl: FormControl;
	songNameInputValue: string;
	
	text: string;

    @Output() onSongListCreation = new EventEmitter<any>(true);
    @Output() onSongCreation = new EventEmitter<any>(true);

    constructor (
		@Inject(MAT_DIALOG_DATA) public songListData: any,
		public svc: SongService,
        private fb: FormBuilder ) {
            this.songForm = this.fb.group({
                songNameFormControl: ['', Validators.required]
            });
    }

    ngOnInit() {
		
		console.log('song list');
		console.log(this.songListData);

		// get Artists
		this.svc.getArtists().subscribe(
			res => {
				this.artists = res;
				this.dataLoading = false;
				// this.displaySongs = '';
				// console.log(' artists: ');
				// console.log(res);
			}//,
                // (err: HttpErrorResponse) => {
                //     this.dataLoading = true;
                //     this.errorHandler(err);
                // }
		)
        
    }

 	ngAfterViewInit() {

        // Listen for Artist Selection
        this.artistList.selectionChange.subscribe((s: MatSelectionListChange) => {
            this.artistList.deselectAll();
            s.option.selected = true;
            this.artistSelected = true;
            this.displayArtists = 'hidden';
            this.displayAlbums = '';

            this.selectedArtist = this.artistList.selectedOptions.selected[0].value;
            console.log('selected Artist');
            console.log(this.selectedArtist)

            // get Albums based on selected Artist

            this.svc.getAlbums(this.selectedArtist.artistCode).subscribe(
                res => {
                    this.albums = res;
                    console.log('albums: ');
                    console.log(this.albums);
                } //,
                // (err: HttpErrorResponse) => {
                //     this.dataLoading = true;
                //     this.errorHandler(err);
                // }
            )
        });

    //     // Listen for Album Selection
        this.albumList.selectionChange.subscribe((t: MatSelectionListChange) => {
            // console.log('selecting album');
            this.albumList.deselectAll();
            t.option.selected = true;
            this.albumSelected = true;
            this.displayAlbums = 'hidden';
            this.displaySongs = '';

            this.selectedAlbum = this.albumList.selectedOptions.selected[0].value;
            console.log('selected Album');
            console.log(this.selectedAlbum);

            // get Songs based on selected Album

            this.svc.getSongs(this.selectedAlbum.albumCode).subscribe(
                res => {
                    this.songs = res;
                    console.log('songs: ');
                    console.log(this.songs);
                } //,
                // (err: HttpErrorResponse) => {
                //     this.dataLoading = true;
                //     this.errorHandler(err);
                // }
            )
        });

    //     // Listen for Song Selection
        this.songList.selectionChange.subscribe((u: MatSelectionListChange) => {
            // console.log('selecting song');
            this.songList.deselectAll();
            u.option.selected = true;
            this.songSelected = true;

            this.selectedSong = this.songList.selectedOptions.selected[0].value;
            console.log('selected Song');
            console.log(this.selectedSong);
        });  
    }

    returnToArtistList() {
        this.albumSelected = false;
        this.songSelected = false;
        this.displayArtists = '';
        this.displayAlbums = 'hidden';
        this.displaySongs = 'hidden';
    }

    returnToAlbumList() {
        this.songSelected = false;
        this.displayAlbums = '';
        this.displaySongs = 'hidden';
    }

    returnToSongList() {
        this.displaySongs = '';
    }

    


    addSong() {

		console.log('song list before push');
		console.log(this.songListData);

        this.newSong.artistCode = this.selectedArtist.artistCode;
		this.newSong.artistDescription = this.selectedArtist.artistDescription;
		this.newSong.albumCode = this.selectedAlbum.albumCode;
		this.newSong.albumDescription = this.selectedAlbum.albumDescription;
		this.newSong.songCode = this.selectedSong.songCode;
        this.newSong.songDescription = this.selectedSong.songDescription;

        console.log('new song in modal: ');
		console.log(this.newSong);

		

		this.songListData.push(this.newSong);

		// console.log('song list after push');
		// console.log(this.songListData);
		
		this.onSongListCreation.emit( this.songListData );

        // reset all selections and values
		this.newSong = {
			artistCode: '',
			artistDescription: '',
			albumCode: '',
			albumDescription: '',
			songCode: '',
			songDescription: ''
		};
        this.artistList.deselectAll();
        this.artistSelected = false;
        this.returnToArtistList();
    }
}
