var total = 0;
var price;
var quantity;

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();

  price = document.getElementsByClassName("price");
  quantity = document.getElementsByClassName("quantity");

  var isValid = true;

  for (let index = 0; index < price.length; index++) {
    if (
      isNaN(parseFloat(price[index].value)) ||
      isNaN(parseInt(quantity[index].value))
    ) {
      isValid = false;
      break;
    }
  }

  if (isValid) {
    calculateTotal();
  } else {
    alert("Por favor, insira valores numéricos não vazios.");
  }
});

function calculateTotal() {
  total = 0;

  for (let index = 0; index < price.length; index++) {
    total += parseFloat(price[index].value) * parseInt(quantity[index].value);
  }

  document.getElementsByClassName(
    "result"
  )[0].innerHTML = `<p>Total da Venda: R$ ${total.toFixed(2)}</p>`;
}
