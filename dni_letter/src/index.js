import dniLetterCalculator from "./utils/dniLetterCalculator";
import validateDniNumber from "./utils/validateDniNumber";
import "./styles/app.css";

const form = document.getElementById("dniForm");
const dniInput = document.getElementById("dni");
const dniLetter = document.getElementById("dniLetter");
const dniError = document.getElementById("dniError");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  dniLetter.classList.add("hidden");
  dniError.classList.add("hidden");
  const dni = dniInput.value;
  if (!validateDniNumber(dni)) {
    dniError.classList.remove("hidden");
    return;
  }
  const letter = dniLetterCalculator(parseInt(dni));
  dniLetter.classList.remove("hidden");
  dniLetter.textContent = `La letra del DNI es: ${letter}`;
});
