import Player from '@vimeo/player';

//! PLAYER ---------
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', ({seconds}) => {
  console.log(seconds);
}); 