/* Mobile nav, scroll-spy active section, and entrance reveal. */
(function () {
  "use strict";

  // ---- Mobile menu ----
  document.addEventListener("click", function (e) {
    if (e.target.closest(".nav-toggle")) {
      var btn = e.target.closest(".nav-toggle");
      var links = document.querySelector(".nav-links");
      if (links) {
        var open = links.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      }
    }
    if (e.target.closest(".nav-links a")) {
      var nl = document.querySelector(".nav-links");
      var tg = document.querySelector(".nav-toggle");
      if (nl) nl.classList.remove("open");
      if (tg) tg.setAttribute("aria-expanded", "false");
    }
  });

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- Scroll-spy: highlight nav link of section in view ----
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-links a[href^='#']"));
  if (sections.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          navLinks.forEach(function (link) {
            link.classList.toggle("active", link.getAttribute("href") === "#" + id);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    sections.forEach(function (s) { spy.observe(s); });
  }

  // ---- Entrance reveal (skip if reduced motion) ----
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (prefersReduced || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    var revObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });
    reveals.forEach(function (el) { revObs.observe(el); });
  }
})();
