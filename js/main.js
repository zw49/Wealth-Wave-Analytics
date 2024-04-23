import getStockPrice from "./api.js";
import mockData from '../mockdata.json' with {type: 'json'};



const dummyData = mockData;

const symbols = ["AAPL", "NVDA", "MSFT", "META"];
for (let key in dummyData) {
  dummyData[key] = dummyData[key]["1. open"];
}

const addButton = document.getElementById("inputField");

addButton.addEventListener("keydown", (event) => {
  // Check if the key pressed is Enter
  if (event.key === "Enter") {
    event.preventDefault();
    const inputValue = addButton.value.toUpperCase();
    // Display the input value

    if(inputValue.length !== 4){
        alert("Please input a valid stock symbol")
    } else {
        addButton.value = "";
        symbols.push(inputValue);
        createCard(inputValue)
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
