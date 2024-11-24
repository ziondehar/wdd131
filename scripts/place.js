document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

function calculateWindChillMetric(temperature, windSpeed) {
    
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill =
            13.12 +
            0.6215 * temperature -
            11.37 * Math.pow(windSpeed, 0.16) +
            0.3965 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(1); 
    } else {
        return "N/A"; 
    }
}


function updateWindChillMetric() {
    const tempElement = document.getElementById("temp");
    const windSpeedElement = document.getElementById("wind-speed");
    const windChillElement = document.getElementById("wind-chill");

    const temperature = parseFloat(tempElement.textContent); 
    const windSpeed = parseFloat(windSpeedElement.textContent); 

    const windChill = calculateWindChillMetric(temperature, windSpeed);
    windChillElement.textContent = windChill + (windChill !== "N/A" ? "°C" : "");
}


updateWindChillMetric();
