# Only-Tunes
 mini proj

Objective
Send feedback
You love to listen to songs and use Oriline music streaming applications for listening to music. But as online streaming applications use ads for revenue generation, and you don't want to listen to those ads. But you like their feature of creating your own playlist and being able to change the playlist content dynamically.
Goal
Create a Music Player application that enables users to play locally stored sangs, as well as create and update
playlists with the songs.
Acceptance criteria
1. The App must have 4 major sections:
-All songs
-Song card
- Playlist
-Toggle theme
2. The All songs section should render a list of all the songs and should also have the functionality to filter the songs based on genre.
3. Clicking on any of the songs in the list should play that song.
4. The Song card section should display the song card with the image.name and artist name of the song which is currently played.
5. It should also include the controls like play, prev and next
6. It should also allow the user to add the song to the particular playlist.
7. The Playlist section should display all the playlists already created and an option to create a new playlist.
8. When a particular playlist is clicked, all the songs added in that playlist should be listed in that section only.
9. The Toggle theme section should be a button which when clicked should change the theme from dart to light and vice-versa.

Tasks

Create an array to store all the songs. Each song is represented as an object with id, name, artist, img, genre and source as its properties.
change the theme of the app, create a toggle Theme() function, which should set the data-theme attribu to dark light, depending on its previous value.
For the songs section, create a function showSongs() to render the list of songs depending on the currently selected genre. If no genre is selected, it should render all the songs.
There should be a change event handler for every dropdown menu option, which updates the song list, according to the selected option value, which represents different filters
available.
For the Song Card section, the currently selected song should be displayed with its image, song name, and artist name. It should have control buttons such as "next", "previous" and "Add to Playlist".
Create a function renderCurrentSong which could be called whenever a song is selected to render its info in the song card and to play it. Create a
function addtoPlaylist function to handle the click event of the "Add to Playlist" button and add the song to the selected Playlist. On click of the next button next song should be played, and on click of the previous button, the previous song present should be played. Both the next and previous buttons
should be able to handle edge cases. For the Playlist section, create a function createPlaylist() which should be linked to the click event of the "create playlist" button and should handle creating a new playlist and adding that to all playlist sections.
Create a renderPlaylistSong which should be linked to the click event of all playlists and should beused to display the song present in the playlist.
Additional Tasks
You can add the following functionality to the project to maximize your score:
Create a search input field to search for a particular song.
Create a search input field to search for a particular playlist.
Create an option to remove a song from the playlist.
Hints
The whole project can be divided into 2 div:
Heading: Displays the name of the Music Application and the toggle button.
Container: Displays a form to create and update images in a specific album.
The Container can have the following div:
All-song-div: It can be used to display all the song along with filter option
Card div: It can be used to show the currently playing show along the various control buttons.
Playlist div: It can be used to store all playlists and can create new playlist options.
