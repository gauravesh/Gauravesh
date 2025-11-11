const themeToggle = document.getElementById('themeToggle');
const toTop = document.getElementById('toTop');
const saved = localStorage.getItem('theme');
if (saved === 'light') document.body.classList.add('light');


themeToggle.addEventListener('click', () => {
document.body.classList.toggle('light');
localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
});


window.addEventListener('scroll', () => {
if (window.scrollY > 500) {
toTop.style.opacity = 1;
toTop.style.pointerEvents = 'auto';
} else {
toTop.style.opacity = 0;
toTop.style.pointerEvents = 'none';
}
});


toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));


document.getElementById('year').textContent = new Date().getFullYear();
