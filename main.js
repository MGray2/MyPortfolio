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
  function scrollCarousel(direction) {
    const carousel = document.querySelector(".miniPageHolder");
    const projects = document.querySelectorAll(".project");
    const projectWidth =
      projects[0].offsetWidth +
      parseInt(getComputedStyle(projects[0]).marginLeft) * 2;
    const scrollAmount = projectWidth * direction;

    carousel.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  }
}
