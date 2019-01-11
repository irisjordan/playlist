# Playlist

This is an Angular 7 example of an advanced selection list.

To add songs to the list, you open a modal that presents a list of artists. Once you select an artist, the list will display albums based on that artist, and then songs based on the selected album. This data is provided by a song service that makes an http call to some mock json data files (for now... goal is to connect this to the Spotify API). You can also search for artists, albums or songs on each step of the list. The lists also lets you navigate to other sections by clicking on the selection blocks on the right. Let's say you are down at the song level and want to select a different album, you would click on the album block and the list moves back to the album section. Once you have a song selected you can either add the song and close the modal or add the song and start another. 

You can also remove songs from the list using the checkboxes in the table and clicking the "Remove" button.

## See a running example
http://irisj.io/playlist/

## Example Image
![Map](src/assets/playlist.png?raw=true "Title")
