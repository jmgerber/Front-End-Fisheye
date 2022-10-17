const modal = document.getElementById("contact_modal");
const body = document.querySelector("body");
const main = document.getElementById("main");
const modalCloseBtn = document.getElementById("modal_close_btn");

function displayModal() {
  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");
  main.setAttribute("aria-hidden", "true");
  modalCloseBtn.focus();
  body.classList.add("no-scroll");
}

function closeModal() {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  main.setAttribute("aria-hidden", "false");
  body.classList.remove("no-scroll");
}

// Event qui ferme la modale avec Echap
document.addEventListener("keydown", function (event) {
  if (modal.getAttribute("aria-hidden") === "false" && event.key === "Escape") {
    closeModal();
  }
})

const modalForm = document.querySelector(".modal_form");

modalForm.addEventListener("submit", function(event) {
  event.preventDefault();
  // Récupération des données de l'utilisateur
  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log({firstName, lastName, email, message});
})