(function () {
  "use strict";

  // Set the current year in the footer.
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Smooth-scroll fallback for browsers without CSS scroll-behavior support.
  var supportsSmoothScroll = "scrollBehavior" in document.documentElement.style;
  if (!supportsSmoothScroll) {
    var links = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function (event) {
        var targetId = this.getAttribute("href");
        if (!targetId || targetId === "#") {
          return;
        }
        var target = document.querySelector(targetId);
        if (!target) {
          return;
        }
        event.preventDefault();
        target.scrollIntoView();
      });
    }
  }
})();