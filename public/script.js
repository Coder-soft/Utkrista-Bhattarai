const input=document.getElementById('input');
const root=document.documentElement;
const theme=localStorage.getItem('theme')||'light';
root.setAttribute('data-theme',theme);
input.checked=theme==='dark';
input.addEventListener('change',()=>{const t=input.checked?'dark':'light';root.setAttribute('data-theme',t);localStorage.setItem('theme',t)});