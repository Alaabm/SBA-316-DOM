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
h1.textContent = "Macthing Card Game";
header.appendChild(h1);
h1.style.color = "teal";
// console.log(h1);

//Select main element
const mainEl = document.querySelector("main");
mainEl.style.textAlign = "center";
mainEl.style.margin = "40px";
// console.log(mainEl);


//Select element id for form
const userInpuBtn = document.getElementById("name");
userInpuBtn.setAttribute ("placeholder", "Username");
// console.log(userInput);


//Select element id for submit button
const submitBtn = document.getElementById("submit");
submitBtn.




const form = document.getElementById("form");
// form.addEventListener("click", (e) => {
//     e.preventDefault();
//     alert(`You submitted: 
//     ${form.querySelector("input").value}`);
//     console.log(form);
// });

// const submitted = document.getElementById("submit");
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     alert(`You submitted: 
//     ${form.querySelector("input").value}`);
//     // console.log(form);
//     // console.log(submitted);
// });



//////////////////////////////////////////

// for (let i = 0; i < tileCount; i++) {
//     const box = document.createElement("div");

//     // const randomTileColor = Math.floor(Math.random() * colorsArray.length);
//     box.classList.add("tile");
//     box.style.backgroundColor = colorsArray[i];
//     tiles.appendChild(box);
// console.log(tiles);
// }

function buildTile(color) {
    const element = document.createElement("div");
    element.classList.add("tile");
    element.setAttribute("data-color", color);

    element.addEventListener("click", () => {
        if (awaitingEndOfTheMove) {
            return;
        }
        element.style.backgroundColor = color;
        element.classList.toggle("active");
        if (activeTile) {
            activeTile.classList.remove("active");
        }
        activeTile = element;
        activeTile.classList.add("active");
        awaitingEndOfTheMove = true;
        setTimeout(() => {
            activeTile.classList.remove("active");
            activeTile = null;
            awaitingEndOfTheMove = false;
        }, 1000);
    });
    return element;
}

//Building the tiles
for (let i = 0; i < tileCount; i++) {
    const randomIndex = Math.floor(Math.random() * colorsArray.length);
    const color = colorsArray[randomIndex];
    const tile = buildTile(color);

    colorsArray.splice(randomIndex, 1);
    tilesContainer.appendChild(tile);
     console.log(tilesContainer);
}


    // tileCount[i].addEventListener("click", () => {
    //     tileCount[i].classList.toggle(colorsArray[i]);
    // })


