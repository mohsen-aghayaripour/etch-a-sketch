
const container = document.querySelector('#container');
const btn = document.getElementById('btn').addEventListener("click", myFunction);
window.addEventListener('load', defultGrid())
function defultGrid(){
    makeRows(16);
    gridTempColumns(16);
}
function myFunction(){
    let maxGrid = prompt("enter your grid numbers:");
    if(maxGrid !== null){
        maxGrid = parseInt(maxGrid);
        if(maxGrid > 65 || maxGrid < 1 || Number.isNaN(maxGrid)){
        alert('Enter a number between 1 and 64!');
        myFunction();
        }
        else{
            reset();
            makeRows(maxGrid);
            gridTempColumns(maxGrid)
        }
    }
}
function gridTempColumns(size) {container.style.gridTemplateColumns = `repeat(${size},1fr)`;}

function makeRows(size){
    for (let i = 0; i < size * size; i++){
        let myDiv = document.createElement("div");
        myDiv.classList.add("grid");
        myDiv.addEventListener('mouseover', mouseMove);
        container.appendChild(myDiv);
    }
}
function mouseMove(e){
    let randr = Math.floor(Math.random()*256);
    let randc = Math.floor(Math.random()*256);
    let randb = Math.floor(Math.random()*256);
    e.target.style.background = `rgb(${randr}, ${randc}, ${randb})` ;
}
function reset(){
    document.querySelectorAll('.grid').forEach((e) => e.parentNode.removeChild(e));
}