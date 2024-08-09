// Home page
if (document.title === "Portfolio of Micah Gray") {
  function delayFlash() {
    var titleElement = document.querySelectorAll(".f");
    titleElement[0].classList.add("flash");
    titleElement[1].classList.add("flash");
  }

  // Trigger the delayFlash function with a delay on page load
  window.onload = function () {
    setTimeout(delayFlash, 500); // 1000 milliseconds (1 second) delay
  };

  document.addEventListener("DOMContentLoaded", function () {
    var boxes = document.querySelectorAll(".box");

    function handleScroll() {
      boxes.forEach(function (box) {
        var boxPosition = box.getBoundingClientRect().top;
        var screenHeight = window.innerHeight;

        if (boxPosition < screenHeight * 0.8) {
          box.style.opacity = 1;
          box.style.transform = "translateY(0)";
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
  });
}
// Projects page
if (document.title === "Projects") {
  const carousel = document.querySelector(".miniPageHolder");
  const projects = document.querySelectorAll(".project");
  const projectImages = document.querySelectorAll(".projectImage");
  const projectDesc = document.querySelectorAll(".desc");
  const buttons = document.querySelectorAll(".scrollButton");
  const modeButton = document.getElementById("modeButton");
  const projectButtons = document.querySelectorAll(".LinkButton");

  function scrollCarousel(direction) {
    const projectWidth =
      projects[0].offsetWidth +
      parseInt(getComputedStyle(projects[0]).marginLeft) * 2;
    const scrollAmount = projectWidth * direction;

    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    const currentScrollLeft = carousel.scrollLeft;

    if (direction === 1 && currentScrollLeft + scrollAmount >= maxScrollLeft) {
      carousel.scrollTo({ left: 0, behavior: "smooth" });
    } else if (direction === -1 && currentScrollLeft + scrollAmount <= 0) {
      carousel.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
    } else {
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }

  let interuptAutoScroll = false;

  for (let i = 0; i < projects.length; i++) {
    projects[i].addEventListener("mouseenter", () => {
      interuptAutoScroll = true;
    });
    projects[i].addEventListener("mouseleave", () => {
      interuptAutoScroll = false;
    });
    projects[i].addEventListener("touchstart", () => {
      interuptAutoScroll = true;
    });
    projects[i].addEventListener("touchend", () => {
      interuptAutoScroll = false;
    });
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseenter", () => {
      interuptAutoScroll = true;
    });
    buttons[i].addEventListener("mouseleave", () => {
      interuptAutoScroll = false;
    });
    buttons[i].addEventListener("touchstart", () => {
      interuptAutoScroll = true;
    });
    buttons[i].addEventListener("touchend", () => {
      interuptAutoScroll = false;
    });
  }

  let counter = 0;
  function autoScroll() {
    setTimeout(() => {
      if (interuptAutoScroll) {
        counter = 0;
        autoScroll();
      } else {
        counter++;
        autoScroll();
      }
      if (counter == 15) {
        scrollCarousel(1);
        counter = 0;
      }
    }, 1000);
  }

  autoScroll();

  function viewMode(galleryMode) {
    if (galleryMode) {
      // Gallery Mode On
      modeButton.textContent = "View Carousel";
      buttons[0].style.display = "none";
      buttons[1].style.display = "none";
      carousel.className = "miniPageHolder mph_glry";
      for (let i = 0; i < projects.length; i++) {
        projects[i].className = "project p_glry";
      }
      for (let i = 0; i < projectImages.length; i++) {
        projectImages[i].className = "projectImage pi_glry";
      }
      for (let i = 0; i < projectDesc.length; i++) {
        projectDesc[i].className = "desc pd_glry";
      }
      for (let i = 0; i < projectButtons.length; i++) {
        projectButtons[i].className = "LinkButton lb_glry";
      }
    } else {
      // Gallery Mode Off
      modeButton.textContent = "View Gallery";
      buttons[0].style.display = "block";
      buttons[1].style.display = "block";
      carousel.className = "miniPageHolder";
      for (let i = 0; i < projects.length; i++) {
        projects[i].className = "project p_crsl";
      }
      for (let i = 0; i < projectImages.length; i++) {
        projectImages[i].className = "projectImage";
      }
      for (let i = 0; i < projectDesc.length; i++) {
        projectDesc[i].className = "desc";
      }
      for (let i = 0; i < projectButtons.length; i++) {
        projectButtons[i].className = "LinkButton";
      }
    }
  }

  let galleryMode = false;
  modeButton.addEventListener("click", () => {
    galleryMode = !galleryMode;
    viewMode(galleryMode);
  });
}
