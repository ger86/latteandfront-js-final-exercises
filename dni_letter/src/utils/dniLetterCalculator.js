const DNI_LETTERS = "TRWAGMYFPDXBNJZSQVHLCKET";

export default function dniLetterCalculator(dni) {
  if (typeof dni !== "number") {
    throw new Error("El dni debe ser un número");
  }
  const position = dni % 23;
  return DNI_LETTERS.substring(position, position + 1);
}
