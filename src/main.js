/* eslint-disable no-console */
import { Cards } from './cards';
import './styles.css';

let cards = new Cards();
$(document).ready(function () {
  var print = [];
  console.log(cards.deck);
  cards.deck.forEach(element => {
    print.push(
      '<div class="card"> <img src="'+element.img+'"> '+element.name+' </div>'
    );
  });
  $('.board').html(print.join(""));
});

