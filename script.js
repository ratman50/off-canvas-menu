const openMenu=document.querySelector(".menu__button_open");
console.log(openMenu)
const contentMenu=document.querySelector(".menu__content");
const main=document.querySelector(".main");
openMenu.addEventListener("click",()=>{
    contentMenu.classList.toggle("menu__content_active");
    main.classList.toggle("main_active")
})