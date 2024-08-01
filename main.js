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

  function autoScroll() {
    setTimeout(() => {
      if (interuptAutoScroll) {
        autoScroll();
      } else {
        scrollCarousel(1);
        autoScroll();
      }
    }, 10000);
  }

  autoScroll();
}
