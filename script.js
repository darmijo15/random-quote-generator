
// The first step is creating an object for the quotes to be used. 
// This is done by passing the author as the key and the quote as the value.
let quoteLibrary = {
        "Wayne Gretzky": "You miss 100% of the shots you don't take.",
        "Lao Tzu": "The journey of a thousand miles begins with one step.",
        "John Lennon": "Life is what happens when you're busy making other plans.",
        "Mae West": "You only live once, but if you do it right, once is enough.",
        "Albert Einstein": "Strive not to be a success, but rather to be of value."
    };

// Retrieve the paragraph and button elements from the DOM
const quotePara = document.querySelector("#quote-body");
const authorPara = document.querySelector("#quote-author");
const quoteButton = document.querySelector("#quote-btn");

// The button should generate a random quote when clicked, so
// lets add an event listener.
quoteButton.addEventListener('click', function() {

    // Creating a function that returns a random object was much trickier
    // than returning a random value from an array. With an array, it's as simple as
    // generating a random number multiplied by the array length, and passing that 
    // number as the index number. That same methodology can actually be used with
    // objects.

    // Create an array from the keys in the quoteLibrary
    let authorArray = Object.keys(quoteLibrary);
    // Generate an index number to be used in the array by multiplying 
    // Math.random times the authorArray length and flooring it
    let randomIndex = Math.floor(Math.random() * authorArray.length);

    // Declare a variable, randomAuthor, that passes the random index number 
    // into the authorArray
    let randomAuthor = authorArray[randomIndex];
    // Declare a variable, randomQuote, that passes the author (the object key)
    // in order to grab the corresponding quote (the object value).
    let randomQuote = quoteLibrary[randomAuthor];

    // Insert the quote into the quote-paragraph element so it displays 
    // on the webpage.
    quotePara.innerHTML = `" ${randomQuote} "`;
    // Insert the quote's author into the author-paragraph element 
    authorPara.innerHTML = `- ${randomAuthor}`;
})