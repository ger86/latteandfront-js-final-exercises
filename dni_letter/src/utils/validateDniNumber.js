export default function validateDniNumber(value) {
  const regex = /^[0-9]{8}$/i;
  return regex.test(value);
}