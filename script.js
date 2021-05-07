
const container = document.querySelector('#container');
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
    container.appendChild(myDiv);
}
