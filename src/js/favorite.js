const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const descendant = document.querySelector('#descendant');

parent.addEventListener('click', () => {
  alert('Parent click handler');
});

child.addEventListener('click', () => {
  alert('Child click handler');
});

descendant.addEventListener('click', () => {
  alert('Descendant click handler');
});
