import $ from "jquery";
import Player from '@vimeo/player';

$(document).ready(() => {
  let iframe = document.querySelector('iframe');
  let player = new Player(iframe)

  player.on('ended', () => {
    let height = $('.header').height();
    $('html, body').animate({scrollTop: height}, 500)
  })

  $("button").on('click', (e) => {
    e.preventDefault()

    let target = $(e.target).val();
    $.ajax({
      type: "POST",
      url: "contact.php",
      data: {
        domain: window.location.origin,
        target: target
      },

      success: () => {
        $('.js-popup').removeClass('hidden')
      },

      error: () => {
        alert('error')
      }
    });
  });

  $('.js-close').on('click', () => {
    $('.js-popup').addClass('hidden')
  });

});
