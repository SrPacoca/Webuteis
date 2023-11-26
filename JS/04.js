var kilometers;
var fuelPrice;

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();

  kilometers = parseFloat(document.getElementById("kilometers").value);
  fuelPrice = parseFloat(document.getElementById("fuelPrice").value);

  if (kilometers && fuelPrice && !isNaN(kilometers) && !isNaN(fuelPrice)) {
    calculateFuelCost();
  } else {
    alert("Por favor, insira valores numéricos não vazios.");
  }
});

function calculateFuelCost() {
  const fuelEfficiency = 8;
  const cost = (kilometers / fuelEfficiency) * fuelPrice;
  document.getElementsByClassName(
    "result"
  )[0].innerHTML = `O custo de combustível é R$ ${cost.toFixed(2)}`;
}
