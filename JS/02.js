var temperature;

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  temperature = parseFloat(document.getElementById("temperature").value);

  if (!isNaN(temperature)) {
    convertTemperature();
  } else {
    alert("Por favor, insira um valor numérico não vazio.");
  }
});

function convertTemperature() {
  var conversion = document.getElementById("conversion").value;
  var result;

  if (conversion === "celsiusToFahrenheit") {
    result = temperature * 1.8 + 32;
    document.getElementsByClassName("result")[0].innerHTML =
      temperature + " °C é igual a " + result + " °F";
  } else {
    result = (temperature - 32) / 1.8;
    document.getElementsByClassName("result")[0].innerHTML =
      temperature + " °F é igual a " + result + " °C";
  }
}
