var height;

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();

  height = document.getElementById("height").value;

  if (height && !isNaN(height)) {
    calculateWeight();
  } else {
    alert("Por favor, insira valores numéricos não vazios.");
  }
});

function calculateWeight() {
  let idealWeight;
  const gender = document.getElementById("gender").value;
  if (gender === "male") {
    idealWeight = 72.7 * height - 58;
  } else {
    idealWeight = 62.1 * height - 44.7;
  }

  document.getElementsByClassName(
    "result"
  )[0].innerHTML = `O peso ideal é ${idealWeight.toFixed(2)} kg`;
}
