const lightbox = document.getElementById("lightbox");
const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const lightboxCloseBtn = document.querySelector("#lightbox-close-btn");
let counter = 0;
let sliderItems = [];

function displayLightbox(index) {
  lightbox.style.display = "flex";
  counter = index;
  sliderItems = document.querySelectorAll(".lightbox-slide");
  sliderItems[counter].classList.add('active');
  body.classList.add("no-scroll");
  lightbox.setAttribute("aria-hidden", "false");
  main.setAttribute("aria-hidden", "true");
  lightboxCloseBtn.focus();
}

function closeLightbox() {
  sliderItems[counter].classList.remove('active');
  lightbox.style.display = "none";
  body.classList.remove("no-scroll");
  lightbox.setAttribute("aria-hidden", "true");
  main.setAttribute("aria-hidden", "false");
}

function nextSlide() {
  sliderItems[counter].classList.remove('active');

  if (counter < sliderItems.length - 1){
    counter++;
  } else {
    counter = 0;
  }

  sliderItems[counter].classList.add('active');
}

function prevSlide() {
  sliderItems[counter].classList.remove('active');

  if (counter > 0){
    counter--;
  } else {
    counter = sliderItems.length - 1;
  }

  sliderItems[counter].classList.add('active');
}


btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);


// Event qui ferme la lightbox avec Echap
document.addEventListener("keydown", function (event) {
  if (lightbox.getAttribute("aria-hidden") === "false" && event.key === "Escape") {
    closeLightbox();
  }
})

// Event qui change de slide avec les touches <- et -> 
document.addEventListener("keydown", function(event) {
  if (lightbox.getAttribute("aria-hidden") === "false" && event.key === "ArrowRight") {
    nextSlide();
  } else if (lightbox.getAttribute("aria-hidden") === "false" && event.key === "ArrowLeft") {
    prevSlide();
  }
})