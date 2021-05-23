// function myFunction() {
//             var dots = document.getElementById("dots");
//             var moreText = document.getElementById("more");
//             var btnText = document.getElementById("myBtn");

//             if (dots.style.display === "none") {
//                 dots.style.display = "inline";
//                 btnText.innerHTML = "Read more";
//                 moreText.style.display = "none";
//             } else {
//                 dots.style.display = "none";
//                 btnText.innerHTML = "less";
//                 moreText.style.display = "inline";
//             }
// }

const btnText = document.getElementById('myBtn');
const moreText = document.getElementById('more');
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