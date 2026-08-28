(function () {
  const root = document.documentElement;
  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const storedTheme = localStorage.getItem("mafubam-theme");

  function setTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem("mafubam-theme", theme);
    if (themeToggle) {
      themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
      themeToggle.setAttribute("title", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
      themeToggle.dataset.icon = theme === "dark" ? "sun" : "moon";
      themeToggle.textContent = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
    }
  }

  setTheme(storedTheme === "dark" || storedTheme === "light" ? storedTheme : "light");

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      setTheme(root.dataset.theme === "dark" ? "light" : "dark");
    });
  }

  if (navToggle && nav) {
    navToggle.setAttribute("aria-label", "Open navigation menu");
    navToggle.setAttribute("title", "Open navigation menu");

    navToggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
      navToggle.setAttribute("title", isOpen ? "Close navigation menu" : "Open navigation menu");
    });
  }
  function initScrollReveal() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealSelectors = [
      ".section",
      ".project-story-section",
      ".card-grid > *",
      ".proof-grid > *",
      ".research-proof-grid > *",
      ".portfolio-proof-grid .proof-card",
      ".package-grid > *",
      ".challenge-grid > *",
      ".timeline-list > *",
      ".outcome-grid > *",
      ".project-cover-image",
      ".wide-proof",
      ".case-visual-grid figure",
      ".quote-box",
      ".contact-item",
      ".panel"
    ];

    const revealItems = Array.from(document.querySelectorAll(revealSelectors.join(",")))
      .filter((item, index, list) => list.indexOf(item) === index)
      .filter((item) => !item.closest(".site-header") && !item.closest(".footer"));

    if (revealItems.length === 0) {
      return;
    }

    revealItems.forEach((item) => {
      if (item.matches(".project-cover-image, .wide-proof, .case-visual-grid figure")) {
        item.dataset.reveal = "image";
      } else {
        item.dataset.reveal = "section";
      }
    });

    const staggerParents = document.querySelectorAll(".card-grid, .proof-grid, .research-proof-grid, .portfolio-proof-grid, .package-grid, .challenge-grid, .timeline-list, .outcome-grid, .case-visual-grid");
    staggerParents.forEach((parent) => {
      Array.from(parent.children).forEach((child, index) => {
        if (child.dataset.reveal) {
          child.style.setProperty("--reveal-delay", `${Math.min(index * 45, 180)}ms`);
        }
      });
    });

    root.classList.add("motion-ready");

    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible", "reveal-done"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-visible");
        window.setTimeout(() => entry.target.classList.add("reveal-done"), 620);
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.12 });

    revealItems.forEach((item) => observer.observe(item));
  }

  initScrollReveal();
})();

