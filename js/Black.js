//---------------Varibles---------------
let GameStart = false;
let gameOver = false;
let playerWon = false;

let cardValue = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let kuloer = ["Diamond", "Heart", "Clubs", "Spade"];
let deck = new Array();

let dealersCard =  ["wow", "wow"];
let playersCard = [""];

let dealerScore = 0;
let playerScore = 0;

//---------------Function---------------

//Creates the deck & set's J, Q & K to be equel to 10 & A to be 11 point's.
function createCardGame(){
    deck = new Array();
    for(var i = 0; i < cardValue.length; i++)
    {
        for(var x = 0; x < kuloer.length; x++)
        {
            var weight = parseInt(cardValue[i]);
            if (cardValue[i] == "J" || cardValue[i] == "Q" || cardValue[i] == "K")
                weight = "10";

            if (cardValue[i] == "A")
                weight = "11";
            
            var card = { cardValue: cardValue[i], kuloer: kuloer[x], weight: weight };
            deck.push(card);
        }
    }
}


function mixGameCards(gameCards) {

}

function getCardString(card) {

}

function nextCard() {

}

function getValueOfCard(card = []) {

}

function getScore(card) {

}

function updateScore() {

}

function chekcIfGameIsOver() {

}

function viewStatus() {

}