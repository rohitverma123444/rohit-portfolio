// Small JS for menu, form and year
(function(){
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  // Mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  if(menuBtn){
    menuBtn.addEventListener('click', ()=>{
      if(navLinks.style.display === 'flex') navLinks.style.display = 'none';
      else navLinks.style.display = 'flex';
    });
  }

  // fake contact submit (demo)
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = form.name.value.trim();
      msg.textContent = `Thanks ${name || ''}! Your message was received (demo). I will contact you soon.`;
      form.reset();
      setTimeout(()=> msg.textContent = '', 7000);
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });
})();
