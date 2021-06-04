const sounds = [
    "dad",
    "daddy"
];

sounds.forEach(sound=>{
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    const song = document.getElementById(sound);

    btn.addEventListener('click', () => {
        console.log(song)
        stopSongs()
        song.play();
    })

    document.body.appendChild(btn)
});

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause();
        song.currentTime = 0;
    })
}