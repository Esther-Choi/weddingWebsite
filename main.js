const toggleBtn = document.querySelector('.navbar_toggleBtn'),
    menu = document.querySelector('.navbar_menu'),
    icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
