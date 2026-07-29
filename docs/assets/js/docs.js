(function () {
  var menuBtn = document.querySelector("[data-menu-toggle]");
  var backdrop = document.querySelector("[data-backdrop]");

  function closeNav() {
    document.body.classList.remove("nav-open");
  }

  function toggleNav() {
    document.body.classList.toggle("nav-open");
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", toggleNav);
  }

  if (backdrop) {
    backdrop.addEventListener("click", closeNav);
  }

  document.querySelectorAll(".sidebar a").forEach(function (link) {
    link.addEventListener("click", closeNav);
  });

  document.querySelectorAll("[data-nav-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      var group = btn.closest("[data-nav-group]");
      if (!group) return;

      var isOpen = group.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");

      var label = btn.getAttribute("aria-label") || "";
      if (/expand/i.test(label)) {
        btn.setAttribute("aria-label", label.replace(/expand/i, "Collapse"));
      } else if (/collapse/i.test(label)) {
        btn.setAttribute("aria-label", label.replace(/collapse/i, "Expand"));
      }
    });
  });
})();
