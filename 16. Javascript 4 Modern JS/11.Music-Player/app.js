const container = document.querySelector(".container")
const image = document.querySelector("#music-image")
const audio = document.querySelector("#music-audio")
const title = document.querySelector(".music-details .title")
const singer = document.querySelector(".music-details .singer")
const previous = document.querySelector("#controls #prev")
const play = document.querySelector("#controls #play")
const next = document.querySelector("#controls #next")
const duration = document.querySelector("#duration")
const current_time = document.querySelector("#current-time")
const progress_bar = document.querySelector("#progress-bar")
const volume = document.querySelector("#volume")
const volume_bar = document.querySelector("#volume-bar")
const ul = document.querySelector("ul")

const player = new MusicPlayer(musicList);


window.addEventListener("load", () => {
    let music = player.getMusic()
    displayMusic(music)
    displayMusicList(player.musicList)
    isPlayingNow();
})

function displayMusic(music) {
    title.innerText = music.title
    singer.innerText = music.singer
    image.src = "img/" + music.img
    audio.src = "mp3/" + music.file
}

play.addEventListener("click", () => {
    const isMusicPlayer = container.classList.contains("playing")
    isMusicPlayer ? pauseMusic() : playMusic();
})

function pauseMusic() {
    container.classList.remove("playing")
    play.querySelector("i").classList = "fa-solid fa-play"
    audio.pause()
}

function playMusic() {
    container.classList.add("playing")
    play.querySelector("i").classList = "fa-solid fa-pause"
    audio.play()
}

prev.addEventListener("click", () => {
    prevMusic();
    let music = player.getMusic()
    displayMusic(music)
    playMusic()
    isPlayingNow();
})

function prevMusic() {
    player.previous()
}

next.addEventListener("click", () => {
    nextMusic();
    let music = player.getMusic()
    displayMusic(music)
    playMusic()
    isPlayingNow();
})

function nextMusic() {
    player.next()
}

const calculateTime = (seconds) => {
    const minute = Math.floor(seconds / 60)
    const second = Math.floor(seconds % 60)
    new_second = second < 10 ? "0"+second : second
    const sonuc = `${minute}:${new_second}`
    return sonuc
}

audio.addEventListener("loadedmetadata", () => {
    duration.textContent = calculateTime(audio.duration)
    progress_bar.max = Math.floor(audio.duration)
})

audio.addEventListener("timeupdate", () => {
    progress_bar.value = Math.floor(audio.currentTime)
    current_time.textContent = calculateTime(progress_bar.value)
})

progress_bar.addEventListener("input", () => {
    current_time.textContent = calculateTime(progress_bar.value)
    audio.currentTime = progress_bar.value
})

let muted = false;
volume.addEventListener("click", () => {
    if(muted){
        audio.muted = false;
        muted = false
        volume.classList = "fa-solid fa-volume-high"
        volume_bar.value = 55
        audio.volume = 0.55
    } else {
        audio.muted = true;
        muted = true
        volume.classList = "fa-solid fa-volume-xmark"
        volume_bar.value = 0
    }
})

volume_bar.addEventListener("input", (e) => {
    const value = e.target.value
    audio.volume = value / 100
    if (value == 0) {
        audio.muted = true;
        muted = true
        volume.classList = "fa-solid fa-volume-xmark"
    } else {
        audio.muted = false;
        muted = false
        volume.classList = "fa-solid fa-volume-high"
    }
})

const displayMusicList = (list) => {
    for (let i = 0; i < list.length; i++) {
        let liTag = `
            <li li-index="${i}" onclick="selectedMusic(this)" class="list-group-item">
                <span>${list[i].getName()}</span>
                <span id="music-${i}" class="badge bg-primary rounded-pill">${list[i].getName()}</span>
                <audio class="music-${i}" src="mp3/${list[i].file}"></audio>
            </li>
        `
        ul.insertAdjacentHTML("beforeend", liTag)


        let liAudioDuration = ul.querySelector(`#music-${i}`)
        let liAudioTag = ul.querySelector(`.music-${i}`)

        liAudioTag.addEventListener("loadeddata", () => {
            liAudioDuration.innerText = calculateTime(liAudioTag.duration)
        })
    }
}

const selectedMusic = (li) => {
    player.index = Number(li.getAttribute("li-index"))
    displayMusic(player.getMusic());
    playMusic();
    isPlayingNow();
}

const isPlayingNow = () => {
    for (let li of ul.querySelectorAll("li")) {
        if (li.classList.contains("playing")) {
            li.classList.remove("playing")
        }
        if (li.getAttribute("li-index") == player.index) {
            li.classList.add("playing")
        }
    }
}

audio.addEventListener("ended", () => {
    nextMusic();
    let music = player.getMusic()
    displayMusic(music)
    playMusic()
    isPlayingNow();
})
