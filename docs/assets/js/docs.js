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
})();
