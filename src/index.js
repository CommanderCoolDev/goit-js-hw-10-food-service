import createTemplate from './template/template.hbs';//импорт шаблона
import menu from './data/menu.json';//импорт всего меню

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};//наши темы
const refs = {
    menu: document.querySelector(".js-menu"),
    input: document.querySelector('#theme-switch-toggle'),
    body: document.body,
}//ссылки
const state = JSON.parse(localStorage.getItem('theme'));//магия

refs.input.checked = state?.checked;//магия
refs.body.classList.add(state?.theme ? state.theme : Theme.LIGHT) //магия

refs.menu.innerHTML = createTemplate(menu);//создание разметки при помощи шаблона и сразу ренндер
refs.input.addEventListener('change', onChangeTheme)//слушаем событие тугла

function onChangeTheme(e) {
    e.target.checked ? toggleTheme(Theme.DARK, Theme.LIGHT) : toggleTheme(Theme.LIGHT, Theme.DARK);
}//функция смены темы

function toggleTheme(add, rem) {
    const state = {
        theme: add,
        checked: add === Theme.DARK,
    }
    refs.body.classList.replace(rem, add)
    localStorage.setItem('theme', JSON.stringify(state));
}//магия опять



// const markUp = createMenu();
// function createMenu(){
//     return menu.map(createTemplate).join('');
// }

// refs.menu.innerHTML = markUp;

// refs.menu.innerHTML = createTemplate(menu);
// refs.input.addEventListener('change', onChangeTheme)



// function onChangeTheme(e) {
//     if (!e.target.checked) {
//     toggleTheme(Theme.LIGHT, Theme.DARK);
//  return;
// } 
//     toggleTheme(Theme.DARK, Theme.LIGHT);
// }

// function onChangeTheme(e) {
//     e.target.checked ? toggleTheme(Theme.DARK, Theme.LIGHT) : toggleTheme(Theme.LIGHT, Theme.DARK);
// }


// function toggleTheme(add, rem) {
// //    refs.body.classList.add(add)
// //     refs.body.classList.remove(rem)
    
//     const state = {
//     theme: add,
//     checked: add===Theme.DARK,    
// }

// refs.body.classList.replace(rem, add)

//     // localStorage.setItem('theme', add)
    
//  localStorage.setItem('theme', JSON.stringify(state));

    
// }

// (function () {
    // if (localStorage.getItem('theme') === Theme.DARK) {
    // if (localStorage.getItem('theme')) {
        // refs.body.classList.add(Theme.DARK)
        // refs.body.classList.add(localStorage.getItem('theme')? localStorage.getItem('theme') : Theme.LIGHT)
        // refs.input.checked = true;
        // refs.input.checked = localStorage.getItem('theme') === Theme.DARK;
//         return;}
    
//    refs.body.classList.add(Theme.LIGHT)
// })( )


