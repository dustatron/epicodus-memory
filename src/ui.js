export function UI(cards) {
  this.drawCards = function () {
    var print = [];
    cards.deck.forEach(element => {
      print.push(
        '<div class="card"> <img src="' + element.img + '"> ' + element.name + ' </div>'
      );
    });

    //print array to screen
    $('.board').html(print.join(""));
  };
}