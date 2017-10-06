var index = 1 ;
ThisSlides(index);

function slidesAdd(n) {
    ThisSlides(index += n);
}

function slidesBack(n) {
    ThisSlides(index = n);
}

function ThisSlides(n) {
  var i;
  var slides1 = document.getElementsByClassName("slides");
  var is = document.getElementsByClassName("is");
  if (n > slides1.length) {index = 1}
  if (n < 1) {index = slides1.length}
  for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";
  }
  for (i = 0; i < is.length; i++) {
      is[i].className = is[i].className.replace(" active", "");
  }
  slides1[index-1].style.display = "block";
  is[index-1].className += " active";
}
