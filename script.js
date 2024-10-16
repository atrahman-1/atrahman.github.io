const quotes = [
    "The Sopranos",
    "Breaking Bad",
    "Better Call Saul",
    "The Wire",
    "BMF",
    "Power",
    "Dexter",
    "The Walking Dead",
    "Squid Game",
    "Prison Break",
    "Top Boy",
    "Shutter Island",
    "Catch Me If You Can",
    "Django Unchained",
    "The Wolf Of Wall Street",
    "John Wick",
    "Fight Club",
    "Se7en",
    "Slumdog Millionare",
    "Green Book"

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
