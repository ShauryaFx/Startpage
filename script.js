// Function to fetch and display weather information from WeatherAPI
async function fetchWeather() {
    const apiKey = '6bf59238f39a458db9f91308241706'; // Replace with your WeatherAPI key
    const location = 'Yamunanagar'; // Replace with your desired location
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Weather data request failed');
        }
        const data = await response.json();
        const weatherDescription = data.current.condition.text;
        const temperature = data.current.temp_c;
        document.getElementById('weatherInfo').textContent = `Weather in ${location}: ${weatherDescription}, ${temperature}°C`;
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        document.getElementById('weatherInfo').textContent = 'Weather information unavailable';
    }
}

// Function to handle search input
function handleSearch(event) {
    // Access search box on "/" key press
    if (event.key === '/') {
        event.preventDefault(); // Prevent '/' character from appearing in the input
        document.getElementById('searchInput').focus(); // Focus on the search input
    }
    
    // Execute search on Enter key press
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission
        let query = document.getElementById('searchInput').value.trim();
        if (query !== '') {
            // Replace this line with your search functionality
            window.location.href = `https://search.brave.com/search?q=${encodeURIComponent(query)}`;
        }
    }
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('searchInput').setAttribute('autocomplete', 'off');
    });
    
}

// Function to update date and time
function updateDateTime() {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[now.getDay()];
    const date = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });
    document.getElementById('dateTime').textContent = `${day}, ${date} - ${time}`;
}

// Initializations
updateDateTime(); // Update date and time immediately
setInterval(updateDateTime, 1000); // Update date and time every second
fetchWeather(); // Fetch weather information when page loads
