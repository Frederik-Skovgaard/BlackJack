# Introduction
This is a javascript Black Jack porject.

# Shortcuts
 *  **Change Log Updates**
	- [Version 0.3.0](#Version-0.3.0)
		- [Back-end](#Version-0.3.0\Back-end)
		- [Front-end](#Version-0.3.0\Front-end)
	- [Version 0.2.0](#Version-0.2.0)
		 - [Back-end](#Version-0.2.0\Back-end)
		- [Front-end](#Version-0.2.0\Front-end)
	- [Version 0.1.0](#Version-0.1.0)
	
		- [Back-end](#Version-0.1.0\Back-end)
		- [Front-end](#Version-0.1.0\Front-end)
		
 * **Infomation**
	* [Function's Used](#Function's-Used)
		* [CreateDeck](#Function's-Used\CreateDeck)
		* [CreatePlayerUI](#Function's-Used\CreatePlayerUI)
		* [Shuffle](#Function's-Used\Shuffle)
		* [DealHands](#Function's-Used\DealHands)
		* [GetCardUI](#Function's-Used\GetCardUI)
		* [HitMe](#Function's-Used\HitMe)
		* [Stay](#Function's-Used\Stay)
		* [End](#Function's-Used\End)
		* [GetPoints](#Function's-Used\GetPoints)
		* [Check](#Function's-Used\Check)
		* [ValidateForm](#Function's-Used\ValidateForm)
	* [How To Play](#How-To-Play)
	
		* [Input ](#How-To-Play\Input )
		* [Start](#How-To-Play\Start)
		* [Restart](#How-To-Play\Restart)
		* [Hit me](#How-To-Play\Hit-me)
		* [Stay](#How-To-Play\Stay)
		* [Show](#How-To-Play\Show)
# How To Play

### Input 
* Player must first input, how many players there are.
**Play between 2 and 10 players!**
After the player presses submit, the start btn becomes clickable.

### Start
* When the start btn is pressed the game board loads in.
From here you can use  **Restart**, **Hit me**, **Stay** or **Show**.
### Restart
* Shuffles the deck, loads in the player's & give them cards.
### Hit me
* Deal the current player a card. 
If points after new card above 21 the game is over & the current player lost. 
### Stay
* Stay means you don't want to draw a card & the round moves on to the next player.
Unless you are the last player, then we check the points & declare a winner.
### Show
* Return back to player selection.


# Function's Used

### CreateDeck
 * Goes threw value & symbol arrays to put the together in a card parameter.
### CreatePlayerUI
 * Creates the player box for the score, name & player hand.
### Shuffle
 * Take's the decks length and times it with a random, then switches them around to make it somewhat random.
### DealHands
 * For every player deal a card.
### GetCardUI
 * Get's the card image from to switches witch combines the symbol & value parameters, to get image path.
### HitMe
 * Give the current player a card, & check if current player's score is above or equal to 21 if not continue with next player.
### Stay
 * If is it isn't the last player remove active class & add it to the next player, else end game.
### End
 * Looks who has the closest to 21 point's the declares the winner based on that.
### GetPoints
 * Take's the player's card's weight/Value & return's them in separate parameter.
### Check
 * Check if any of the player's have over 21 point's, if so declare them the losser.
### ValidateForm
 * Look's if textbox is empty or wrong number was place in it, if so error text. 

# To Do's
### Back-end
- [ ] When player receives a second "A" card & the value of that card plus players point equal over 21 point the "A" Should be equal to 1 point
- [ ] 
### Front-end
- [ ] Styling on player box is not satisfying...
- [ ] Change styling on the title div, it doesn't look right...
- [ ] Deck counter in the bottom should fit more with the color theme.
- [ ] The status(Win, loss) box don't know yet, but it doesn't look right either...
- [ ] Amount of player input box... Textbox should look better maybe limit how big the number that can be input... 

# Change log

# [Unreleased]

## [Version 0.3.0](https://www.youtube.com/watch?v=dQw4w9WgXcQ) 22-09-2021
### Back-end
#### Added
 * [x] RenderCard function
 * [x] Reload function
 * [x] UpdatePoints function
 * [x] Check function
 * [x] Stay function
 * [x] HitMe function
#### Changed
 * [x]  StartBlackJack function
 * [x] ValidateForm
### Front-end

#### Changed
- [x] Body styling change 
- [x] Background image
- [x] Color theme change to mat black & mat green
- [x] Scroll bar styling
- [x] validator styling
- [x] Input textbox styling
- [x] Player input btn styling
- [x] Player input box styling


## [Version 0.2.0](https://www.youtube.com/watch?v=dQw4w9WgXcQ) 19-09-2021
### Back-end
#### Added
- [x] DealHand function
- [x] GetCardUI function
- [x]  GetPoints function
- [x] UpdateDeck function
- [x] StartBlackJack function
- [x] ValidateForm function
#### Changed
- [x] Shuffle function revamp
- [x] CreatePlayerUI function change look 
### Front-end
#### Added
- [x] Box for player input
- [x] Textbox for how many player's
- [x] Submit button
#### Changed
- [x] Styling of the button group & the btn's 
- [x] Background styling
- [x] Deck counter got card background image


## [Version 0.1.0](https://github.com/CarfloHD/BlackJack) 17-09-2021

### Back-end

#### Added
- [x] CreateDeck function
- [x] Shuffle function
- [x] CreatePlayer function
- [x] CreatePlayerUI function
- [x] Parameters for the createDeck function 
### Front-end
#### Added
- [x] Main container BlackJava
- [x] Nav title BlackTitle
- [x] Sub container
- [x] Button group with Start, Hit me & Stay Btn's
- [x] Div Player boxes
- [x] Div deck counter
- [x] A lot of styling
