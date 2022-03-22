let quoteLibrary = {
        "Wayne Gretzky": "You miss 100% of the shots you don't take.",
        "Lao Tzu": "The journey of a thousand miles begins with one step.",
        "John Lennon": "Life is what happens when you're busy making other plans.",
        "Mae West": "You only live once, but if you do it right, once is enough.",
        "Albert Einstein": "Strive not to be a success, but rather to be of value."
    };

const quotePara = document.querySelector("#quote-body");
const authorPara = document.querySelector("#quote-author");
const quoteButton = document.querySelector("#quote-btn");

quoteButton.addEventListener('click', function() {
    let authorArray = Object.keys(quoteLibrary);
    let authorIndex = Math.floor(Math.random() * authorArray.length);

    let randomAuthor = authorArray[authorIndex];
    let randomQuote = quoteLibrary[randomAuthor];

    quotePara.innerHTML = `${randomQuote}`;
    authorPara.innerHTML = `${randomAuthor}`;
})