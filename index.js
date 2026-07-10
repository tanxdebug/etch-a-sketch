const container = document.querySelector(".grid-container");

for(let i = 0;i < 256;i++){
  let square = document.createElement('div');
  square. classList.add("grid-item");
  container.appendChild(square);
  document.querySelector(".grid-item").addEventListener('mouseover',() => {
      square.style.backgroundColor = "black";
  });
}