let container = document.querySelector("#container");

createSquare(16, 16);

function createSquare(sizeX, sizeY) {
    let sizeSquare = sizeX * sizeY;
    for (let i = 1; i <= sizeSquare; i++){
        let newDiv = document.createElement("div");
        newDiv.setAttribute("id", "row");
        container.appendChild(newDiv);
    }
}

