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
})();
