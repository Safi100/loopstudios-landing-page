const nav = document.querySelector("#nav");
const hamburger = document.querySelector("#menu");

hamburger.addEventListener("click",()=>{
    nav.classList.toggle('show_menu');
    hamburger.classList.toggle('show_menu');
    document.body.classList.toggle("over_flow_hidden");

})