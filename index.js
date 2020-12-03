let card = document.getElementsByClassName("card");
let isActive = 0;

const activateCard = (id) => {
  card[isActive].classList.remove("active");
  card[id].classList.add("active");
  isActive = id;
};

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", () => {
    activateCard(i);
  });
}
