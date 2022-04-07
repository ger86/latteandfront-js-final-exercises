import calculator from "./utils/calculator";
import "./styles/app.css";

const operatorOne = document.getElementById("operatorOne");
const operatorTwo = document.getElementById("operatorTwo");
const resultDiv = document.querySelector(".calculator__result");
const buttons = document.querySelectorAll(".calculator__buttons button");

buttons.forEach(function (button) {
  resultDiv.classList.add("hidden");
  button.addEventListener("click", function (event) {
    event.preventDefault();
    const operation = button.dataset.operation;
    const valueOne = parseFloat(operatorOne.value);
    const valueTwo = parseFloat(operatorTwo.value);
    const result = calculator[operation](valueOne, valueTwo);
    resultDiv.textContent = `El resultado es: ${result}`;
    resultDiv.classList.remove("hidden");
  });
});
