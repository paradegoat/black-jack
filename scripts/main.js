/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


var aceCheck = [];
function handValue (hand) {
  var aces = [];
  var sum = 0;

  for (var i = 0; i < hand.length; i++) {
    if (hand[i] === "A" || hand[i] === "K" || hand[i] === "Q" || hand[i] === "J") {
      sum += 10;
      aceCheck.push(hand[i]);
    } else {
      sum += parseInt(hand[i]);
       }
  }

  if (aceCheck.includes("A")) {
    if (sum <= 20){
      sum += 1;
    } else {
      sum -= 9;
    }
  }
return sum;
}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
// hand = hand.reduce((a, b) => a + b);
