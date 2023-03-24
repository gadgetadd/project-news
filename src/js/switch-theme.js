const input = document.querySelector('.switch__input');
<<<<<<< Updated upstream
const sun = document.querySelector('.icon-sun');
const moon = document.querySelector('.icon-moon')


setBackgroundColor();
=======


setBackgroundColor();
console.dir(input)
>>>>>>> Stashed changes

input.addEventListener('click', onInputClick)
function onInputClick(e){
    let theme
    if (e.target.checked){
        theme = 'dark'
        localStorage.setItem('theme', theme);
    }
    else{
        theme = 'light'
        localStorage.setItem('theme', theme);
    }
    setBackgroundColor(theme);
}

<<<<<<< Updated upstream
function setBackgroundColor(e){
=======
function setBackgroundColor(){
>>>>>>> Stashed changes
    const theme = localStorage.getItem('theme');
    if(!theme){
        return;
    }
    if(theme === 'light'){
<<<<<<< Updated upstream
        document.querySelector('html').classList.remove('dark')
        document.body.classList.remove('body-dark')
    }
    else{
        input.checked = true;
        document.querySelector('html').classList.add('dark') 
    }
    switchIcon(e)
}

function switchIcon(e){
    if(input.checked){
        // sun.classList.add('dark-icon')
        // moon.classList.remove('dark-icon')
        document.querySelector('p[data-light]').classList.add('checkbox-dark')
        document.querySelector('p[data-dark]').classList.remove('checkbox-dark')
    }
    else{
        // sun.classList.remove('dark-icon')
        // moon.classList.add('dark-icon')
        document.querySelector('p[data-light]').classList.remove('checkbox-dark')
        document.querySelector('p[data-dark]').classList.add('checkbox-dark')
    }
=======
        console.log('fff')
        document.querySelector('html').classList.remove('dark')
        document.body.classList.remove('body-dark')
        return;
    }
    input.checked = true;
    document.querySelector('html').classList.add('dark')
>>>>>>> Stashed changes
}