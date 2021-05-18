//IMPORTS//
import menus from './menu.json';
import menuCardTpl from '../templates/menu-card.hbs';
//DATA


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchTheme = document.querySelector('#theme-switch-toggle');
const body = document.body;


body.classList.add(localStorage.getItem('theme') || Theme.LIGHT);

if (localStorage.getItem('theme') === Theme.DARK) {
    body.classList.add(Theme.DARK);
    switchTheme.checked = true;
}
else {
    body.classList.add(Theme.LIGHT);
    switchTheme.checked = false;  
}
switchTheme.addEventListener('change', changeTheme);
function changeTheme(evt) {
    if (evt.target.checked) {
        localStorage.setItem('theme', Theme.DARK);
        body.classList.remove(...body.classList);
        body.classList.add(localStorage.getItem('theme'));
    }
    else {
        localStorage.setItem('theme', Theme.LIGHT);
        body.classList.remove(...body.classList);
        body.classList.add(Theme.LIGHT);
    }
}
