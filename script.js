let userInpTitle = document.getElementById("title_input");
let userInpTitle2 = document.getElementById("noun");
let userInpTitle3 = document.getElementById("verb");
let userInpTitle4 = document.getElementById("adjective");
let formContainer = document.querySelector(".form_container"); // Use querySelector for class
let buttonPress = document.getElementById("submit_button");
let errorPopup = document.getElementById("error_popup");
let mainTitle = document.getElementById("main_title"); // Container for the title

// Function to create and display the ad lib sentence
function makeAdLib(event) {
    event.preventDefault(); // Prevent form submission behavior

    // Get user inputs
    let titleValue = userInpTitle.value; // Get the title input value
    let nounValue = userInpTitle2.value;
    let verbValue = userInpTitle3.value;
    let adjectiveValue = userInpTitle4.value;


    if (titleValue == "" || nounValue == "" || verbValue == "" || adjectiveValue == "") {
        errorPopup.textContent = "Please fill in all fields.";
        errorPopup.style.display = "block"; // Make the error message visible
        return; // Exit the function early
    }








    // Hide the form
    formContainer.style.display = "none";

    // Update the title
     // Set the title text

    // Create a new element to display the sentence

    mainTitle.innerHTML = "Last night, I ate a " + nounValue + ", and today I just had to " + verbValue + ". What a " + adjectiveValue + " day!";

    // Apply some basic styling to the result container (optional)
    mainTitle.style.fontFamily = "Arial, sans-serif";
    mainTitle.style.fontWeight = "bold";
    mainTitle.style.fontSize = "20px";
    mainTitle.style.margin = "20px";

    // Append the result to the body or any other container
    document.body.appendChild(resultContainer);


    errorPopup.textContent = "";
    errorPopup.style.display = "none"; // Hide the error message


}

// Add event listener to the button
buttonPress.addEventListener("click", makeAdLib);

// Update the title dynamically as the user types
userInpTitle.addEventListener("input", function() {
    mainTitle.textContent = userInpTitle.value;
});

