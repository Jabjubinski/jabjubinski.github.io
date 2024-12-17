//containers
const divContainer = document.querySelector(".container");
const gridSizeValue = document.querySelector(".grid-size-value");
//buttons
const clear = document.getElementById("clear");
const btnCreate = document.getElementById("btn-create");
const rainbow = document.getElementById("rainbow");
const monoChrome = document.getElementById("monochrome");
const color = document.getElementById("color");
const eraser = document.getElementById("eraser");
const backgroundColor = document.getElementById("background-color");
//grid rows and columns inputs
const gridNumber = document.getElementById("grid-number");
gridNumber.addEventListener("input", () => {
  gridSizeValue.innerHTML = `${gridNumber.value} x ${gridNumber.value}`;
});
//grid making function
btnCreate.addEventListener("click", () => {
  divContainer.innerHTML = "";

  if (gridNumber.value < 1) {
    console.error("The input is invalid");
    alert("grid has to be bigger or equal to 1");
    return null;
  }
  if (gridNumber.value > 100) {
    console.error("The input is invalid");
    alert("grid has to be less or equal to 100");
    return null;
  }

  for (i = 0; i < gridNumber.value * gridNumber.value; i++) {
    const pixel = document.createElement("div");

    pixel.classList.add("pixel");
    pixel.style.width = `calc(100/${gridNumber.value})`;
    pixel.setAttribute("data-index", i);
    divContainer.appendChild(pixel);

    rainbow.addEventListener("click", () => {
      pixel.addEventListener("click", () => {
        const r = Math.floor(Math.random() * 257);
        const g = Math.floor(Math.random() * 257);
        const b = Math.floor(Math.random() * 257);

        pixel.style.backgroundColor = `rgb(${r},${g},${b})`;
      });
    });
    monoChrome.addEventListener("click", () => {
      pixel.addEventListener("click", () => {
        pixel.style.backgroundColor = `${color.value}`;
      });
    });
    eraser.addEventListener("click", () => {
      pixel.addEventListener("click", () => {
        pixel.style.backgroundColor = "rgb(180, 180, 180)";
      });
    });
  }
});

clear.addEventListener("click", () => {
  const allPixel = document.querySelectorAll(".pixel");
  allPixel.forEach((pixel) => {
    pixel.style.backgroundColor = "rgb(180, 180, 180)";
  });
});
