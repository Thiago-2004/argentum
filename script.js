const header = document.querySelector('header');

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
});

const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('nav ul');

navToggle.addEventListener('click', function() {
  navList.classList.toggle('open');
});
