const divContainer = document.querySelector(".container");

function divs() {
  for (i = 0; i <= 256; i++) {
    let card = document.createElement("div");

    card.classList.add("myCard");

    card.setAttribute("data-index", i);

    divContainer.appendChild(card);
  }
}

divs();
