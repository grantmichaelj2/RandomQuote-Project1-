// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Create a list of quotes to be displayed
var Tyrion = {quote: "Once you've accepted your flaws, no one can use them against you",
 source: "Tyrion Lannister",
citation: "Game of Thrones",
color: "blue"};

var Varys = {quote: "A very small man can cast a very large shadow.",
source: "Lord Varys",
citation: "Game of Thrones",
color: "orange"};

var Cersei = {quote: "When you play the game of thrones, you win or you die",
source: "Cersei Lannister",
citation: "Game of Thrones",
color: "#36b55c"};

var Ygritte = {quote:"You know nothing Jon Snow",
source:"Ygritte",
citation: "Game of Thrones",
color: "grey"};

var Ned = {quote:"Winter is coming",
source:"Ned",
citation: "Game of Thrones",
color: "red"};

var Mance = {quote:"The Freedom to make my own mistakes was all I ever wanted.",
source:"Mance Rayder",
citation: "Game of Thrones",
color: "black"};

var quotesRemaining = 6

//Nest the quotes into a list
var quotes = [Tyrion, Varys, Cersei, Ygritte, Ned, Mance];

//Set up an empty list for already selected quotes
var selectedQuote = [];

/****************

Create a function named getRandomQuote which:
-selects a random quote object from the quotes array
-returns the randomly selected quote object

*****************/

function getRandomQuote(){ 
	//Generate a random number from 1-6
	var randomNumber = Math.floor((Math.random() * quotesRemaining ));
	//Store the quote to a variable
	var quoteGenerated = quotes[randomNumber];
	//Remove the variable from the list
	var removedItem = quotes.splice(randomNumber, 1);
	//Show change in quotesRemaining
	quotesRemaining -= 1;
	//Add removed item to new list
	selectedQuote.push(removedItem);
	if (quotesRemaining == 0){
		quotes = [Tyrion, Varys, Cersei, Ygritte, Ned, Mance];
		selectedQuote = [];
		quotesRemaining = 6;
	};
	//Store quote class in a list
	return quoteGenerated;
};

/****************

Create a function named printQuote which follows these rules:

-printQuote calls the getRandomQuote function and stores the returned quote object in a variable

-printQuote constructs a string using the different properties of the quote object using the 
following HTML template: <p class="quote"> [quote here] </p> <p class="source"> [source here] 
<span class="citation"> [citation here] </span> <span class="year"> [year here] </span> </p>

-printQuote doesn't add a <span class="citation"> for a missing citation or a <span class="year">
 if the year property is missing

-printQuote displays the final HTML string to the page. You can use the following JS snippet to 
accomplish that: document.getElementById('quote-box').innerHTML
*****************/

function printQuote(){
	//Recieves variable from getRandomNumber function
	var quote = getRandomQuote();
	//Takes attributes from object selected
	var content = "<p class='quote'>" + quote.quote + "</p> <p class='source'>"
	 + quote.source + "<span class='citation'>" + quote.citation + "</span></p>";
	 //Edits our HTML to reflect
	document.getElementById('quote-box').innerHTML = content;
	document.body.style.backgroundColor = quote.color;
};

//Every 15 seconds show a new quote

setInterval(function printQuote(){
	var quote = getRandomQuote();
	var content = "<p class='quote'>" + quote.quote + "</p> <p class='source'>"
	 + quote.source + "<span class='citation'>" + quote.citation + "</span></p>";
	document.getElementById('quote-box').innerHTML = content;
	document.body.style.backgroundColor = quote.color;
}, 15000);






