//containers
const divContainer = document.querySelector(".container");

//buttons
const clear = document.getElementById("clear");
const btnCreate = document.getElementById("btn-create");

//grid rows and columns inputs
const gridNumber = document.getElementById("grid-number");

//grid making function

btnCreate.addEventListener("click", () => {
  divContainer.innerHTML = "";

  if (gridNumber.value < 1){
    console.error('The input is invalid')
    alert('grid has to be bigger or equal to 1')
    return null
  } 
  if(gridNumber.value > 100){
    console.error('The input is invalid')
    alert('grid has to be less or equal to 100')
    return null
  }

  for (i = 0; i < gridNumber.value * gridNumber.value; i++) {
    const card = document.createElement("div");

    card.classList.add("myCard");
    card.style.width = `calc(100%/${gridNumber.value})`;
    card.setAttribute("data-index", i);
    divContainer.appendChild(card);

    card.addEventListener("mouseenter", () => {
      card.style.backgroundColor = "red"
    });
  }
});

clear.addEventListener("click", () => {
  const allCard = document.querySelectorAll(".myCard");
  allCard.forEach((card) => {
    card.style.backgroundColor = "rgb(180, 180, 180)";
  });
});
