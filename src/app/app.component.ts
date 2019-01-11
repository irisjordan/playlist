import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource  } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { SongDialogComponent } from './song-dialog/song-dialog.component';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    
    songsDisplayColumns = ['select', 'song', 'artist', 'album'];
    songsData: any;
    showSongsTable = false;

    songList: any;

	constructor(
        public dialog: MatDialog
	) { }
    
    ngOnInit() {

        this.songsData = {
            displayColumns: this.songsDisplayColumns,
            selection: new SelectionModel<any>(true, []),
        }

        this.songList = [];

        this.songsData.dataSource = new MatTableDataSource<any>(this.songList);
    }

	openSongModal(): void {
        const dialogRef = this.dialog.open(SongDialogComponent, {
            width: '1000px',
            data: this.songList
        });

        // get new song list from modal and put it into table
        const sub = dialogRef.componentInstance.onSongListCreation.subscribe( (newSongs: any) => {
            console.log('new songs after modal: ');
            console.log(newSongs);

            this.songList = newSongs;
            this.songsData.dataSource = new MatTableDataSource<any>(newSongs);
            this.showSongsTable = true;
        });
    }

    removeSong(selectedSongs: any) {
        console.log('selected songs');
        console.log(selectedSongs);

        selectedSongs.forEach(song => {
            console.log('index:' + this.songList.indexOf(song) );
            let songIndex = this.songList.indexOf(song);
            this.songList.splice(songIndex, 1);
        });

        this.songsData.dataSource = new MatTableDataSource<any>(this.songList);

        if (!this.songList.length) {
            this.showSongsTable = false;
        }

        this.songsData.selection = new SelectionModel<any>(true, []);
    }

    // Material table functions for selection

    // Whether the number of selected elements matches the total number of rows.
    isAllSelected(selection: SelectionModel<any>, dataSource: MatTableDataSource<any>) {
        const numSelected = selection.selected.length;
        const numRows = dataSource.data.length;
        return numSelected === numRows;
    }

    selectRow(selection: SelectionModel<any>, row: any) {
        selection.toggle(row);
    }

    // Selects all rows if they are not all selected; otherwise clear selection.
    masterToggle(selection: SelectionModel<any>, dataSource: MatTableDataSource<any>) {
        this.isAllSelected(selection, dataSource) ?
            selection.clear() :
            dataSource.data.forEach(row => selection.select(row));
    }
}
