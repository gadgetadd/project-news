(function hideSearch() {
  const searchForm = document.querySelector('.search');
  if (document.title !== 'News') {
    searchForm.classList.add('visually-hidden');
  }
})();

export function setActiveLink() {
  const all = document.querySelectorAll('.site-nav__link');
  if (window.matchMedia('(min-width:768px)').matches) {
    all.forEach(link => {
      if (link.href === window.location.href) {
        link.parentNode.classList.add('active');
      }
    });
  } else {
    all.forEach(link => {
      link.parentNode.classList.remove('active');
    });
  }
}

setActiveLink();
