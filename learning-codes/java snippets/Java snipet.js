// var name prompt= "What is your name "
// // var prompt = "how does it work";
//  var prompt = prompt("Type to see how many characters you typed");
// alert("you typed "+ prompt);
// var name prompt= "What is your name "
// var prompt = "how does it work";

var userInput = prompt("Type to see how many characters you typed");
var characterswritten = userInput.length;
var charactersLeft = (240 - characterswritten);
var final_promt = userInput.slice(0,240); // Corrected variable name for clarity
var uppercaseFinalPrompt = final_promt.toUpperCase(); // Corrected variable name and method call

function showConfirmation() {
  const userChoice = confirm("Do you want to capitalize the text?"); // Corrected spelling "captilize" to "capitalize"

  if (userChoice) {
    if (charactersLeft < 0) {
      alert(`You typed ${characterswritten} characters, which exceeds the allowed limit of 240 characters.
Trimming your prompt to the permitted length.
Here is the final (capitalized) prompt:
${uppercaseFinalPrompt}`); // Using template literals for cleaner string concatenation
    } else { // Removed unnecessary "else if (charactersLeft <= 240)" as this covers all other cases
      alert(`You typed ${userInput.length} characters, you have ${charactersLeft} characters left.
Capitalizing your text.
Here is the final prompt:
${uppercaseFinalPrompt}`); // Corrected alert message on line 35, removed syntax errors
    }
  } else { // User chose not to capitalize
    if (charactersLeft < 0) {
      alert(`You typed ${characterswritten} characters, which exceeds the allowed limit of 240 characters.
Trimming your prompt to the permitted length.
Here is the final prompt:
${final_promt}`); // Using template literals
    } else { // Removed unnecessary "else if (charactersLeft <= 240)"
      alert(`You typed ${userInput.length} characters, you have ${charactersLeft} characters left.`);
    }
  }
}
showConfirmation();

// You can call this function when a button is clicked, for example:
// <button onclick="showConfirmation()">Click Me</button>
