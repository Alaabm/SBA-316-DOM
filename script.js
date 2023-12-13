// Declare variables(const)
const tiles = document.querySelector(".tiles");
const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown"];
const colorsArray = [...colors, ...colors];
const tileCount = colorsArray.length;
// console.log(colors)
// console.log(colorsArray);

let revealedCount = 0;
let activeTile = null;
let awaitingEndOfTheMove = false;

//header complete
const header = document.querySelector("header");
header.textContent = "Game Central";
    

//h1 complete
const h1 = document.createElement("h1"); 
h1.textContent = "Macthing Card Game";
header.appendChild(h1);
console.log(h1);


for (let i = 0; i < tileCount; i++) {
    const tile = document.createElement("div");
    // const randomTileColor = Math.floor(Math.random() * colorsArray.length);
    tile.classList.add("tile");
    tile.style.backgroundColor = colorsArray[i];
    tiles.appendChild(tile);
console.log(tiles);
}
