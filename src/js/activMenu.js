

function setActiveLink() {
  const all = document.querySelectorAll('.site-nav__link');
  all.forEach(link => {
    if (link.href === window.location.href) {
      link.parentNode.classList.add('active');
    }
  });
}

setActiveLink();