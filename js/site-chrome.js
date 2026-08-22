/* Shared site chrome: nav, identity sidebar, footer */
(function () {
  "use strict";

  var body = document.body;
  if (!body) return;

  var page = (body.getAttribute("data-page") || "home").toLowerCase();
  var navHost = document.querySelector("[data-site-nav]");
  var identityHost = document.querySelector("[data-site-identity]");
  var footerHost = document.querySelector("[data-site-footer]");

  var navLinks = [
    { label: "Home", hrefHome: "#top", hrefPage: "index.html", page: "home" },
    { label: "Publications", hrefHome: "#publications", hrefPage: "publications.html", page: "publications" },
    { label: "Students", hrefHome: "#students", hrefPage: "students.html", page: "students" },
    { label: "Teaching", hrefHome: "#teaching", hrefPage: "teaching.html", page: "teaching" },
    { label: "Service", hrefHome: "service.html", hrefPage: "service.html", page: "service" },
    { label: "Personal", hrefHome: "personal.html", hrefPage: "personal.html", page: "personal" }
  ];

  if (navHost) {
    navHost.innerHTML = [
      '<div class="nav-inner">',
      '<ul class="nav-links">',
      navLinks.map(function (item) {
        var active = item.page === page ? ' class="active"' : "";
        var href = page === "home" ? item.hrefHome : item.hrefPage;
        return '<li><a href="' + href + '"' + active + ">" + item.label + "</a></li>";
      }).join(""),
      '</ul>',
      '<div class="nav-right">',
      '<button class="theme-toggle" type="button" aria-label="Toggle dark mode" aria-pressed="false">',
      '<svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6.5 6.5 0 1 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
      '<svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
      "</button>",
      '<button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">',
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
      "</button>",
      "</div>",
      "</div>"
    ].join("");
  }

  if (identityHost) {
    identityHost.innerHTML = [
      '<img class="intro-photo" src="assets/img/profile.jpg" alt="Z. Berkay Celik" onerror="this.removeAttribute(\'src\')">',
      "<h1>Z. Berkay Celik</h1>",
      '<p class="role">',
      '<span class="role-line">Associate Professor in the <a href="https://www.cs.purdue.edu/">Department of Computer Science</a> at Purdue University</span>',
      '<span class="role-line">Co-director, <a href="https://pursec.cs.purdue.edu/">PurSec Lab</a></span>',
      "</p>",
      '<div class="contact">',
      '<a href="mailto:zcelik@purdue.edu" aria-label="Email">',
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
      "<span>Email</span>",
      "</a>",
      '<a href="https://scholar.google.com/citations?user=g1I269gAAAAJ&hl=en" target="_blank" rel="noopener" aria-label="Google Scholar">',
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 4 2 10l10 6 10-6Z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>',
      "<span>Scholar</span>",
      "</a>",
      '<a href="https://github.com/Beerkay" target="_blank" rel="noopener" aria-label="GitHub">',
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.7A5.2 5.2 0 0 0 20 4.8a4.9 4.9 0 0 0-.1-3.6s-1.1-.3-3.5 1.4a12 12 0 0 0-6.3 0C7.7.9 6.6 1.2 6.6 1.2A4.9 4.9 0 0 0 6.5 4.8 5.2 5.2 0 0 0 5 8.5c0 5.2 3.2 6.4 6.2 6.7a3.4 3.4 0 0 0-.9 2.6V22"/></svg>',
      "<span>GitHub</span>",
      "</a>",
      '<a href="files/BerkayCV.pdf" target="_blank" rel="noopener" aria-label="Curriculum Vitae">',
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h8M8 9h2"/></svg>',
      "<span>CV</span>",
      "</a>",
      "</div>"
    ].join("");
  }

  if (footerHost) {
    footerHost.innerHTML = [
      '<div class="footer-inner">',
      '<div class="footer-left">© <span data-footer-year></span> Z. Berkay Celik</div>',
      '<div class="footer-right">Last updated <span data-footer-updated></span>.</div>',
      "</div>"
    ].join("");
  }
})();
