$(function() {

	//Listen for event on all squares of the board
	var $square = $('#board');

	//
	//This puts an x or an o. 
	// "turn" is going to increase and if it's even, 
	// we print x and if it's odd, we print o.
	var turn = 0;
	var takeTurns = function(){
		var $x = $(event.target);
		//this is the stuff in the square
		var xWords = $x.html();
	//This line is so that it only works if the square is blank.
	//Also, this hackily fixes the thing where the background box voiped
	if( xWords === "&nbsp;"){
		//switches between even and odd to switch x/o
		var $whoTurn = $("#whoTurn");
		if(turn % 2 ===0){
			$x.html("X");
			$x.css("background-color", "gray");
			$whoTurn.html("It's O's turn.");
		} else {
			var x = $(event.target);
			$x.html("O");
			$x.css("background-color","red");
			$whoTurn.html("It's X's turn.");
		}
		turn++; //to 
		staleMate(); //checks for stalemate
		incCheck(); //initiates win program
	}
	}

	$($square).click(takeTurns);
	//
	//
	// This is the RESET BUTTON
	var $resetButton = $("#resetButton");
	var $inBox = $(".box");
	var resetBoard = function(){
		var $whoTurn = $("#whoTurn");
		for(var t = 0; t < $inBox.length; t++){
			$($inBox[t]).html("&nbsp;");
			$($inBox[t]).css("background-color", "");
			$($whoTurn).html("It's X's turn. Click a square to make your move.");
			//whoTurn.style font size smaller
			$($square).click(takeTurns);
			turn = 0;
		}
	}

	$($resetButton).click(resetBoard);
	//This reset button is breaking my hover css. 
	//I could have just had it reload the screen, 
	//but that felt like cheating, 
	//so currently this is imperfect.

var staleMate = function (){
	if (turn === 9){
		$whoTurn.html("STALEMATE. Click reset to start over.");
	}
}

	// get the boxes that are checked
	// check to see if any combos count as wins
	// all possible win combos
	var allWins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

	//should iterate through each array in allWins
	var incCheck = function(){ //USE ITERATOR FOR THIS???
		for(var x = 0; x < allWins.length; x++){
			if (turn > 4) {
			convertWin(allWins[x]);
			console.log("HEY!")
		}
		}
	}
	//should check to see if the contents of the win is
	//true compared to the board
	var convertWin = function(arr){
			var a = arr[0];
			var b = arr[1];
			var c = arr[2];
			var $whoTurn = $("#whoTurn");
			var $inTheBox = $(".box");
			if((($($inTheBox[a]).html()) === ($($inTheBox[b]).html())) && 
				(($($inTheBox[b]).html()) === ($($inTheBox[c]).html())) && 
				(($($inTheBox[c]).html()) !== "&nbsp;")){
				if ($($inTheBox[a]).html() === "X") {
					$whoTurn.css("fontSize", "50px");
					$whoTurn.html("X WINS!");} else {
						$whoTurn.html("O WINS!");
					}

					//square.removeEventListener("click", takeTurns);
					$($square).off("click", takeTurns);
					//$($square).click("");
				}
		}


	});
