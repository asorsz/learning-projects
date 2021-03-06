const celsiusInput = document.querySelector("#celsius > input");
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");

function roundNum(num) {
  return Math.round(num*100)/100
}

function cToFK() {
  const c = parseFloat(celsiusInput.value);
  const f = (c * (9/5)) + 32;
  const k = c + 273.15;
  fahrenheitInput.value = roundNum(f);
  kelvinInput.value = roundNum(k);
}

function fToKC() {
  const f = parseFloat(fahrenheitInput.value);
  const c = ((f - 32) * (5/9));
  const k = c + 273.15;
  celsiusInput.value = roundNum(c);
  kelvinInput.value = roundNum(k);
}

function kToCF() {
  const k = parseFloat(kelvinInput.value);
  const c = k - 273.15;
  const f = (c * (9/5)) + 32;
  celsiusInput.value = roundNum(c);
  fahrenheitInput.value = roundNum(f);
}

function main() {
  celsiusInput.addEventListener('input', cToFK);
  fahrenheitInput.addEventListener('input', fToKC);
  kelvinInput.addEventListener('input', kToCF);
}

main();