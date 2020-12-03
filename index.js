var card = document.getElementsByClassName("card");

const activateCard = (id) => {
  card[id].classList.add("active");
};

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", () => {
    activateCard(i);
  });
}
