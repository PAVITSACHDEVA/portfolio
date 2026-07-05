var name = prompt("What is your name?");
var firstLetter = name.slice(0,1);
firstLetter = firstLetter.toUpperCase(); // Corrected: method called
var restLetter = name.slice(1);          // Corrected: second argument omitted
restLetter = restLetter.toLowerCase();

alert(`Hello, ${firstLetter}${restLetter}`); // Corrected: removed extra '+', used template literal consistently
