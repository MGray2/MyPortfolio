const body = document.body;
const aboutBox = document.getElementById("aboutMeBox");
const darkMode = document.getElementById("darkButton");
const box = document.querySelectorAll(".linkButtonBox");
const icons = document.querySelectorAll(".iconBlock");

const skillBox = document.getElementById("skillsBox");
const skillBar = document.getElementById("iconHolder");
const aboutMe = document.querySelector("#aboutMeBox p");

darkMode.addEventListener("click", () => {
  if (body.style.backgroundColor == "lightgray") {
    darkMode.style.color = "gold";
    body.style.backgroundColor = "rgb(24, 24, 24)";
    aboutBox.style.backgroundColor = "rgb(33, 33, 33)";
    aboutBox.style.color = "white";
    box[0].style.backgroundColor = "rgb(33, 33, 33)";
    box[0].style.color = "white";
    box[1].style.backgroundColor = "rgb(33, 33, 33)";
    box[1].style.color = "white";
    skillBox.style.backgroundColor = "rgb(33, 33, 33)";
    skillBox.style.color = "white";
    for (let i = 0; i < icons.length; i++) {
      icons[i].style.filter = "invert(100%)";
    }
  } else {
    darkMode.style.color = "white";
    body.style.backgroundColor = "lightgray";
    aboutBox.style.backgroundColor = "white";
    aboutBox.style.color = "black";
    box[0].style.backgroundColor = "white";
    box[0].style.color = "black";
    box[1].style.backgroundColor = "white";
    box[1].style.color = "black";
    skillBox.style.backgroundColor = "white";
    skillBox.style.color = "black";
    for (let i = 0; i < icons.length; i++) {
      icons[i].style.filter = "none";
    }
  }
});
