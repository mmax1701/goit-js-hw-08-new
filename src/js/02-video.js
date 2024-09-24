import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player')
const player = new Player(iframe);


function onPlay(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data))
}

player.on('timeupdate', throttle(onPlay, 1000));

const getTime = JSON.parse(localStorage.getItem("videoplayer-current-time")) ?? '0';
const time = getTime.seconds;


player.setCurrentTime(time).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
