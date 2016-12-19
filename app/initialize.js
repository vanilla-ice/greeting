import $ from "jquery";
import Player from '@vimeo/player';

$(document).ready(() => {
  let iframe = document.querySelector('iframe');
  let player = new Player(iframe)

  player.on('ended', () => {
    let height = $('.header').height();
    $('html, body').animate({scrollTop: height}, 500)
  })
});
