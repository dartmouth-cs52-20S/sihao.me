// const $ = require('jquery')

import $ from 'jquery';
import './style.scss';

$('#main').html('Let\'s get the ball rolling!');

let secElapsed = 0;

setInterval(() => {
  secElapsed += 1;
  $('#subme').html(`You've been on this page for ${secElapsed} sec!`);
}, 1000);

// console.log('Let the hunt begin!');
