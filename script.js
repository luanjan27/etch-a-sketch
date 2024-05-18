function generateGrid(amount){
  let container = document.querySelector(".container");
  let containerSide = container.clientWidth;
  let div = null
  for(let i=0; i<amount*amount; i++){
    div = document.createElement("div");
    div.style.flexBasis = `${containerSide / amount}px`; 
    container.appendChild(div);
  }
  
}
function setGridSize(){
  
}

generateGrid(16);