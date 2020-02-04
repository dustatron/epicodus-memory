/* eslint-disable no-console */
export function UI(cards) {
  // var arr = cards.deck;
  var game = buildBoard();

  this.drawCards = function () {
    var print = [];
    game.forEach((element) => {
      print.push(
        '<div class="card"> <img name="'+ element.id +'" src="' + element.img + '"> ' + element.name + ' </div>'
      );
    });

    //print array to screen
    $('.board').html(print.join(""));
  };
  
  function buildBoard() {
    var gameArr = [];
    
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < cards.deck.length; j++) {
        var random = Math.floor(Math.random() * 10);
        gameArr.splice(random, 0, cards.deck[j]);
      }
      
    }
    console.log(gameArr);
    return gameArr; 
  }
}
