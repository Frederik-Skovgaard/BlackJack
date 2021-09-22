//------------------------Varibles-----------------------//
var symbols = ["Diamond", "Spade", "Clover", "Heart"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var deck = new Array();
var players = new Array();
var currentPlayer = 0;
var playerCount;

//------------------------Functions-----------------------//

//Run's threw the arrays & puts them inside the deck array.
function createDeck() {
    deck = new Array();
    var indexCounter = 0;
    for (var i = 0; i < values.length; i++)
    {
        for (var x = 0; x < symbols.length; x++)
        {
            var Weight = parseInt(values[i]);
            if(values[i] == "J" || values[i] == "Q" || values[i] == "K")
                Weight = 10;
            if(values[i] == "A")
                Weight = 11;

            indexCounter++;

            var card = {Value: values[i], Suit: symbols[x], Weight: Weight, ID: indexCounter};
            deck.push(card);
        } 
    }
}

//Give's the player array id, point's & hand array parameter
function createPlayer(num) {
    players = new Array();
    for(var i = 1; i <= num; i++)
    {
        var hand = new Array();
        var player = {Name: "Player " + i, ID: i, Points: 0, Hand: hand};
        players.push(player);

    }
}

//Creates the player box for the score, name & cards 
function createPlayerUI() {
    document.getElementById("playerRow").innerHTML = "";
    for(var i = 0; i < players.length; i++)
    {
        var div_playerbox = document.createElement("div");
        var p_score = document.createElement("p");
        var h3_playername = document.createElement("h3");
        var div_row = document.createElement("div");
        var div_cardbox = document.createElement("div");


        div_playerbox.className = "col-3 PlayerBox";
        div_playerbox.id = "PlayerBox-" + i;

        h3_playername.className = "Display-2 playername";
        h3_playername.id = "Playername-" + i;

        div_row.className = "row";
        div_cardbox.className = "col CardBox";
        div_cardbox.id = "PlayerHand-" + i;

        p_score.className = "ScoreStyling";
        p_score.id = "Score-" + i;


        h3_playername.innerHTML = "Player " + (i + 1);
        div_playerbox.appendChild(h3_playername);
        div_playerbox.appendChild(div_row);
        div_row.appendChild(div_cardbox);
        div_playerbox.appendChild(p_score);

        document.getElementById("playerRow").appendChild(div_playerbox);

    }
}

//Starts the game by running the listet methods
function startBlackJack() {
    document.getElementById("ShowPlayercount").style.display = "inline-block";
    document.getElementById("TextShow").style.display = "block";
    document.getElementById("formblock").style.display = "none";
    document.getElementById("box").className = "boxShow";

    document.getElementById("restartBTN").value = "Restart";
    document.getElementById("status").className = "box";
    document.getElementById("hitMeBTN").disabled = false;
    document.getElementById("stayBTN").disabled = false;

    document.getElementById("DeckBox").style.display = "block";

    currentPlayer = 0;
    createDeck();
    shuffle();
    createPlayer(playerCount);
    createPlayerUI();
    dealHands();
    document.getElementById("PlayerBox-" + currentPlayer).classList.add("active");
}

//Take's the decks length * with a random, then switches them around, to simulate random.
function shuffle() {
    for (var i = deck.length - 1; i > 0; i--)
    {
        radnomIndex = Math.floor(Math.random() * (i + 1));

        [deck[i], deck[radnomIndex]] = [deck[radnomIndex], deck[i]];
    }
        
    
}

//For every player deal a card
function dealHands() {
    for(var i = 0; i < 2; i++)
    {
        for(var x = 0; x < players.length; x++)
        {
            var card = deck.pop();
            players[x].Hand.push(card);
            renderCard(card, x);
            updatePoints();
        }
    }

    updateDeck();
}

//Create the card
function renderCard(card, player) {
    var hand = document.getElementById("PlayerHand-" + player);
    hand.appendChild(getCardUI(card));
}

//Get the card image
function getCardUI(card) {
    var cardImg = document.createElement("img");
    var imgPath = "/Imges/"

    switch(card.Suit) 
    {
        case "Diamond":
        imgPath += "Diamond-"
        break;
        case "Spade":
        imgPath += "Spade-"
        break;
        case "Clover":
        imgPath += "Clover-"
        break;
        case "Heart":
        imgPath += "Heart-"
        break;
        
    }

    switch(card.Value)
    {
        case "2":
            imgPath += "2"
        break;
        case "3":
            imgPath += "3"
        break;
        case "4":
            imgPath += "4"
        break;
        case "5":
            imgPath += "5"
        break;
        case "6":
            imgPath += "6"
        break;
        case "7":
            imgPath += "7"
        break;
        case "8":
            imgPath += "8"
        break;
        case "9":
            imgPath += "9"
        break;
        case "10":
            imgPath += "10"
        break;
        case "J":
            imgPath += "J"
        break;
        case "Q":
            imgPath += "Q"
        break;
        case "K":
            imgPath += "K"
        break;
        case "A":
            imgPath += "A"
        break;
    }

    cardImg.style.backgroundImage = "url('" + imgPath + ".png')";

    cardImg.className = "DeckImg";
    return cardImg;
}

//Takes the player's cards weight(value) and returns them
function getPoints(player) {
    var points = 0;
    for(var i = 0; i < players[player].Hand.length; i++) 
    {
        points += players[player].Hand[i].Weight;
    }
    players[player].Points = points;
    return points;
}

//Change the score in the player box
function updatePoints()
{
    for(var i = 0; i < players.length; i++)
    {
        getPoints(i);
        document.getElementById("Score-" + i).innerHTML = players[i].Points;
    }
}

//Change the nummber of cards left in the deck
function updateDeck() {
    document.getElementById("DeckCount").innerHTML = deck.length;
}

//Give the current player a card
function hitMe() {
    var card = deck.pop();
    players[currentPlayer].Hand.push(card);
    renderCard(card, currentPlayer);
    updatePoints();
    updateDeck();
    check();
}

//If is isen't the last player remove active class and add it to the other player else end the game
function stay() {
    if (currentPlayer != players.length-1) 
    {
        document.getElementById("PlayerBox-" + currentPlayer).classList.remove("active");
        currentPlayer += 1;
        document.getElementById("PlayerBox-" + currentPlayer).classList.add("active");
    }
    else 
    {
        end();
    }
}

//Looks who has the closes't to 21 point's & declare them winner
function end() {
    var winner = -1
    var score = 0;

    for(var i = 0; i < players.length; i++)
    {
        if(players[i].Points > score && players[i].Points < 22)
        {
            winner = i;
        }

        score = players[i].Points;
    }

    document.getElementById("hitMeBTN").disabled = true;
    document.getElementById("stayBTN").disabled = true;

    document.getElementById("status").innerHTML = "Winner: Player " + players[winner].ID;
    document.getElementById("status").className = "boxWin";
}

//Check if any of the players have over 21 points if so declare them losser
function check() {
    if (players[currentPlayer].Points > 21)
    {
        document.getElementById("status").innerHTML = "Player " + players[currentPlayer].ID + " Lost";
        document.getElementById("status").className = "boxLoss";
        
        document.getElementById("hitMeBTN").disabled = true;
        document.getElementById("stayBTN").disabled = true;
    }
}

//Reaload site
function reload() {
    window.location.reload();
}

//Validation
function validateForm() {
    let numberText = document.forms["multiplayer"]["numsub"].value;
    let text;

    if (numberText == "")
    {
        text = "* Players must be filled out";
        document.getElementById("validator").innerHTML = text;
        return false;
    }
    else if (isNaN(numberText) || numberText < 2 || numberText > 10) 
    {
        text = "* Input can't be under 2 or above 10"
        document.getElementById("validator").innerHTML = text;
        return false;
    }
    else
    {
        document.getElementById("validator").innerHTML = "";
        document.getElementById("restartBTN").disabled = false;
        playerCount = numberText;
        return false;
    }

    
}