const input = document.querySelector('.switch__input');
const sun = document.querySelector('.icon-sun');
const moon = document.querySelector('.icon-moon')


setBackgroundColor();

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

function setBackgroundColor(e){
    const theme = localStorage.getItem('theme');
    if(!theme){
        return;
    }
    if(theme === 'light'){
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
        // document.querySelector('p[data-light]').classList.add('checkbox-dark')
        // document.querySelector('p[data-dark]').classList.remove('checkbox-dark')
    }
    else{
        // document.querySelector('p[data-light]').classList.remove('checkbox-dark')
        // document.querySelector('p[data-dark]').classList.add('checkbox-dark')
    }
}