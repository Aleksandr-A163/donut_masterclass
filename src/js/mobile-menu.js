(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });

  const links = document.querySelectorAll('.mobile-menu__link');
const menu = document.querySelector('.mobile-menu');
const menuBtn = document.querySelector('.menu-button');
links.forEach(link =>
  link.addEventListener('click', () => {
    if (menu.classList.contains('is-open')) {
      menu.classList.remove('is-open');
      menuBtn.classList.remove('is-open');
    }
  }),
);
})();