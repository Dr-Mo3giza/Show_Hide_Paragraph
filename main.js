let btn = document.querySelector("button");
let textDiv = document.querySelector(".text-box");
let cssObj = window.getComputedStyle(textDiv);

btn.addEventListener("click", function () {
  if (cssObj.getPropertyValue("opacity") === "1") {
    textDiv.style.opacity = "0";
  } else {
    textDiv.style.opacity = "1";
  }
});
