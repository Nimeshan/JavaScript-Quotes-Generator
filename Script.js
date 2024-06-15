let quote = document.getElementById("Text");
let author = document.getElementById("Person");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
      quote.innerText = "Failed to fetch quote.";
      author.innerText = "";
    });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
