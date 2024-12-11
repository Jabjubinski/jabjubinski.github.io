//containers
const divContainer = document.querySelector(".container");

//buttons
const clear = document.getElementById("clear");
const btnCreate = document.getElementById("btn-create");
//grid rows and columns inputs
const gridNumber = document.getElementById("grid-number");

//grid making function
function divs() {
  for (i = 0; i < gridNumber; i++) {
    const card = document.createElement("div");

    card.classList.add("myCard");

    card.innerHTML = ``;

    card.setAttribute("data-index", i);

    divContainer.appendChild(card);

    card.addEventListener("mouseenter", () => {
      card.style = "background-color: red";
    });
    clear.addEventListener("click", () => {
      card.style = "";
    });
  }
}

divs();
