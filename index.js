const container = document.querySelector(".grid-container");
let n ;
createGrid();
let currentColor = "black";
function createGrid() {
  
  n = Number(document.querySelector("input").value) ;
 
  if(n === 0 || n > 100)return ;
  container.innerHTML = '';
  container.style.gridTemplateColumns = `repeat(${n},1fr)`;
  
  for(let i = 0;i < n*n;i++){
  let square = document.createElement('div');
  square.classList.add("grid-item");
  container.appendChild(square);
  square.addEventListener('mouseover',() => {
      square.style.backgroundColor = currentColor;
  });
}
}

document.querySelector(".generate-grid").addEventListener('click',createGrid);

document.querySelector(".reset").addEventListener('click',() =>{
   document.querySelectorAll(".grid-item").forEach((square)=>{
       square.style.backgroundColor = "white";
       
   })
});



let eraser = document.querySelector(".eraser");
eraser.addEventListener('click',()=>{
  currentColor = "white";
})



