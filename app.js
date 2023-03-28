console.log("je moeder");


// Navigation bar

function myFunction(x) {
    x.classList.toggle("change");
    let menu = document.querySelector(".dropdown-options")
    menu.classList.toggle("seen")
  }


  function showText() {
    let scrollText = document.getElementById("scroll-text");
    let scrollPosition = window.pageYOffset + window.innerHeight;
    if (scrollPosition >= scrollText.offsetTop) {
        scrollText.style.display = "block";
    }
}

window.addEventListener("scroll", showText);


