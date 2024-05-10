//select all document elements
const currentYear = document.getElementById("#current-year");

//use DATE object
const today = new Date();

//set innerHTML of elements
currentYear.innerHTML = today.getFullYear();