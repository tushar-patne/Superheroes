const music1 = document.getElementById('captain_marvel_theme');
const music2 = document.getElementById('incredible_hulk_theme');
const music3 = document.getElementById('deadpool_theme');
const music4 = document.getElementById('aquaman_theme');
const music5 = document.getElementById('thor_theme');
const music6 = document.getElementById('black_panther_theme');
const music7 = document.getElementById('doctor_strange_theme');
const music8 = document.getElementById('wonder_woman_theme');
const music9 = document.getElementById('spider_man_theme');

const play1 = document.getElementById("play1");
const play2 = document.getElementById("play2");
const play3 = document.getElementById("play3");
const play4 = document.getElementById("play4");
const play5 = document.getElementById("play5");
const play6 = document.getElementById("play6");
const play7 = document.getElementById("play7");
const play8 = document.getElementById("play8");
const play9 = document.getElementById("play9");

let isPlaying = false;

// play the track
const playMusic1 = function () {
    isPlaying = true;
    music1.play();
    play1.classList.replace('fa-play', 'fa-pause');
}
// pause the track
const pauseMusic1 = function () {
    isPlaying = false;
    music1.pause();
    play1.classList.replace('fa-pause', 'fa-play');
}

// play the track
const playMusic2 = function () {
    isPlaying = true;
    music2.play();
    play2.classList.replace('fa-play', 'fa-pause');
}
// pause the track
const pauseMusic2 = function () {
    isPlaying = false;
    music2.pause();
    play2.classList.replace('fa-pause', 'fa-play');
}

// play the track
const playMusic3 = function () {
    isPlaying = true;
    music3.play();
    play3.classList.replace('fa-play', 'fa-pause');
}
// pause the track
const pauseMusic3 = function () {
    isPlaying = false;
    music3.pause();
    play3.classList.replace('fa-pause', 'fa-play');
}

// play the track
const playMusic4 = function () {
    isPlaying = true;
    music4.play();
    play4.classList.replace('fa-play', 'fa-pause');
}
// pause the track
const pauseMusic4 = function () {
    isPlaying = false;
    music4.pause();
    play4.classList.replace('fa-pause', 'fa-play');
}

// play the track
const playMusic5 = function () {
    isPlaying = true;
    music5.play();
    play5.classList.replace('fa-play', 'fa-pause');
}
// pause the track
const pauseMusic5 = function () {
    isPlaying = false;
    music5.pause();
    play5.classList.replace('fa-pause', 'fa-play');
}

// play the track
const playMusic6 = function () {
    isPlaying = true;
    music6.play();
    play6.classList.replace('fa-play', 'fa-pause');
}
// pause the track
const pauseMusic6 = function () {
    isPlaying = false;
    music6.pause();
    play6.classList.replace('fa-pause', 'fa-play');
}

// play the track
const playMusic7 = function () {
    isPlaying = true;
    music7.play();
    play7.classList.replace('fa-play', 'fa-pause');
}
// pause the track
const pauseMusic7 = function () {
    isPlaying = false;
    music7.pause();
    play7.classList.replace('fa-pause', 'fa-play');
}

// play the track
const playMusic8 = function () {
    isPlaying = true;
    music8.play();
    play8.classList.replace('fa-play', 'fa-pause');
}
// pause the track
const pauseMusic8 = function () {
    isPlaying = false;
    music8.pause();
    play8.classList.replace('fa-pause', 'fa-play');
}

// play the track
const playMusic9 = function () {
    isPlaying = true;
    music9.play();
    play9.classList.replace('fa-play', 'fa-pause');
}
// pause the track
const pauseMusic9 = function () {
    isPlaying = false;
    music9.pause();
    play9.classList.replace('fa-pause', 'fa-play');
}

play1.addEventListener('click', () => {
    isPlaying ? pauseMusic1() : playMusic1()
})
play2.addEventListener('click', () => {
    isPlaying ? pauseMusic2() : playMusic2()
})
play3.addEventListener('click', () => {
    isPlaying ? pauseMusic3() : playMusic3()
})
play4.addEventListener('click', () => {
    isPlaying ? pauseMusic4() : playMusic4()
})
play5.addEventListener('click', () => {
    isPlaying ? pauseMusic5() : playMusic5()
})
play6.addEventListener('click', () => {
    isPlaying ? pauseMusic6() : playMusic6()
})
play7.addEventListener('click', () => {
    isPlaying ? pauseMusic7() : playMusic7()
})
play8.addEventListener('click', () => {
    isPlaying ? pauseMusic8() : playMusic8()
})
play9.addEventListener('click', () => {
    isPlaying ? pauseMusic9() : playMusic9()
})

window.addEventListener("play", function (evt) {
    if (window.$_currentlyPlaying && window.$_currentlyPlaying != evt.target) {
        window.$_currentlyPlaying.pause();
    }
    window.$_currentlyPlaying = evt.target;
}, true);