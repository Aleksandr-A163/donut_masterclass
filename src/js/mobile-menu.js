// (() => {
//   const menuBtnRef = document.querySelector("[data-menu-button]");
//   const mobileMenuRef = document.querySelector("[data-menu]");

//   menuBtnRef.addEventListener("click", () => {
//     const expanded =
//       menuBtnRef.getAttribute("aria-expanded") === "true" || false;

//     menuBtnRef.classList.toggle("is-open");
//     menuBtnRef.setAttribute("aria-expanded", !expanded);

//     mobileMenuRef.classList.toggle("is-open");
//   });
// })();

(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const menuLinkRef = document.querySelector("[data-menu-link]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");

    menulinkRef.addEventListener("click", () => {
      const expended =
      menuBtnRef.getAttribute("aria-expanded") === true || "false";
      menuBtnRef.classList.toggle("is-open");
      menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");

    });
  });


})();

  // menulinkRef.addEventListener("click", () => {
  //     menuBtnRef.getAttribute("aria-expanded") === true || "false";

  //   menuBtnRef.classList.toggle("is-open");
  //   menuBtnRef.setAttribute("aria-expanded");

  //   mobileMenuRef.classList.toggle("is-open");


    
  // });


// menuBtnRef.classList.toggle("is-open");
// menuBtnRef.setAttribute("aria-expanded", !expanded);

// mobileMenuRef.classList.toggle("is-open");

// menuBtnRef.classList.toggle("is-open");
// menuBtnRef.classList.toggle("is-open");
// menuBtnRef.setAttribute("aria-expanded");


// mobileMenuRef.classList.toggle("is-open");
  
//    menuBtnRef.getAttribute("aria-expanded") === true || "false";

// // menuBtnRef.classList.toggle("is-open");
// menuBtnRef.setAttribute("aria-expanded", !expanded);


  // menuBtnRef.getAttribute("aria-expanded") === true || "false";

// menuBtnRef.classList.toggle("is-open");
// menuBtnRef.setAttribute("aria-expanded", !expanded);

// mobileMenuRef.classList.toggle("is-open");