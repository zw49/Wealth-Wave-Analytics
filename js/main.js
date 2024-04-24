import getStockPrice from "./api.js";
import mockData from '../mockdata.json' with {type: 'json'};

document.addEventListener("DOMContentLoaded", function() {
  initValidation("myform");
});


const dummyData = mockData;

const symbols = ["AAPL", "NVDA", "MSFT", "META"];
for (let key in dummyData) {
  dummyData[key] = dummyData[key]["1. open"];
}

const addButton = document.getElementById("inputField");

const themeToggle = document.getElementById("theme-toggle-checkbox");
const slider = document.getElementById("slider");
const themeToggleLabel = document.getElementById("theme-toggle");

var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    head.appendChild(link);

themeToggle.addEventListener("click", () => {
  var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    head.appendChild(link);
  if (themeToggle.checked) {
    slider.style.left = "15px";
    themeToggleLabel.style.backgroundColor = "#2196F3";
    link.href = "../css/theme.css";
    head.appendChild(link);
  } else {
    slider.style.left = "3px";
    themeToggleLabel.style.backgroundColor = "#cccccc";
    link.href = "../css/main.css";
    head.appendChild(link);
  }
});
addButton.addEventListener("keydown", (event) => {
  // Check if the key pressed is Enter
  if (event.key === "Enter") {
    event.preventDefault();
    const inputValue = addButton.value.toUpperCase();
    // Display the input value

    if (inputValue.length !== 4) {
      alert("Please input a valid stock symbol");
    } else {
      addButton.value = "";
      symbols.push(inputValue);
      createCard(inputValue);
    }
  }
});

const createCard = (symbol) => {
  getStockPrice(symbol).then((data) => {
    const listing = document.getElementById("card-listing");
    listing.insertAdjacentHTML(
      "beforeend",
      `
            <div class="card">
                        <div class="card-title">
                            <h2>${symbol}</h2>
                            <p>Current price: $${data.c}</p>
                            <p>High: $${data.h}</p>
                            <p>Low: $${data.l}</p>
                            <p>${data.d}</p>
        
                        </div>
                        <canvas id="${symbol}-chart"></canvas>
                    </div>
            `
    );

    const chartData = {
      // labels: labels,
      datasets: [
        {
          label: symbol,
          data: dummyData,
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };
    const newChart = new Chart(document.getElementById(`${symbol}-chart`), {
      type: "line",
      data: chartData,
      options: {},
    });

    console.log("DATA:", data);
  });
};

const symbolsListing = (symbols) => {
  symbols.forEach((symbol) => {
    createCard(symbol);
  });
};

symbolsListing(symbols);
