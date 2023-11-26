let values = [];

var value;

document.getElementById("adicionar").addEventListener("click", function (e) {
  e.preventDefault();

  value = document.getElementById("value").value;

  if (value && !isNaN(value)) {
    addValue();
  } else {
    alert("Por favor, insira valores numéricos não vazios.");
  }
});

function addValue() {
  values.push(parseFloat(value));
  document.getElementById("value").value = "";
}

function showValues() {
  if (values.length > 0) {
    document.getElementsByClassName(
      "result"
    )[0].innerHTML = `Valores inseridos: ${values.join(", ")}`;
  } else {
    alert("Não há valores para mostrar");
  }
}

function showMaxMin() {
  if (values.length > 0) {
    const maxValue = Math.max(...values);
    const minValue = Math.min(...values);
    document.getElementsByClassName(
      "result"
    )[0].innerHTML = `Maior valor: ${maxValue}, Menor valor: ${minValue}`;
  } else {
    alert("Não há valores para mostrar");
  }
}
