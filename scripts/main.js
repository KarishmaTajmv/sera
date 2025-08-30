
// Fade-in animation
window.addEventListener('load', () => {
  document.querySelector('.hero')?.classList.add('fade-in');
});

// Optional hero carousel: set your image filenames inside /assets
const heroImages = ['hero1.png','hero2.jpg','hero3.jpg'].map(x => `assets/${x}`);
let heroIndex = 0;
const heroEl = document.querySelector('.hero');
const dotWrap = document.createElement('div');
dotWrap.className = 'hero-dots';

function renderDots(){
  dotWrap.innerHTML = '';
  heroImages.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'hero-dot' + (i===heroIndex ? ' active' : '');
    d.addEventListener('click', () => { heroIndex = i; setHero(); });
    dotWrap.appendChild(d);
  });
}

function setHero(){
  if(!heroEl) return;
  heroEl.style.backgroundImage =
   `radial-gradient(52% 52% at 50% 55%, rgba(13,78,123,.55) 0%, rgba(0,0,0,.45) 100%), url('${heroImages[heroIndex]}')`;
  renderDots();
}
if(heroEl){
  heroEl.appendChild(dotWrap);
  setHero();
  setInterval(() => {
    heroIndex = (heroIndex + 1) % heroImages.length;
    setHero();
  }, 5500);
}

// Scroll to top button
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '↑';
scrollBtn.className = 'scroll-to-top';
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
window.addEventListener('scroll', () => { scrollBtn.style.display = window.scrollY > 320 ? 'block' : 'none'; });
