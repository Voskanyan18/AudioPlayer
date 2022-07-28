var data = {
    title : [
        "Miyagi & Andy Panda - Minor",
        "Deeperise & Eneli - Dahlia Girl",
        "Billie Eilish - everything i wanted",
        "HOVO - Vsyo praydyot",
        "ZAYN - Dusk Till Dawn ft. Sia",
        "Rosa Linn - Snap",
        "Billie Eilish - Bellyache",
        "Coldplay - Hymn For The Weekend",
        "BTS - Spring Day ",
        "Miyagi - Captain ",
        "Miyagi & Эндшпиль - Fire Man",
    ],

    song : [
        'music/minor.mp3',
        'music/dahlia-girl.mp3',
        'music/everything.mp3',
        'music/hovo.mp3',
        'music/sia.mp3',
        'music/snap.mp3',
        'music/bellyache.mp3',
        'music/weekend.mp3',
        'music/spring.mp3',
        'music/captain.mp3',
        'music/fire.mp3',
    ],

    poster : [
        "https://i.gifer.com/fxVE.gif",
        "https://i.pinimg.com/originals/95/6f/69/956f69e8e5e52898019a6b1d38eef6cd.gif",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZXnaEBYh0thekq6sBas9mhXYCf_BfGMKy6g&usqp=CAU",
        "https://media4.giphy.com/media/B2JC4xnzTfzTtuC2F4/giphy.gif?cid=ecf05e479qatp6m3nf6vjbsq7ahrxhv4sbd6lbsj9e3dh3fk&rid=giphy.gif&ct=g",
        "https://images.velog.io/images/yhko1992/post/29ed7694-6bb3-46d1-a7a8-9d44568f6cc8/music.gif",
        "https://thumbs.gfycat.com/TemptingColorlessBeaver-max-1mb.gif",
        "https://media.baamboozle.com/uploads/images/55119/1597983745_81550",
        "https://c.tenor.com/QM-si3_EAyIAAAAC/listening-to-music-dancing.gif",
        "https://ih1.redbubble.net/image.439522027.2473/hj,750x-pad,750x1000,f8f8f8.jpg",
        ""
    ],

}


var song = new Audio()
var currentSong = 0;
console.log(song);


window.onload = function () {
playSong()
}

function playSong() {
song.src = data.song[currentSong];
let songTitle = document.getElementById("songTitle");
songTitle.textContent = data.title[currentSong];
let img = document.getElementById("row1");
img.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
let main = document.getElementById("main")
main.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
song.play();
}



function playOrPauseSong() {
let play = document.getElementById("play");


if (song.paused) {
song.play();
play.src = "images/pause.png" //pause
} else {
song.pause();
play.src = "images/play-button-arrowhead.png" //play
}

}



song.addEventListener("timeupdate", function (){
console.log(song.currentTime);
console.log(song.duration);

let fill = document.getElementById("fill")

let position = song.currentTime / song.duration;
fill.style.width = position * 100 + "%";

convertTime(song.currentTime)

if (song.ended) {
next()
}

})


function convertTime(seconds){

    let currentTime = document.getElementById("currentTime");
    
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);

    min = (min<10) ? "0" + min : min;
    sec = (sec<10) ? "0" + sec : sec;

    currentTime.textContent = min + ":" + sec;
    totalTime(Math.round(song.duration))
    
    }

function totalTime(seconds){
    var min = Math.floor(seconds / 60)
    var sec = Math.floor(seconds % 60)
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

   

    if(isNaN(min) || isNaN(sec)) {
        return false
    } else{
        currentTime.textContent += " / " + min + ":" + sec
    }
}


function next() {
    currentSong++;
    console.log(currentSong);
    if (currentSong == data.song.length) {
        currentSong = 0
    }
    playSong();
    play.src = "images/pause.png"
}


function pre(){
    currentSong--;
    if (currentSong < 0) {
        currentSong = data.song.length - 1
    }
    playSong();
    play.src = "images/pause.png"
}

    
function muted() {
    let mute = document.getElementById("mute");
    //console.log(mute);

    if(song.muted) {
        song.muted = false
        mute.src = "images/volume.png"
    } else{
        song.muted = true
        mute.src = "images/volume-mute.png"
    }
}

function decrease() {
    song.volume -=0.2
}

function increase() {
    song.volume += 0.2
}