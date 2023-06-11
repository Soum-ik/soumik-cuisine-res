const nav__iconEL = document.querySelector(".nav__icon");
const nav__closeEL = document.querySelector(".nav__close");
const nav__listEL = document.querySelector(".nav__list");
const nav__bgOberlay = document.querySelector(".nav__bgOberlay");

const navOpen = () => {
  nav__listEL.classList.add("show");
  nav__bgOberlay.classList.add("active");
  document.body.style = `visibility : visible; height : 100vh; width : 100vw ; overflow-x: hidden`;
};



const navClose = () => {
    nav__listEL.classList.remove("show");
    nav__bgOberlay.classList.remove("active");
    document.body.style = `visibility : visible; height :inherit ; width : inherit ; overflow-x: hidden`;
};

nav__iconEL.addEventListener('click', navOpen);
nav__closeEL.addEventListener('click', navClose);
nav__bgOberlay.addEventListener('click', navClose);

//aos 

AOS.init({
  offset: 100,
  delay: 100,
  easing: 'ease',
  duration: 400,
  once: false,
  mirror : false,
  anchorPlacement : 'top-bottom'
})