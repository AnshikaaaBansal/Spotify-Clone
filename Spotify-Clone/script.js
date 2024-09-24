// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {
        songName: "Jashn E Bahaaraa - Jodhaa Akbar",
        filePath: "Spotify-Clone/songs/1.mp3",
        coverPath: "Spotify-Clone/covers/1.jpg",
    },
    {
        songName: "Sab Tera - Baaghi",
        filePath: "Spotify-Clone/songs/2.mp3",
        coverPath: "Spotify-Clone/covers/2.jpg",
    },
    {
        songName: "Kaise Hua - Kabir Singh",
        filePath: "Spotify-Clone/songs/3.mp3",
        coverPath: "Spotify-Clone/covers/3.jpg",
    },
    {
        songName: "Enna Sona - OK Jaanu",
        filePath: "Spotify-Clone/songs/4.mp3",
        coverPath: "Spotify-Clone/covers/4.jpg",
    },
    {
        songName: "Sawarne Lage - Mitron",
        filePath: "Spotify-Clone/songs/5.mp3",
        coverPath: "Spotify-Clone/covers/5.jpg",
    },
    {
        songName: "Iktara - Wake Up Sid",
        filePath: "Spotify-Clone/songs/6.mp3",
        coverPath: "Spotify-Clone/covers/6.jpg",
    },
    {
        songName: "Phir Se Ud Chala - Rockstar",
        filePath: "Spotify-Clone/songs/7.mp3",
        coverPath: "Spotify-Clone/covers/7.jpg",
    },
    {
        songName: "O Mahi O Mahi - Dunki",
        filePath: "Spotify-Clone/songs/8.mp3",
        coverPath: "Spotify-Clone/covers/8.jpg",
    },
    {
        songName: "Kabira - Yeh Jawaani Hai Deewani",
        filePath: "Spotify-Clone/songs/9.mp3",
        coverPath: "Spotify-Clone/covers/9.jpg",
    },
    {
        songName: "Tum Hi Ho - Aashiqui 2",
        filePath: "Spotify-Clone/songs/10.mp3",
        coverPath: "Spotify-Clone/covers/10.jpg",
    },
];

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
});

// Listen to Events
audioElement.addEventListener("timeupdate", () => {
    // Update Seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    });
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = songs[songIndex].filePath; // Dynamic file path
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    });
});

document.getElementById("next").addEventListener("click", () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath; // Dynamic file path
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath; // Dynamic file path
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
});
