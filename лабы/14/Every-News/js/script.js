let html = document.querySelector('html');
let themeButtonLight = document.querySelector('.theme-button-light');
let themeButtonDark = document.querySelector('.theme-button-dark');

themeButtonLight.onclick = function() {
  html.setAttribute('data-theme-name', '')
};

themeButtonDark.onclick = function() {
  html.setAttribute('data-theme-name', 'dark')
};
