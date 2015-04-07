function Game(){
	this.p1 = new Player("Mike");
	this.p2 = new Player("Allxie");
}

Game.prototype.deal = function(){
	var deck = new Deck();
	this.p1.cards = deck.half1;
	this.p2.cards = deck.half2;

}

function Player(name){
	this.name = name;
	this.cards = [];
}

function Card(numg){
	this.num = numg;
}



function Deck(){
	var allTheCards = [];
	for (var i = 0; i < 13; i++){
		allTheCards.push(new Card(i))push(new Card(i))push(new Card(i))push(new Card(i));
	}
//shuffle
//split
}


// var wholeDeck = [];

// function Queue() {}
// Queue.prototype.enqueue = Array.prototype.unshift;
// Queue.prototype.dequeue = Array.prototype.pop;

// function Queue() {
//   this.items = [];
//   this.enqueue = function(item) {
//     this.items.unshift(item);
//   };
//   this.dequeue = function() {
//     return this.items.pop();
//   };
// };