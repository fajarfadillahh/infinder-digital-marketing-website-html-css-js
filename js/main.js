// ===== SHOW MENU =====
function showMenu(headerMenuId, headerToggleId) {
  const headerMenu = document.getElementById(headerMenuId);
  const headerToggle = document.getElementById(headerToggleId);

  if (headerMenu && headerToggle) {
    headerToggle.onclick = () => {
      headerMenu.classList.toggle("show-menu");
    };
  }
}
showMenu("header-menu", "header-toggle");

// ===== SCROLLUP ACTION =====
const scrollY = window.pageYOffset;

function scrollUp() {
  const scrollup = document.getElementById("scroll-up");

  this.scrollY > 150
    ? scrollup.classList.add("scroll-action")
    : scrollup.classList.remove("scroll-action");
}
window.addEventListener("scroll", scrollUp);
