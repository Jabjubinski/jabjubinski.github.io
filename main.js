//containers
const divContainer = document.querySelector(".container");
const gridSizeValue = document.querySelector(".grid-size-value");
//buttons
const clear = document.getElementById("clear");
const rainbow = document.getElementById("rainbow");
const monoChrome = document.getElementById("monochrome");
const color = document.getElementById("color");
const eraser = document.getElementById("eraser");
const backgroundColor = document.getElementById("background-color");
const save = document.getElementById("save-image");
//grid rows and columns inputs
const gridNumber = document.getElementById("grid-number");

function gridMaker() {
  gridSizeValue.innerHTML = `${gridNumber.value} x ${gridNumber.value}`;
  divContainer.innerHTML = "";

  for (let i = 0; i < gridNumber.value * gridNumber.value; i++) {
    const pixel = document.createElement("div");

    pixel.classList.add("pixel");
    pixel.style.width = `calc(100%/${gridNumber.value})`;
    pixel.style.backgroundColor = `${backgroundColor.value}`;
    pixel.setAttribute("data-index", i);
    pixel.setAttribute("data-filled", false);
    divContainer.appendChild(pixel);
  }
  const allPixel = document.querySelectorAll(".pixel");

  allPixel.forEach((pixel) => {
    pixel.addEventListener("click", () => {
      divContainer.style.cursor = "url('pencil-solid.svg')7 500, auto";
      pixel.style.backgroundColor = `${color.value}`;
    });
  });

  rainbow.addEventListener("click", () => {
    allPixel.forEach((pixel) => {
      pixel.addEventListener("click", () => {
        const r = Math.floor(Math.random() * 257);
        const g = Math.floor(Math.random() * 257);
        const b = Math.floor(Math.random() * 257);

        pixel.style.backgroundColor = `rgb(${r},${g},${b})`;
        pixel.setAttribute("data-filled", true);
      });
    });
  });
  monoChrome.addEventListener("click", () => {
    divContainer.style.cursor = "url('pencil-solid.svg')76 2054, auto";
    allPixel.forEach((pixel) => {
      // pixel.addEventListener("click", () => {
      //   pixel.style.backgroundColor = `${color.value}`;
      //   pixel.setAttribute("data-filled", true);
      // });
    });
  });
  eraser.addEventListener("click", () => {
    divContainer.style.cursor = "url('eraser-solid.svg')1570 602, auto";
    allPixel.forEach((pixel) => {
      pixel.addEventListener("click", () => {
        pixel.style.backgroundColor = `${backgroundColor.value}`;
      });
    });
  });
  backgroundColor.addEventListener("input", () => {
    allPixel.forEach((pixel) => {
      if (pixel.dataset.filled === "false") {
        pixel.style.backgroundColor = `${backgroundColor.value}`;
      }
    });
  });

  clear.addEventListener("click", () => {
    allPixel.forEach((pixel) => {
      pixel.style.backgroundColor = `${backgroundColor.value}`;
      pixel.setAttribute("data-filled", "false");
    });
  });
  allPixel.forEach((pixel) => {
    pixel.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      pixel.style.backgroundColor = `${backgroundColor.value}`;
      divContainer.style.cursor = "url('eraser-solid.svg')7 500, auto";
    });
  });

  let mouseDown = false;

  allPixel.forEach((pixel) => {
    pixel.addEventListener("mousemove", () => {
      pixel.addEventListener("mousedown", (e) => {
        if (e.button === 0) {
          mouseDown = true;
        }
      });
      pixel.addEventListener("mouseup", (e) => {
        if (e.button === 0) {
          mouseDown = false;
        }
      });
      if (mouseDown === true) {
        pixel.style.backgroundColor = `${color.value}`;
      }
    });
  });
}

gridNumber.addEventListener("input", () => {
  gridMaker();
});

window.onload = () => {
  gridMaker();
};
