const container = document.querySelector(".grid-container");
let n;



function createGrid() {
  
  n = Number(document.querySelector("input").value);
  if(n === 0 || n > 100)return ;
  container.innerHTML = '';
  container.style.gridTemplateColumns = `repeat(${n},1fr)`;
  
  for(let i = 0;i < n*n;i++){
  let square = document.createElement('div');
  square.classList.add("grid-item");
  container.appendChild(square);
  square.addEventListener('mouseover',() => {
      square.style.backgroundColor = "black";
  });
}
}

document.querySelector(".generate-grid").addEventListener('click',createGrid);