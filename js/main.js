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
