(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const menuBtnRef2 = document.querySelector('[data-menu-button2]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const themaMenuRef = document.querySelector('[data-thema]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    menuBtnRef2.classList.toggle('is-open');
    menuBtnRef2.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    themaMenuRef.classList.toggle('is-open');
    document.body.classList.toggle('mobile-body');
  });
})();
