const cards = ['AS', '2', '3', '4', '5', '6', '7', '8','9', '10', 'prince', 'queen', 'king'];
const series = ["Spades", "hearts", "diamond", "clover"];
const deck = [];

for (let i=0; i< series.length; i++) {
   for (let j=0; j<cards.length; j++) {
    deck.push({value:cards[j], suit: series[i] });
   }
}
console.log (deck);

function reverseShuffle (deck) {
    return deck.reverse ();
}

const shuffleDeck = reverseShuffle(deck.slice());

const emptyDiscardPile = [];

const player1 = {
    deck: []
};

const player2 = {
    deck: []
};

  
  function dealCards (player, deck) {
    for (let i = 0; i<4; i++ ){
        player.deck.push (deck.shift());
  }
    }
  
  dealCards (player1, shuffleDeck);
  dealCards (player2, shuffleDeck);

const currentPlayerI = 0 ;
const startingPlayer = currentPlayerI === 0 ? player1 : player2 ;
  console.log ('startingPlayer:', startingPlayer);


let currentPlayer = currentPlayerI; 
function randomPlayer () {
    currentPlayer = currentPlayer === 0 ? 1 : 0;
  }
randomPlayer ();


console.log (player2.deck);

// each turn

function createCard (value, suit, isFaceUp = false) {
    return {value, suit, isFaceUp};}

function printHand (playerName, hand) {
    const handStr = hand.map(card => card.isFaceUp ? '${card.value} of ${card.suit}' : '?').join(',');
    console.log (`${playerName}'s hand: [${handStr}]`);}

const player1Hand = [
    {cards: 'AS', series: 'Spades', isFaceUp: false},
    {cards: '3', series: 'hearts', isFaceUp: false},
    {cards: '7', series: 'diamond', isFaceUp: false},
    {cards: 'king', series: 'clover', isFaceUp: false},
    {cards: '9', series: 'diamond', isFaceUp: false},
    {cards: '2', series: 'Spades', isFaceUp: false},
];


const player2Hand = [
    {cards: 'queen', series: 'hearts', isFaceUp: false},
    {cards: 'prince', series: 'Spades', isFaceUp: false},
    {cards: '5', series: 'diamond', isFaceUp: false},
    {cards: '4', series: 'clover', isFaceUp: false},
    {cards: 'king', series: 'hearts', isFaceUp: false},
    {cards: '4', series: 'diamond', isFaceUp: false},
];

const discardPile = {cards:'10', series: 'Spades'};

function printBoard(player1, player2, discardPile) {
printHand ("player1", player1);
printHand ("player2", player2);
}
console.log (`\nTop card of discard pile: ${discardPile.cards} of ${discardPile.series}`);

printBoard(player1Hand, player2Hand, discardPile);

const shuffleDeck = reverseShuffle (deck.slice());

const discardPile = suffleDeck.pop();

dealCards (player1, shuffleDeck);
dealCards (player2, shuffleDeck);

let currentPlayerIndex = Math.floor(math.rendom()*2);

function calculateScore (hand) {
  return  hand.reduce((total, card) => {
    if (card.isFaceUp) {
      if (card.value === 'AS') return total +1; 
      if (card.value === '7') return total;
      if (card.value === 'prince') return total -1;
      if (card.value === 'queen') return total +12;
      if (card.value === 'king') return total +13;
      return total + parseInt(card.value);
    }
    return total 
  } 
}
