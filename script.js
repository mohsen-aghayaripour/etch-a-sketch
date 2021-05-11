
const container = document.querySelector('#container');
const btn = document.querySelector('#btn');
// container.style.display = 'grid';
// container.style.maxWidth = '500px';
// container.style.minHeight = '500px';

// display: grid;
// max-width: 500px;
// min-height: 500px;
// margin: 2rem auto;
// border: 1px solid var(--main-dark);

container.style.gridTemplateColumns = "repeat(16,1fr)";
for (let i = 0; i < 16*16; i++){
    let myDiv = document.createElement("div");
    myDiv.classList.add("grid");
    myDiv.addEventListener('mouseover', mouseMove);
    container.appendChild(myDiv);
}
function mouseMove(e){
    let randr = Math.floor(Math.random()*256);
    let randc = Math.floor(Math.random()*256);
    let randb = Math.floor(Math.random()*256);
    e.target.style.background = `rgb(${randr}, ${randc}, ${randb})` ;
}