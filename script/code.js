function convertTemperature() {
    let temperatureInput = document.getElementById('temperature').value;
    let unitSelect = document.getElementById('unit');
    let selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

    if(temperatureInput !=='') {
        let temperature = parseFloat(temperatureInput);

        if(selectedUnit === 'celsius') {
            displayResult(temperature, 'Celsius');
        }else if (selectedUnit === 'fahrenheit'){
            let convertedTemperature = (temperature * 9/5) +32;
            displayResult(convertedTemperature, 'Fahrenheit');
        }else{
            alert('Please enter any temperature value.');
        }
    }

    function displayResult(value, unit) {
        let resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `Converted Temperature: ${value.toFixed(2)} ${unit}`;
    }

    function setPreset(presetValue) {
        document.getElementById('temperature').value = presetValue;
    }

}