document.getElementById('generateWeather').addEventListener('click', () => {
    const weather = document.getElementById('weather').value;
    const temperature = parseInt(document.getElementById('temperature').value);
    const display = document.getElementById('weatherDisplay');

    document.getElementById('tempValue').textContent = temperature + '°C';
    // TODO Reset Display
    display.innerHTML = '';

    let backgroundColor;

    // Hintergrundfarbe basierend auf Temperatur
    if(temperature < 0) {
        backgroundColor = '#B0E0E6'; // frostig Blau
    } else if (temperature >= 0 && temperature <= 20) {
        backgroundColor = '#87CEEB'; // Mildes Blau
    } else {
        backgroundColor = '#FFDEAD';  // wärmendes Gelb
    }
    document.body.style.backgroundColor = backgroundColor;

    if(weather === 'sunny') {
        const sun = document.createElement('div');
        sun.id = 'sun';
        sun.style.width = temperature + 50 + 'px';
        sun.style.height = temperature + 50 + 'px';
        display.appendChild(sun);
    } else if (weather === 'rainy') {
        for ( let i = 0; i < 50; i++) {
            // HTML Element erstellen mit createElement
            const raindrop = document.createElement('div');
            // Add Class raindrop to new HTML Element
            raindrop.classList.add('raindrop');
            // random position for raindrop from left side
            raindrop.style.left = Math.random() * 100 + '%';
            // Animation Duration
            raindrop.style.animationDuration = Math.random() * 2 + 1 + 's';
            // Animation Delay
            raindrop.style.animationDelay = Math.random() * 1 + 's';
            // Append HTML DOM with Raindrop
            display.appendChild(raindrop);
        }
     } else if (weather === 'snowy') {
        for (let i = 0; i < 30; i++) {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.style.left = `${Math.random() * 100}%`;
            snowflake.style.animationDuration = `${Math.random() * 2 + 1}s`;
            snowflake.style.animationDelay = `${Math.random() * 1}s`;
            display.appendChild(snowflake);
        }
    }
})
