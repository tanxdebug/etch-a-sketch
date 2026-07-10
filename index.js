const container = document.querySelector(".grid-container");
let n ;
let mode = "pen";
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
      if(mode === "rainbow"){
        square.style.backgroundColor = random();
      } else if(mode === "eraser"){
        square.style.backgroundColor = "white";
      } else {
        square.style.backgroundColor = currentColor;
      }
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
  mode = "eraser"
});

let colorpicker = document.querySelector(".color-picker");
colorpicker.addEventListener('input', ()=>{
   mode = "pen";
    currentColor = colorpicker.value;
})

let randomcolor = document.querySelector(".random");

randomcolor.addEventListener('click',()=>{
  mode = "pen";
  currentColor = random();
});

function random(){
  let r = Math.floor(Math.random()*256+1);
   let b = Math.floor(Math.random()*256+1);
    let g = Math.floor(Math.random()*256+1);
    
    return `rgb(${r},${g},${b})`;
   

}

let rainbowcolor = document.querySelector(".rainbow");

rainbowcolor.addEventListener('click',()=>{
  mode = "rainbow";
});


