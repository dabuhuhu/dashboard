document.addEventListener('DOMContentLoaded', function() {
    updateDateTime();
    loadWeather();
});

function updateDateTime() {
    // Update time and date every second
    setInterval(() => {
        document.getElementById('datetime').innerHTML = new Date().toLocaleString();
    }, 1000);
}

function loadWeather() {
    fetch('https://wttr.in/Berlin?format=%l:+%c+%t')
        .then(response => response.text())
        .then(data => {
            const weatherDiv = document.getElementById('weather');
            weatherDiv.innerHTML = `<h2>Weather in Berlin - Prenzlauer Berg</h2><p>${data}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
