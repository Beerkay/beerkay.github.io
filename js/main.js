/* Mobile nav, theme toggle, scroll-spy active section, and entrance reveal. */
(function () {
  "use strict";

  var root = document.documentElement;
  var SITE_META = window.SITE_META || {
    lastUpdated: "July 5, 2026"
  };
  var themeKey = "celik-site-theme";
  var storedTheme = null;
  try { storedTheme = localStorage.getItem(themeKey); } catch (e) {}
  var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  var theme = storedTheme || (prefersDark ? "dark" : "light");
  root.setAttribute("data-theme", theme);

  function setTheme(next) {
    root.setAttribute("data-theme", next);
    try { localStorage.setItem(themeKey, next); } catch (e) {}
    var btn = document.querySelector(".theme-toggle");
    if (btn) btn.setAttribute("aria-pressed", next === "dark" ? "true" : "false");
  }

  document.addEventListener("click", function (e) {
    var themeBtn = e.target.closest(".theme-toggle");
    if (themeBtn) {
      setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    }
  });
  setTheme(theme);

  // ---- Footer text ----
  var footerYear = document.querySelectorAll("[data-footer-year]");
  var footerUpdated = document.querySelectorAll("[data-footer-updated]");
  var currentYear = new Date().getFullYear();
  Array.prototype.forEach.call(footerYear, function (el) {
    el.textContent = currentYear;
  });
  Array.prototype.forEach.call(footerUpdated, function (el) {
    el.textContent = SITE_META.lastUpdated;
  });

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
