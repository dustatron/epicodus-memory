/* eslint-disable no-console */
import { Cards } from './cards';
import { UI } from './ui';
import './styles.css';

let cards = new Cards();
let ui = new UI(cards);

$(document).ready(function () {

  ui.drawCards();
  

});

