var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}





// FOR PROTOTYPES

let screenIndex = 1;
showPrototypes(screenIndex);

// Next/previous controls
function plusPrototype(n) {
  showPrototypes(screenIndex += n);
}

// Thumbnail image controls
function currentPrototype(n) {
  showPrototypes(screenIndex = n);
}

function showPrototypes(n) {
  let i;
  let prototypes = document.getElementsByClassName("prototypes");
  let dots = document.getElementsByClassName("dot-proto");
  if (n > prototypes.length) {screenIndex = 1} 
  if (n < 1) {screenIndex = prototypes.length}
  for (i = 0; i < prototypes.length; i++) {
      prototypes[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  prototypes[screenIndex-1].style.display = "block"; 
  dots[screenIndex-1].className += " active";
}