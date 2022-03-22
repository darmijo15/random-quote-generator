
// The first step is creating an object for the quotes to be used. 
// This is done by passing the author as the key and the quote as the value.
let quoteLibrary = {
        "Lao Tzu": "The journey of a thousand miles begins with one step.",
        "John Lennon": "Life is what happens when you're busy making other plans.",
        "Mae West": "You only live once, but if you do it right, once is enough.",
        "Albert Einstein": "Strive not to be a success, but rather to be of value.",
        "Steven Jobs": "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        "Benjamin Franklin": "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        "Aristotle": "It is during our darkest moments that we must focus to see the light.",
        "Anne Frank": "Whoever is happy will make others happy too.",
        "Maya Angelou": "You will face many defeats in life, but never let yourself be defeated.",
        "Abraham Lincoln": "In the end, it's not the years in your life that count. It's the life in your years.",
        "Babe Ruth": "Never let the fear of striking out keep you from playing the game.",
        "Helen Keller": "Life is either a daring adventure or nothing at all.",
        "Thomas A. Edison": "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        "Confucius": "Life is really simple, but we insist on making it complicated.",
        "John Wooden": "Do not let making a living prevent you from making a life.",
        "Jonathan Swift": "May you live all the days of your life.",
        "Ray Bradbury": "Life is trying things to see if they work.",
        "Winston S. Churchill": "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        "Henry David Thoreau": "Success usually comes to those who are too busy to be looking for it.",
        "Steve Jobs": "If you really look closely, most overnight successes took a long time.",
        "Thomas Jefferson": "I find that the harder I work, the more luck I seem to have.",
        "Barack Obama": "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.",
        "Zig Ziglar": "Don't be distracted by criticism. Remember — the only taste of success some people get is to take a bite out of you.",
        "Estee Lauder": "I never dreamed about success, I worked for it.",
        "Vidal Sassoon": "The only place where success comes before work is in the dictionary."
    };

// Retrieve the paragraph and button elements from the DOM
const quotePara = document.querySelector("#quote-body");
const authorPara = document.querySelector("#quote-author");
const quoteButton = document.querySelector("#quote-btn");

// Add an event listener to the button.
quoteButton.addEventListener('click', function() {

    // Create an array from the keys in the quoteLibrary
    let authorArray = Object.keys(quoteLibrary);
    console.log(authorArray.length);
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