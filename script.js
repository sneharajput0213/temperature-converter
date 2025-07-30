function convertTemp() {
  const input = parseFloat(document.getElementById('tempInput').value);
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;
  const result = document.getElementById('result');

  if (isNaN(input)) {
    result.textContent = 'Please enter a valid number!';
    return;
  }

  let tempInCelsius;

  switch (fromUnit) {
    case 'celsius':
      tempInCelsius = input;
      break;
    case 'fahrenheit':
      tempInCelsius = (input - 32) * 5/9;
      break;
    case 'kelvin':
      tempInCelsius = input - 273.15;
      break;
  }

  let output;
  switch (toUnit) {
    case 'celsius':
      output = tempInCelsius;
      break;
    case 'fahrenheit':
      output = (tempInCelsius * 9/5) + 32;
      break;
    case 'kelvin':
      output = tempInCelsius + 273.15;
      break;
  }

  result.textContent = `${input}° ${fromUnit} = ${output.toFixed(2)}° ${toUnit}`;
}
