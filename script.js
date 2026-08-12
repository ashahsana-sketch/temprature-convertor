function convertCtoFAndK() {

    const celsius = Number(document.getElementById("celsius").value);

    if (celsius >= -273.15) {

        const fahrenheit = (celsius * 9 / 5) + 32;
        const kelvin = celsius + 273.15;

        document.getElementById("result").innerHTML = `
            <h3>Result:</h3>
            Temperature in Fahrenheit: ${fahrenheit.toFixed(2)}°F<br>
            Temperature in Kelvin: ${kelvin.toFixed(2)} K
        `;

    } else {

        document.getElementById("result").innerHTML =
            "Invalid temperature. Temperature cannot be below -273.15°C.";
    }
}