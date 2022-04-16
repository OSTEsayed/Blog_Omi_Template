
let Index = 1;
let first = document.getElementsByClassName("souslider");

function goslide(n) {
    Slide(Index += n);
}
function Slide(n) {
  let i;
  if (n > first.length) {Index = 1}    
  if (n < 1) {Index = first.length}
  for (i = 0; i < first.length; i++) {
    first[i].style.display = "none";  
  }
  first[Index-1].style.display = "block";
}
function currentSlide(n) {
  Slide(Index=n);
}
function AutoSlides() {
    let i;
    for (i = 0; i < first.length; i++) {
      first[i].style.display = "none";
    }
    Index++;
    if (Index > first.length) {Index = 1}
    first[Index-1].style.display = "flex";
    setTimeout(AutoSlides, 6000); 
}
AutoSlides();

Slide(Index)