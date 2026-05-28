document.querySelectorAll('.faq-q').forEach((btn)=>{
  btn.addEventListener('click',()=>{
    const open=btn.getAttribute('aria-expanded')==='true';
    document.querySelectorAll('.faq-q').forEach((item)=>item.setAttribute('aria-expanded','false'));
    btn.setAttribute('aria-expanded', String(!open));
  });
});

document.querySelectorAll('[data-plan]').forEach((link)=>{
  link.addEventListener('click',()=>{
    try{ localStorage.setItem('zayaSelectedPlan', link.dataset.plan); }catch(e){}
  });
});

const header=document.querySelector('[data-header]');
const onScroll=()=>{ header?.classList.toggle('is-scrolled', window.scrollY>12); };
onScroll();
window.addEventListener('scroll', onScroll, {passive:true});
