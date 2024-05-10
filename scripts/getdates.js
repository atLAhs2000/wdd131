//select all document elements
const currentYear = document.getElementById("currentyear");
const modified = document.lastModified;
const lastModified = document.getElementById("lastModified");

//use DATE object
const today = new Date();

//set innerHTML of elements
currentYear.innerHTML = today.getFullYear();
lastModified.innerHTML = `Last Modification: ${modified}`;