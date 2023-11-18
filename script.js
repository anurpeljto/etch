let container = document.querySelector(".container");
let button = document.querySelector("#create_grid");
button.textContent = "Create grid";


function makeGrid(rows, columns){
    let j = 0;
    while(j < rows){
        for (let i = 0; i < columns; i++){
            let row = document.createElement('div');
            row.className= "row";
            row.setAttribute("style", "border: 1px solid black; background-color: white; height: 50px; width: 50px; flex: 1 1 1;");
            container.appendChild(row);
            row.addEventListener("mouseover", () =>
            {
                row.style.backgroundColor = "red";
            })
        }
        let linebreak = document.createElement("div");
        linebreak.id = "break";
        linebreak.setAttribute("style", "width:100%");
        container.appendChild(linebreak);
        j++;
}
}


/* 
function makeGrid(rows, columns){
    let j = 0;
    let i = 0;
    while (i < rows){
        for(j = 0; j<columns; j++){
            let square = document.createElement("div");
             square.setAttribute("style", "border: 1px solid black; background-color: white; height:50px; width: 50px;");
             container.appendChild(square);
        }
        i++
        container.appendChild(document.createElement("br"));
    }

}
*/ 


let rowz = 0;
let colz = 0;

function removeGrid(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}

button.addEventListener("click", () => {
    removeGrid();
    rowz = prompt("How many rows do you want?");
    colz = prompt("How many columns do you want?");
    makeGrid(rowz, colz);
}); 