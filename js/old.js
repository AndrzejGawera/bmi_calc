// Zakresy wartości BMI:

// mniej niż 16 - wygłodzenie
// 16 - 16.99 - wychudzenie
// 17 - 18.49 - niedowaga
// 18.5 - 24.99 - wartość prawidłowa
// 25 - 29.99 - nadwaga
// 30 - 34.99 - I stopień otyłości
// 35 - 39.99 - II stopień otyłości
// powyżej 40 - otyłość skrajna


const getData = function() {
  const hField = document.querySelector('#height');
  const wField = document.querySelector('#weight');
  const weight = parseFloat(wField.value);
  const height = parseFloat(hField.value)/100;
  if (!isNaN(weight) && !isNaN(height)) {
    return [weight, height]
  } 
  alert('Wprowadz liczby!');
}

function calcBmi(weight, height) {
  return Math.floor(weight / Math.pow(height, 2));
}

const button = document.querySelector('button');
button.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(calcBmi(...getData()));
});


16 - wygłodzenie
17 - wychudzenie
18.5 - niedowaga
25 - wartość prawidłowa
30 - nadwaga
35 - I stopień otyłości
40 - II stopień otyłości
40 - otyłość skrajna