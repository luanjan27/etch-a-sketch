function generateGrid(amount) {
  let container = document.querySelector(".container");
  let containerSide = container.clientWidth;
  let div = null;
  for (let i = 0; i < amount * amount; i++) {
    div = document.createElement("div");
    div.style.flexBasis = `${containerSide / amount}px`;
    container.appendChild(div);
  }
}
function setGridSize() {
  let slider = document.querySelector("#slider");
  let slider_container = document.querySelector(".slider_container");
  let slider_output = document.createElement("div");
  slider_output.textContent = slider.value;
  slider.addEventListener("input", (e) => {
    let sliderValue = slider.value;
    slider_output.textContent = sliderValue;
    removeDivs();
    generateGrid(sliderValue);
  });
  slider_container.appendChild(slider_output);

}
function removeDivs() {
  let gridDivs = document.querySelectorAll(".container div");
  gridDivs.forEach(div => {
    div.remove();
  });
}

function setColor(color) {
  let container = document.querySelector(".container");
  let rnbBtn = document.querySelector("#rnb");
  let rainbowToggle = false;
  
  rnbBtn.addEventListener("click", () => {
    if (rainbowToggle == false){
      rainbowToggle = true;
    }
  });

  container.addEventListener("mouseover", (e) => {
    let targetDiv = e.target;
    if (targetDiv !== container && rainbowToggle == true){
      let new_color = getRandomColor()
      targetDiv.style.backgroundColor = new_color;
    }
    else if (targetDiv !== container) {
      targetDiv.style.backgroundColor = color;
    }
    
  });

}

function getRandomColor(){
  let colors = ["blue", "yellow", "red", "orange", "violet", "purple", "pink", "lightblue", "lightgreen", "lightcoral"];

  let randomNumber = Math.floor(Math.random() * colors.length)
  let randomColor = colors[randomNumber];
  return randomColor;

}

function reset() {
  let rstBtn = document.querySelector("#rst");
  let slider_container = document.querySelector(".slider_container");
  let inpt = document.querySelector("#slider");
  rstBtn.addEventListener("click", () => {
    slider_container.lastChild.textContent = "16";
    inpt.value = 16;
    removeDivs();
    setColor("black");
    generateGrid(16);
  });
}
function run() {
  generateGrid(16);
  setColor("black");
  setGridSize();
  reset();
}
run();