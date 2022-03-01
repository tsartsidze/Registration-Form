const button = document.querySelector(".button");
const sms = document.querySelector(".sms");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

const openModal = function () {
  sms.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  sms.classList.add("hidden");
  overlay.classList.add("hidden");
};

button.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
