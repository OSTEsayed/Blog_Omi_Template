
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

var ser= document.getElementsByClassName("Are")[0];
var serv= document.getElementsByClassName("serv");
var what= document.getElementsByClassName("what")[0];

var observer = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].isIntersecting === true){

    console.log('Element has just become visible in screen');
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function demo() {
    what.classList ="what whatanim";
    what.style.display="block";
      for (let i = 0; i < serv.length; i++) {
          serv[i].classList ="serv whatanim";
          await sleep(1000);
      }
      console.log('Done');
  }
  
  demo();
  }
}, { threshold: [0.5] });

observer.observe(ser);
var menu=document.getElementsByClassName("menu")[0];
var bleur=document.getElementsByClassName("bleur")[0];
function mennu(){
  menu.style.left="0";
  bleur.style.display="block";
  
}
function onmennnu(){
  menu.style.left="-100%";
  bleur.style.display="none";

}