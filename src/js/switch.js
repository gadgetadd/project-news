const refs = {
  input: document.querySelector('.switch__input'),
};

setThemeColor();

refs.input.addEventListener('click', onInputClick);
function onInputClick(e) {
  let theme;
  if (e.target.checked) {
    theme = 'dark';
    localStorage.setItem('theme', theme);
  } else {
    theme = 'light';
    localStorage.setItem('theme', theme);
  }
  setThemeColor(theme);
}

function setThemeColor() {
  const theme = localStorage.getItem('theme');
  if (!theme) {
    return;
  }
  if (theme === 'light') {
    document.querySelector('html').classList.remove('dark');
    document.body.classList.remove('body-dark');
  } else {
    refs.input.checked = true;
    document.querySelector('html').classList.add('dark');
  }
}
