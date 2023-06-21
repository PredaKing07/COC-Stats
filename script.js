let menu = document.querySelector('#menu-icon');
let navigationlist=document.querySelector('.navigationlist');

menu.onclick=() =>{
    menu.classList.toggle('bx-x');
    navigationlist.classList.toggle('open');
};
const sr= ScrollReveal ({
    distance: '65px',
    duration:2600,
    delay:450,
    reset:true
});
sr.reveal('.hero-text',{delay:200,origin:'top'});
sr.reveal('.about-text',{delay:200,origin:'top'});
sr.reveal('.hero-img',{delay:450,origin:'top'});
sr.reveal('.icons',{delay:500,origin:'left'});
sr.reveal('.scroll-down',{delay:500,origin:'right'});