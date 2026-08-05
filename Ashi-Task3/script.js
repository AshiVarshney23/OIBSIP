const temperature = document.getElementById("temperature");
const unit = document.getElementById("unit");
const convertBtn = document.getElementById("convert-btn");
const errorMessage = document.getElementById("error-message");

const celsiusResult = document.getElementById("celsius-result");
const fahrenheitResult = document.getElementById("fahrenheit-result");
const kelvinResult = document.getElementById("kelvin-result");

convertBtn.addEventListener("click", function () {

    const value = Number(temperature.value);
    const selectedUnit = unit.value;

    errorMessage.textContent = "";

    if (isNaN(value)) {
        errorMessage.textContent = "Please enter a valid number.";
        return;
    }

    let celsius;
    let fahrenheit;
    let kelvin;

    if (selectedUnit === "celsius") {

        if (value < -273.15) {
            errorMessage.textContent = "Temperature cannot be below absolute zero.";
            return;
        }

        celsius = value;
        fahrenheit = (value * 9 / 5) + 32;
        kelvin = value + 273.15;

    }

    else if (selectedUnit === "fahrenheit") {

        if (value < -459.67) {
            errorMessage.textContent = "Temperature cannot be below absolute zero.";
            return;
        }

        fahrenheit = value;
        celsius = (value - 32) * 5 / 9;
        kelvin = celsius + 273.15;

    }

    else {

        if (value < 0) {
            errorMessage.textContent = "Temperature cannot be below absolute zero.";
            return;
        }

        kelvin = value;
        celsius = value - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;

    }

    celsiusResult.textContent = celsius.toFixed(2) + " °C";
    fahrenheitResult.textContent = fahrenheit.toFixed(2) + " °F";
    kelvinResult.textContent = kelvin.toFixed(2) + " K";

});