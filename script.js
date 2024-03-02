const buttonInsert = document.getElementById('buttonInsert');
const popUp = document.getElementById('pop-up');
const closeInsert = document.getElementById("closeInsert");

buttonInsert.addEventListener('click', () => {
  popUp.showModal();
});

closeInsert.addEventListener("click", () => {
	popUp.close();
});