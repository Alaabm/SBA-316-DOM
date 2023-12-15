// Declare variables(const)
const tilesContainer = document.querySelector(".tilesContainer");
// console.log(tilesContainer);
const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown"];
const colorsArray = [...colors, ...colors];
const tileCount = colorsArray.length;
//  console.log(colors)
//  console.log(colorsArray);//picklist


 //game state
let revealedCount = 0; //refers to the number of tiles revealed
let activeTile = null; //refers to the clicked tile
let awaitingEndOfTheMove = false; //user to wait for the end of the move for tiles do not match to flip

//header complete
const header = document.querySelector("header");
header.textContent = "Game Central";
// console.log(header);
    

//h1 complete
const h1 = document.createElement("h1"); 
h1.textContent = "Macthing Card Game!";
header.appendChild(h1);
h1.style.color = "teal";
// console.log(h1);

//Select main element
const mainEl = document.querySelector("main");
mainEl.style.textAlign = "center";
mainEl.style.margin = "40px";
// console.log(mainEl);


//Select element id for form
const userInput = document.getElementById("nameId");
userInput.setAttribute ("placeholder", "Username");
userInput.style.margin = "10px";
// console.log(userInput);

//Select element id for submit button
const submitBtn = document.getElementById("submitId");
submitBtn.style.margin = "10px";

const playerName = document.getElementById("playerName");
playerName.style.color = "orange";
submitBtn.addEventListener("click", () => {
    const grabUserName = userInput.value;
    playerName.textContent = grabUserName;
});

function buildTile(color) {
    const element = document.createElement("div");

    element.classList.add("tile");
    element.setAttribute("data-color", color);


    element.addEventListener("click", () => {
        if (awaitingEndOfTheMove) {
            return;
        }

        element.style.backgroundColor = color;

        if(!activeTile){
            activeTile = element;

        
            return;
        }
    
        awaitingEndOfTheMove = true;
        setTimeout(() => {
            element.style.backgroundColor = null;
            activeTile.style.backgroundColor = null;

            awaitingEndOfTheMove = false;
            activeTile = null;
        }, 1000);

    });
    return element;
}

for (let i = 0; i < tileCount; i++) {
    const randomIndex = Math.floor(Math.random() * colorsArray.length);
    const color = colorsArray[randomIndex];
    const tile = buildTile(color);

    colorsArray.splice(randomIndex, 1);
    tilesContainer.appendChild(tile);
}


