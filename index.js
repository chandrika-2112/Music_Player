
const songsJSON = [
    { songTitle: "Pranama", songBy: "Darling", audio: "audio/Pranama.mp3" , industry: "Telugu", img:"./images/Darling.jpg",index:0},
    { songTitle: "Ammadi", songBy: "Hi Nanna", audio: "audio/Ammadi.mp3", industry: "Telugu", img:"./images/Hi_Nanna.jpg",index:1},
    { songTitle: "Ghal Ghal", songBy: "Nuvvostanante Nenodhantana", audio: "audio/Ghal Ghal.mp3" , industry: "Telugu", img:"./images/Nuvvostanante.jpg" ,index:2},
    { songTitle: "Temper", songBy: "Temper", audio: "audio/Temper.mp3", industry: "Telugu", img:"images/Temper.jpg",index:3},   
    { songTitle: "Srivalli", songBy: "Pushpa", audio: "audio/Srivalli.mp3", industry: "Telugu", img:"./images/Pushpa.jpg",index:4},
    { songTitle: "pileche", songBy: "Khaleja", audio: "./audio/Piliche.mp3", industry: "Telugu", img:"./images/Khaleja.jpg" ,index:5},
    { songTitle: "Hello Guru Prema Kosame", songBy: "Hello Guru Prema Kosame", audio: "audio/Hello_Guru.mp3", industry: "Telugu", img:"./images/Hello_Guru.jpg",index:6},
    
    { songTitle: "Guli Mata", songBy: "Guli Mata", audio: "./audio/Guli Mata.mp3", industry: "Hindi", img:"./images/Guli_Mata.jpg" ,index:7},
    { songTitle: "Nachu Nachu", songBy: "RRR", audio: "./audio/Nachu Nachu.mp3", industry: "Hindi", img:"./images/RRR.jpg" ,index:8},
    { songTitle: "Dheere Dheere", songBy: "Dheere Dheere", audio: "./audio/Dheere Dheere Se.mp3", industry: "Hindi", img:"./images/Dheere_Dheere.jpg" ,index:9},
    { songTitle: "Duniya", songBy: "Luka Chupi", audio: "./audio/Luka Chupi.mp3", industry: "Hindi", img:"./images/Duniya.jpg" ,index:10},
    { songTitle: "Titli", songBy: "Chennai Express", audio: "./audio/Titli_Chennai.mp3", industry: "Hindi", img:"./images/Chennai_Express.jpg" ,index:11},
    { songTitle: "Dhol Bhaaje", songBy: "Ram-Leela", audio: "./audio/Dhol Baaje.mp3", industry: "Hindi", img:"./images/Ram-Leela.jpg" ,index:12},


    { songTitle: "I Wanna Be Yours", songBy: "The Dreamers", audio: "./audio/Wanna be yours.mp3", industry: "English", img:"./images/Wanna_Be_Yours.jpg" ,index:13},
    { songTitle: "Lover", songBy: "Letters To Juliet", audio: "./audio/Lover.mp3", industry: "English", img:"./images/Lover.jpg" ,index:14},
    { songTitle: "Arcade", songBy: "Duncan Laurence", audio: "./audio/Arcade.mp3", industry: "English", img:"./images/Arcade.jpg" ,index:15},
    { songTitle: "Infinity", songBy: "Blade Runner", audio: "./audio/Infinity.mp3", industry: "English", img:"./images/Infinity.jpg" ,index:16},
    { songTitle: "A Thousand Years", songBy: "Christina Perri", audio: "./audio/Thousand_Years.mp3", industry: "English", img:"./images/Thousand_Years.jpg" ,index:17},
    { songTitle: "Senorita", songBy:"Mendes and Cabello's", audio: "./audio/senorita.mp3", industry: "English", img: "./images/senorita.jpg", index:18},

    { songTitle: "Vizhi Moodi", songBy:"Ayan", audio: "./audio/Surya.mp3", industry: "Tamil", img: "./images/Ayan.jpg", index:19},
    { songTitle: "Donu Donu", songBy:"Maari", audio: "./audio/Donu Donu.mp3", industry: "Tamil", img: "./images/Maari.jpg", index:20},
    { songTitle: "Sirikkadhey", songBy:"Remo", audio: "./audio/Sirikkadhey.mp3", industry: "Tamil", img: "./images/Remo.jpg", index:21},
    { songTitle: "Hey Sita Hey Rama", songBy:"Sita Ramam", audio: "./audio/Sita_Ramam.mp3", industry: "Tamil", img: "./images/Sita_Ramam.jpg", index:22},
    { songTitle: "Ranjithame", songBy:"Varisu", audio: "./audio/Ranjithame.mp3", industry: "Tamil", img: "./images/Varisu.jpg", index:23},

];

// Selecting elements from the HTML
const songImg = document.querySelector(".song-img");
const songHead = document.querySelector(".song-box h3");
const songBy = document.querySelector(".song-box p");
const allSongs = document.querySelector(".all-songs");
const industryDropdown = document.querySelector("#industry");
const audioTag = document.querySelector("#audio-player");
const playlistInput = document.querySelector(".right-container input");
const currentPlaylistContainer = document.querySelector(".current-playlist");
const addedPlaylistContainer = document.querySelector(".added-playlist");
const leftArrow = document.querySelector(".left-btn")
const rightArrow = document.querySelector(".right-btn")
const shuffleButton = document.querySelector('.shuffle-button');
let currentSongIndex=0;
const addToCurrentPlaylist= document.querySelector(".add-to-playlist-button")
let darkModeEnabled = false;

// Function to toggle dark mode
const toggleDarkMode = () => {
    darkModeEnabled = !darkModeEnabled;
    document.body.classList.toggle('dark-mode', darkModeEnabled);

    // Update button position and background color based on dark mode state
    const toggleButton = document.querySelector('#toggle');
    toggleButton.style.justifyContent = darkModeEnabled ? 'flex-end' : 'flex-start';
    toggleButton.style.backgroundColor = darkModeEnabled ? '#fff' : '#000';
};

// Function to update the center content based on the selected song
const updateCenterContent = (song) => {
    songImg.style.backgroundImage = `url(${song.img})`;
    songHead.textContent = song.songTitle;
    songBy.textContent = song.songBy;
    audioTag.querySelector("source").setAttribute("src", song.audio);
    audioTag.load();
    audioTag.play();
    currentSongIndex=song.index
    audioTag.querySelector("source").setAttribute("src", song.audio);
    audioTag.load();

    // Check if autoplay is enabled
    if (audioTag.autoplay) {
        audioTag.play();
    }

};


addToCurrentPlaylist.addEventListener('click',()=>{
    const btn=document.createElement('button')
    song=songsJSON[currentSongIndex]
    btn.textContent=song.songTitle
    currentPlaylistContainer.appendChild(btn)  
})
// Function to create buttons for songs
const createButtonsForSongs = (songs) => {
    songs.forEach(element => {

        let btn = document.createElement("button");
        btn.textContent = element.songTitle;
        btn.addEventListener('click', () => {
            updateCenterContent(element);
        });
        allSongs.appendChild(btn);
    });
};

// Event listener for the industry dropdown
industryDropdown.addEventListener("change", () => {
    allSongs.innerHTML = "";

    switch (industryDropdown.value) {
        case "all":
            // If "All" is selected, display all songs
            allSongs.innerHTML = "<h3>All Songs</h3>";
            createButtonsForSongs(songsJSON);
            break;
        case "telugu":
                // If "telugu" is selected, display Telugu songs
                allSongs.innerHTML = "<h3>Telugu</h3>";
                const Telugu = songsJSON.filter(val => val.industry.toLowerCase() === "telugu");
                createButtonsForSongs(Telugu);
                break;    
        case "bol":
            // If "Bollywood" is selected, display Bollywood songs
            allSongs.innerHTML = "<h3>Hindi</h3>";
            const Hindi = songsJSON.filter(val => val.industry.toLowerCase() === "hindi");
            createButtonsForSongs(Hindi);
            break;
        case "holly":
            // If "English" is selected, display Telugu songs
            allSongs.innerHTML = "<h3>English</h3>";
            const English= songsJSON.filter(val => val.industry.toLowerCase() === "english");
            createButtonsForSongs(English);
            break;
        case "kolly":
                // If "tamil" is selected, display Telugu songs
                allSongs.innerHTML = "<h3>Tamil</h3>";
                const Tamil = songsJSON.filter(val => val.industry.toLowerCase() === "tamil");
                createButtonsForSongs(Tamil);
                break;
        default:
            break;
    }
});


// Function to shuffle songs
const shuffleSongs = () => {
    allSongs.innerHTML="";
    const shuffledSongs = [...songsJSON];
    for (let i = shuffledSongs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledSongs[i], shuffledSongs[j]] = [shuffledSongs[j], shuffledSongs[i]];
    }
    createButtonsForSongs(shuffledSongs);
};

// Call this function when the page loads to create initial buttons
createButtonsForSongs(songsJSON);

// Event listener for "Enter" key press in the input field
playlistInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();

        const playlistName = playlistInput.value.trim();

        if (playlistName !== "" && !(set.has(playlistName))) {
            const playlistButton = document.createElement("button");
            playlistButton.textContent = playlistName;

            addedPlaylistContainer.appendChild(playlistButton);

            playlistInput.value = "";
        }
    }
});

const createPlaylistButton = document.querySelector(".right-container button");

// Event listener for "Create Playlist" button click
createPlaylistButton.addEventListener("click", () => {
    if (playlistInput.value!=""){
        const playlistName = playlistInput.value.trim();
        const playlistButton = document.createElement("button");
        playlistButton.textContent = playlistName;
        addedPlaylistContainer.appendChild(playlistButton);
        playlistInput.value="";

    }
});
// Function to move to the previous song
const movesongBefore = () => {
    let newIndex=currentSongIndex-1;
    if (newIndex<0){
        newIndex=songsJSON.length
        currentSongIndex=newIndex
    }

    updateCenterContent(songsJSON[newIndex]);
    audioTag.play();
};

// Function to move to the next song
const movesongAfter = () => {

    let newIndex = currentSongIndex + 1
    if (newIndex==songsJSON.length){
        newIndex=0;
        currentSongIndex=0;
    }
    updateCenterContent(songsJSON[newIndex]);
    audioTag.play();
};

audioTag.addEventListener('ended', movesongAfter);
leftArrow.addEventListener('click',movesongBefore)
rightArrow.addEventListener('click',movesongAfter)

document.addEventListener('DOMContentLoaded', function() {
    var currentSongIndex = idx;
    updateCenterContent(ele);
});
