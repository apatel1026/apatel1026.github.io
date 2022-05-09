/* Unblurring functionality  */
function unblurImage() {
  let root = document.querySelector(':root')
  root.style.setProperty('--blur', '0px')
  root.style.setProperty('--element-display', 'none')
}