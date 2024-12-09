const nav = document.querySelector(".navbar");
const navBarToggler = document.querySelector(".navbar-toggler");
const navLinks = document.querySelectorAll('.nav-link');
const navBarCollapse = document.querySelector('.collapse');

let containsShadow = false;

navLinks.forEach(link=>{
    link.addEventListener('click', ()=>{
        navLinks.forEach(navLink => navLink.classList.remove('active'));

        link.classList.add('active');
        navBarCollapse.classList.toggle('show');
    })
});

navBarToggler.addEventListener('click', ()=>{
    if(containsShadow==false)
    {
        addShadow();
        containsShadow = true;
    }
    else 
    {
        removeShadow();
        containsShadow = false;
    }

})

document.addEventListener("DOMContentLoaded", ()=>{    

window.addEventListener('scroll', ()=>{
        if(window.scrollY >= 100)
        {
            addShadow();
        }
        else 
        {
            removeShadow();
        }
});

});

function addShadow(){
    nav.classList.add("shadow-bg");
}
function removeShadow(){
    nav.classList.remove("shadow-bg");
}