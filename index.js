var card = document.getElementsByClassName("card");

const activateCard = (id) => {
  card[id].classList.add("active");
};

card[0].addEventListener("click", () => {
  activateCard(0);
});
