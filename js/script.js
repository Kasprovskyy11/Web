const nav = document.querySelector(".navbar");
const navBarToggler = document.querySelector(".navbar-toggler");

let containsShadow = false;

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