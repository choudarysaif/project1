// ==================== OVERLAY 1: ACCOUNT ====================
const openButton1 = document.querySelector('.account');
const closeButton1 = document.querySelector('.close-btn1');
const overlay1 = document.querySelector('#myoverlay1');

openButton1.addEventListener('click', () => {
  overlay1.classList.add('show1'); 
});

closeButton1.addEventListener('click', () => {
  overlay1.classList.remove('show1');
});

overlay1.addEventListener('click', (event) => {
  if (event.target === overlay1) {
    overlay1.classList.remove('show1');
  }
});

// ==================== OVERLAY 2: BOOK NOW ====================
const openButton2 = document.querySelector('.book');
const closeButton2 = document.querySelector('.close-btn2');
const overlay2 = document.querySelector('#myoverlay2');

openButton2.addEventListener('click', () => {
  overlay2.classList.add('show2'); 
});

closeButton2.addEventListener('click', () => {
  overlay2.classList.remove('show2');
});

overlay2.addEventListener('click', (event) => {
  if (event.target === overlay2) {
    overlay2.classList.remove('show2');
  }
});
// ==================== OVERLAY 3: offers ====================
const openButton3 = document.querySelector('.services');
const closeButton3 = document.querySelector('.close-btn3');
const overlay3 = document.querySelector('#myoverlay3');

openButton3.addEventListener('click', () => {
  overlay3.classList.add('show3'); 
});

closeButton3.addEventListener('click', () => {
  overlay3.classList.remove('show3');
});

overlay3.addEventListener('click', (event) => {
  if (event.target === overlay3) {
    overlay3.classList.remove('show3');
  }
});