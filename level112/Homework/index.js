const cryptoInput = document.getElementById('cryptoInput');
const searchButton = document.getElementById('searchButton');
const cryptoInfo = document.getElementById('cryptoInfo');

// Function to fetch cryptocurrency data
const fetchCryptoData = async (crypto) => {
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${crypto}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching crypto data:", error);
        return { error: error.message };
    }
};

// Function to render cryptocurrency data
const renderCryptoData = (data) => {
    if (data.error) {
        cryptoInfo.innerHTML = `<p>Error: ${data.error}</p>`;
        return;
    }

    if (data.length === 0) {
        cryptoInfo.innerHTML = '<p>No results found</p>';
        return;
    }

    const { name, current_price, market_cap, price_change_percentage_24h } = data[0];
    cryptoInfo.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Current Price:</strong> $${current_price.toFixed(2)}</p>
        <p><strong>Market Cap:</strong> $${market_cap.toLocaleString()}</p>
        <p><strong>24h Change:</strong> ${price_change_percentage_24h.toFixed(2)}%</p>
    `;
};

// Main function to handle search logic
const handleSearch = async () => {
    const cryptoName = cryptoInput.value.trim().toLowerCase();
    
    // Validate input length
    if (cryptoName.length < 3) {
        cryptoInfo.innerHTML = '<p>Please enter at least 3 characters to search.</p>';
        return;
    }

    // Clear the previous result
    cryptoInfo.innerHTML = '<p>Loading...</p>';

    // Fetch data and render it
    const data = await fetchCryptoData(cryptoName);
    renderCryptoData(data);
};

// Event listener for the search button
searchButton.addEventListener('click', handleSearch); 