//faq accordion
let accordion = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.querySelector(".panel");
    let icon = this.querySelector(".bi");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.marginTop = 0 + "px";
      icon.classList.remove("rotate");
    } else {
      panel.classList.remove("hidden");
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.marginTop = 20 + "px";
      icon.classList.toggle("rotate");
    }
  });
}

function myFunction() {
  var x = document.getElementById("navbar-js");
  if (x.className === "nav-container") {
    x.className += " responsive";
  } else {
    x.className = "nav-container";
  }
}


addTimerInjector(DATES.endEvent, "start");
