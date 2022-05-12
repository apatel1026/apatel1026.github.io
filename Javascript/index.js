/* Unblurring functionality  */
function unblurImage() {
  /*query slector spreading blur fnct across all posts, would need remake for new object array*/
  let root = document.querySelector(':root')
  /*on-click un blurring */
  root.style.setProperty('--blur', '0px')
  root.style.setProperty('--element-display', 'none')
}