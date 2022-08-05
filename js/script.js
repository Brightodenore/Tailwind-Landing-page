const btn = document.getElementById('menu-btn');
console.log(btn);
const menuItem = document.getElementById('menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    menuItem.classList.toggle('flex')
    menuItem.classList.toggle('hidden')
})