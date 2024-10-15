const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "The best way to predict the future is to create it."
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-display').textContent = quotes[randomIndex];
}

document.getElementById('quote-button').addEventListener('click', getRandomQuote);

function repeatvalue() {
         var txtName = document.getElementById("Username");
         var lblName = document.getElementById("label");
         lblName.innerHTML = txtName.value;
      }
