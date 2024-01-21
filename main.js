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
