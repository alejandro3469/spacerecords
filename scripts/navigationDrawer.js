function show() {
  var element = document.getElementById("drawer");
  var denier = document.getElementById("denier");
  element.style.left= "0";
  denier.style.display= "block";
}
function hide() {
  var element = document.getElementById("drawer");
  var denier = document.getElementById("denier");
  element.style.left= "-100%";
  denier.style.display= "none";
}

//fix vh
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

let vw = window.innerWidth * 0.01;
document.documentElement.style.setProperty('--vw', `${vw}px`);

window.addEventListener('resize', () => {
  let vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty('--vw', `${vw}px`);
});