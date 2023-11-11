const initApp = () => {
  const hamburgerButton = document.getElementById("hamburger-button");
  const hamburgerMenu = document.getElementById("hamburger-menu");

  const toggleMenu = () => {
    hamburgerMenu.classList.toggle("hidden");
    hamburgerMenu.classList.toggle("flex");
    hamburgerButton.classList.toggle("toggle-btn");
  };

  hamburgerButton.addEventListener("click", toggleMenu);
  hamburgerMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);
