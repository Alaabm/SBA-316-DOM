// Declare variables(const)
const tiles = document.querySelector(".tiles");
console.log(tiles);
const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown"];
const colorsArray = [...colors, ...colors];
const tileCount = colorsArray.length;
 console.log(colors)
 console.log(colorsArray);

let revealedCount = 0;
let activeTile = null;
let awaitingEndOfTheMove = false;

//header complete
const header = document.querySelector("header");
header.textContent = "Game Central";
console.log(header);
    

//h1 complete
const h1 = document.createElement("h1"); 
h1.textContent = "Macthing Card Game";
header.appendChild(h1);
h1.style.color = "teal";
console.log(h1);

//Select main element
const mainEl = document.querySelector("main");
//Select element id for form
const userInput = document.getElementById("userInput");
mainEl.style.textAlign = "center";



console.log(userInput);
console.log(mainEl);

//////////////////////////////////////////

for (let i = 0; i < tileCount; i++) {
    const box = document.createElement("div");

    // const randomTileColor = Math.floor(Math.random() * colorsArray.length);
    box.classList.add("tile");
    box.style.backgroundColor = colorsArray[i];
    tiles.appendChild(box);
console.log(tiles);
}



// for (let i = 0; i < tiles; i++) {
//     tileCount[i].addEventListener("click", () => {
//         tileCount[i].classList.toggle(colorsArray[i]);
//     })
// };

