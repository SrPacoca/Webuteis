var length;
var width;

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  length = parseFloat(document.getElementById("length").value);

  width = parseFloat(document.getElementById("width").value);

  if (width && !isNaN(width) && length && !isNaN(length)) {
    calculateCost();
  } else {
    alert("Por favor, insira valores numéricos não vazios.");
  }
});

function calculateCost() {
  const pricePerSquareMeter = 36.0;

  const totalCost = pricePerSquareMeter * (length * width);

  // Exibir o resultado
  document.getElementsByClassName(
    "result"
  )[0].innerHTML = `<p>Custo para assentar piso: R$ ${totalCost.toFixed(
    2
  )}</p>`;
}
