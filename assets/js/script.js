const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
const submenuItems = document.querySelectorAll(".submenu span");
const menuItems = document.querySelectorAll(".menu li");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
  });
}

// Gestion ouverture des sous-menus
submenuItems.forEach(item => {
  item.addEventListener("click", () => {
    item.parentElement.classList.toggle("open");
  });
});

// Gestion couleur active
menuItems.forEach(item => {
  item.addEventListener("click", () => {
    menuItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});
