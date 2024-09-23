let container = document.querySelector("#container");
let sizeButton = document.querySelector("#gridSizeButton");


createSquare(16, 16);

function randomColor(){
    color = '#' + Math.floor(Math.random()*16777215).toString(16);
    return color;
}

function createSquare(sizeX, sizeY) {
    let sizeSquare = sizeX * sizeY;
    for (let i = 1; i <= sizeSquare; i++){
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "row");
        newDiv.setAttribute("style", `width: ${800 / sizeX}px; hight: ${800 / sizeX}px`);
        container.appendChild(newDiv);
        newDiv.addEventListener("mouseenter", (e) => {
            newDiv.setAttribute("style", `width: ${800 / sizeX}px; hight: ${800 / sizeX}px; background-color: ${randomColor()};`);
        })
    }
}

sizeButton.addEventListener("click", () => {
    let gridSize = prompt("Choose grid size (1 - 100)");
    if (gridSize > 100 || gridSize < 1) {
        alert ("Choose grid size from 1 - 100")
        gridSize = 16;
    }
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    createSquare(gridSize, gridSize);
})