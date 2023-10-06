const body = document.body;
const aboutBox = document.getElementById("aboutMeBox");
const darkMode = document.getElementById("darkButton");
const portalBox = document.getElementById("linkButtonBox");
const portalBox2 = document.getElementById("linkButtonBox2");
const skillBox = document.getElementById("skillsBox");
const skillBar = document.getElementById("iconHolder");
const aboutMe = document.querySelector("#aboutMeBox p");

darkMode.addEventListener("click", () => {
  if (body.style.backgroundColor == "lightgray") {
    darkMode.style.color = "gold";
    body.style.backgroundColor = "black";
    aboutBox.style.backgroundColor = "rgb(33, 33, 33)";
    aboutBox.style.color = "white";
    portalBox.style.backgroundColor = "rgb(33, 33, 33)";
    portalBox.style.color = "white";
    portalBox2.style.backgroundColor = "rgb(33, 33, 33)";
    portalBox2.style.color = "white";
    skillBox.style.backgroundColor = "rgb(33, 33, 33)";
    skillBox.style.color = "white";
    skillBar.style.backgroundColor = "white";
  } else {
    darkMode.style.color = "white";
    body.style.backgroundColor = "lightgray";
    aboutBox.style.backgroundColor = "white";
    aboutBox.style.color = "black";
    portalBox.style.backgroundColor = "white";
    portalBox.style.color = "black";
    portalBox2.style.backgroundColor = "white";
    portalBox2.style.color = "black";
    skillBox.style.backgroundColor = "white";
    skillBox.style.color = "black";
  }
});
