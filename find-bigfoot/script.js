const bigfoot = document.querySelector('#bigfoot');

bigfoot.addEventListener('click', () => {
  alert('Woohoo, you win! You found Bigfoot!');
  moveBigfoot();
}, false);

window.addEventListener('load', () => {
  moveBigfoot();
  bigfoot.src = './bigfoot.png';
}, false);

const moveBigfoot = () => {
  const maxX = window.innerWidth - 44;
  const maxY = window.innerWidth - 50;
  const x = Math.round(Math.random() * maxX);
  const y = Math.round(Math.random() * maxY);
  
  bigfoot.style.left = `${x}px`;
  bigfoot.style.top = `${y}px`;
}
