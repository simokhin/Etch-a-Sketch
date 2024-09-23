let container = document.querySelector("#container");
let sizeButton = document.querySelector("#gridSizeButton");


createSquare(16, 16);

function createSquare(sizeX, sizeY) {
    let sizeSquare = sizeX * sizeY;
    for (let i = 1; i <= sizeSquare; i++){
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "row");
        newDiv.setAttribute("style", `width: ${800 / sizeX}px; hight: ${800 / sizeX}px`);
        container.appendChild(newDiv);
        newDiv.addEventListener("mouseenter", (e) => {
            newDiv.setAttribute("id", "rowColor")
        })
    }
}

sizeButton.addEventListener("click", () => {
    let gridSize = prompt("Choose grid size");
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    createSquare(gridSize, gridSize);
})