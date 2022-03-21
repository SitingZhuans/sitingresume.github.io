const text = document.querySelectorAll(".thePaths");

for (let i = 0; i < text.length; i++) {
  console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
}

const lastword = document.querySelector("#eleventh");
const animation = document.querySelector("div.animation");
lastword.addEventListener("animationend", () => {
  animation.style = "transition: all 1s ease; opacity:0; pointer-events: none;";
});

let header = document.querySelector("header");

let headerAnchor = document.querySelectorAll("header nav ul li a");

window.addEventListener("scroll", () => {
  if (window.pageYOffset != 0) {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.5 ";
    header.style.color = "white";
    headerAnchor.forEach((a) => {
      a.style.color = "white";
    });
  } else {
    header.style = "";
    headerAnchor.forEach((a) => {
      a.style.color = "black";
    });
  }
});
