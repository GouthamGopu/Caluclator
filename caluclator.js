let calculation=localStorage.getItem('calculation')||'';


function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}
// Display the calculation when the page first loads.
displayCalculation();

function updateCalculation(value) {
  calculation += value;
  displayCalculation();
  saveCalculation();
}

function displayCalculation() {
  document.querySelector('.result')
    .innerHTML = calculation;
}
//https://github.com/SuperSimpleDev/javascript-course/tree/main/1-exercise-solutions
//10j