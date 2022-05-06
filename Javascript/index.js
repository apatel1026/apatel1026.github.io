alert('test');

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
/*Blurring fncts*/
function unblurImage() {
  let root = document.querySelector(':root')
  root.style.setProperty('--blur', '0px')
  root.style.setProperty('--element-display', 'none')
}