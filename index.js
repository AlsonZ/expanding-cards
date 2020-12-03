let card = document.getElementsByClassName("card");
let isActive = 0;

const activateCard = (id) => {
  card[isActive].classList.remove("active");
  card[id].classList.add("active");
  isActive = id;
};

const onCardClick = (id) => {
  if (card[id].classList.contains("active")) {
    card[isActive].classList.remove("active");
  } else {
    activateCard(id);
  }
};

for (let id = 0; id < card.length; id++) {
  card[id].addEventListener("click", () => {
    onCardClick(id);
  });
}
