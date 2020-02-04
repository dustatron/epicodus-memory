/* eslint-disable no-console */
import { Cards } from './cards';
import { UI } from './ui';
import './styles.css';

let cards = new Cards();
let ui = new UI(cards);

$(document).ready(function () {
  var ans = [];
  var turns = 0;
  // function  clearAns() {
  //   ans = [];
  // }

  ui.drawCards(cards.deck);  

  $('.board').on('click', function(event){
    console.log(event.target.name);
    turns += 1;
    ans.push(event.target.name);
    checkWin(ans);

  });


  function checkWin(arr) {
    if(arr.length <= 2){
      if(arr[ans.length -1] === arr[ans.length -2]){
        return console.log('win');
      } else if (arr >= 3) {
        // clearAns();
        return console.log('over 3');
      } else {
        return console.log('no match');
      }
    }
  }
});
