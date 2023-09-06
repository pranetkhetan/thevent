let songs = [
    [
        'Yiruma',
        'Kiss the Rain',
        'ktr.ogg'
    ],
    [
        'Yiruma',
        'The River flows in you',
        'river.ogg'
    ],
    [
        'Yiruma',
        'Over the Horizon',
        'horizon.ogg'
    ],
    [
        'Ludwig van Beethoven',
        'Moonlight Sonata',
        'moonlight.ogg'
    ]
]
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
audio = new Audio();
audio.autoplay = true;
audio.loop = true;
audio.volume = 0.3;
function runSong() {
    let index = getRndInteger(0,3)
    let song = songs[index]
    audio.src = '/audio/' + song[2]
    audio.play()
}
runSong()
t = setInterval(runSong,180000)