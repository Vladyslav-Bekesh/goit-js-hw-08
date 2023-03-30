//! IMPORT LIBRARIES ---------
import Player from '@vimeo/player';
import _ from 'lodash';


//! PLAYER ---------
//* refs
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

//*player current time
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

//*player current time
player.on(
  'timeupdate',
  _.throttle(({seconds}) => {
    //throttle body
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
);
