
const btnText = document.getElementById('program-btn');
const moreText = document.getElementById('moree');
btnText.addEventListener('click', openText);
let isOpen = false;
function openText() {
  console.log(moreText);
  if (isOpen === false) {
    moreText.style.display = 'inline';
    btnText.innerHTML = 'Less';
    isOpen = true;
  } else {
    btnText.innerHTML = 'Read more';
    moreText.style.display = 'none';
    isOpen = false;
  }
}