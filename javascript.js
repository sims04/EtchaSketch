/**
 Creating a div starting with a variable and then adding some style.
 Get the div that I created in the HTML file called Grid. 
 Append it to the div I ceated in this javascript file.
 

event listener template :
// 1. Select the Element(s)

// For a single element
const singleElement = document.getElementById("elementId");
// or
const singleElement = document.querySelector(".elementClass");

// For multiple elements
const multipleElements = document.querySelectorAll(".elementClass");

// 2. Check if the Element Exists

// For a single element
if (singleElement) {
    // 3. Add the Event Listener
    singleElement.addEventListener("eventType", function(event) {
        // Event handler code here
    });
}

// For multiple elements
if (multipleElements.length > 0) {
    for (let i = 0; i < multipleElements.length; i++) {
        multipleElements[i].addEventListener("eventType", function(event) {
            // Event handler code here
        });
    }
}*/

var numberOfDivs = 16; // Number of divs per row/column
var smallDivSize = 20; // Size of each small div

// Calculate grid size to ensure it fits exactly the number of divs
var gridSize = smallDivSize * numberOfDivs;

var grid = document.getElementById("grid");
grid.style.width = `${gridSize}px`; // Set the grid width
grid.style.height = `${gridSize}px`; // Set the grid height
grid.style.display = "flex";
grid.style.flexWrap = "wrap"; // Wrap the divs to form rows
grid.style.justifyContent = "flex-start"; // Align items from the start, no centering
grid.style.alignItems = "flex-start"; // Align rows from the start, no centering
grid.style.background = "blue";
grid.style.margin = "0 auto"; // Center the grid container on the page
grid.style.position = "relative";

for (let i = 0; i < numberOfDivs; i++) { // Loop through rows
    for (let j = 0; j < numberOfDivs; j++) { // Loop through columns
        var smallDiv = document.createElement("div");
        smallDiv.className = "sdivs";
        document.body.appendChild(smallDiv); 

        smallDiv.style.width = `${smallDivSize}px`; // Size of each small div
        smallDiv.style.height = `${smallDivSize}px`;
        smallDiv.style.backgroundColor = "lightblue"; // Just to visualize the grid
        smallDiv.style.border = "1px solid black"; // Optional: To see grid lines
        smallDiv.style.boxSizing = "border-box"; // Include borders in the size
        
        
        grid.appendChild(smallDiv); // Append each small div to the grid
    }
}

const smallDivs = document.querySelectorAll(".sdivs");

smallDivs.forEach((div) => {
    div.addEventListener(
        "mouseover",
        (event) => {
            event.target.style.backgroundColor = "red";
            
        },
        false
    );
});

const button = document.getElementById("pick");

function updateGrid() {
    // Prompt the user for the number of squares per side and convert it to a number
    var numdivs = Number(prompt("Enter the number of squares per side for the new grid"));

    // Calculate the size in pixels (assuming each square is, for example, 20px wide)
    var gridSize = numdivs * 20; // Adjust "20" as needed for your specific grid size
   
    // Apply the calculated grid size to your grid element
    grid.style.width = `${gridSize}px`;
    grid.style.height = `${gridSize}px`;
    
}

// Immediately update the grid size based on the initial prompt
updateGrid();

// Set up the button event listener to update the grid size when clicked
button.addEventListener("click", updateGrid);