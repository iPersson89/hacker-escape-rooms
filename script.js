document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("main-menu-toggle");

  if (menuToggle) {
    const menuId = menuToggle.getAttribute("aria-controls");
    const menu = document.getElementById(menuId);
    const closeBtn = document.getElementById("main-menu-close");

    if (menu) {
      menuToggle.addEventListener("click", () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute("aria-expanded", !isExpanded);
        menu.classList.toggle("hidden");
        menuToggle.setAttribute("aria-label", isExpanded ? "Open menu" : "Close menu");
      });

     
      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          menu.classList.add("hidden");
          menuToggle.setAttribute("aria-expanded", "false");
          menuToggle.setAttribute("aria-label", "Open menu");
        });
      }
    }
  }
});