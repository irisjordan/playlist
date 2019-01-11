import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatListModule, MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SongDialogComponent } from './song-dialog/song-dialog.component';
import { SongService } from './service/song.service';

// Pipes
import { ArtistFilterPipe } from './pipes/artist-filter.pipe';
import { AlbumFilterPipe } from './pipes/album-filter.pipe';
import { SongFilterPipe } from './pipes/song-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArtistFilterPipe,
    AlbumFilterPipe,
    SongFilterPipe,
    SongDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    SongService
  ],
  bootstrap: [AppComponent],
  entryComponents: [SongDialogComponent]
})
export class AppModule { }
