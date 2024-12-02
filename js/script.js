document.addEventListener('click', function(e) {
    let menuBtn = document.querySelector('.menu-btn');
    let menu = document.querySelector('.menu');
    if(e.target.closest('.menu-btn')) {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    } else if (menu.closest('.active') && !e.target.closest('.menu-row') && menuBtn.closest('.active') || e.target.closest('.header-link') && menu.closest('.active')) {
        menuBtn.classList.remove('active');
        menu.classList.remove('active');
    }
    if(e.target.closest('.cookies-btn')) {
        document.querySelector('.cookies').style.display = 'none'
    }
})

document.querySelectorAll('._link').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
  });
});
setTimeout(() => {
  document.querySelector('.cookies').style.display = 'block'
}, 1000);
