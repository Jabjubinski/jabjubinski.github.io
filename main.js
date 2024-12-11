const divContainer = document.querySelector(".container");
const clear = document.getElementById('clear');

function divs() {
  for (i = 0; i < 256; i++) {
    const card = document.createElement("div");

    card.classList.add("myCard");

    card.innerHTML = ``;

    card.setAttribute("data-index", i);

    divContainer.appendChild(card);

    card.addEventListener('mouseenter', () => {
      card.style = "background-color: red";
    });
    clear.addEventListener('click', () =>{
        card.style = '';
    });
  }
  
}

divs();


