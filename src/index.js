import $ from 'jquery';
import './style.scss';

$('#main').html('Let\'s get started!');

let secElapsed = 0;

setInterval(() => {
  secElapsed += 1;
  $('#subme').html(`You've been on this page for ${secElapsed} sec!`);
}, 1000);
