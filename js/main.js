document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const menu = document.querySelector('[menu]');
  const openBtn = document.querySelector('[data-open]');
  const closeBtns = document.querySelectorAll('[data-close]');
  const accordionButtons = document.querySelectorAll('.accordion__button');


  openBtn.addEventListener('click', () => {
    menu.classList.add('menu--open');
    body.classList.add('scroll-lock');
  });

  closeBtns.forEach((btn)=>{
  btn.addEventListener('click', () => {
      menu.classList.remove('menu--open');
      body.classList.remove('scroll-lock');
    });
  })

  
  accordionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const sublist = btn.parentElement;
      sublist.classList.toggle('accordion__item--active');
    });
  });

  document.querySelectorAll('a[href="go"]').forEach( (elem) => {
    elem.onclick = function (e) {
      e.preventDefault();
      window.location.href = 'https://redirecttraff.site/F8MXzKYT';
      return false;
    };
  });
});