
const apiKey = "cohgi09r01qkmfrc1lvgcohgi09r01qkmfrc1m00"; 
const symbol = "AAPL"; 


function getStockPrice(symbol) {
    return fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            return null;
        });
}

// getStockPrice(symbol);

export default getStockPrice;