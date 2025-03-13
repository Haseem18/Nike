const mainElement = document.querySelector('main');
const headerElement = document.querySelector('header');
const sidebarElement = document.querySelector('.navbar_1 ul');
const menuElement = document.querySelector('.menu');
const crossElement = document.querySelector('.cross');
const heroSectionElement = document.querySelector('#hero_section');
const screenWidth = parseFloat(window.innerWidth);
const headerHeight = parseFloat(getComputedStyle(headerElement).height);
const productContainerElement = document.querySelector('.product_container');
const rightBtnElement = document.querySelector('.right_btn');
const leftBtnElement = document.querySelector('.left_btn');
const productElement = document.querySelector('.product');
const productWidth = parseFloat(getComputedStyle(productElement).width);

mainElement.style.top = `${headerHeight}px`;

if (screenWidth <= 600) {
  sidebarElement.style.height = `calc(100vh - ${headerHeight}px)`;
  sidebarElement.style.top = `${headerHeight}px`;
  sidebarElement.style.left = "-400px";
  
  menuElement.addEventListener("click", () => {
    sidebarElement.style.left = "0px";
    menuElement.style.display = "none";
    crossElement.classList.remove("hidden");
  });
  
  crossElement.addEventListener("click", () => {
    sidebarElement.style.left = "-400px";
    crossElement.classList.add("hidden");
    menuElement.style.display = "block";
  });
  
  heroSectionElement.style.height = `calc(100vh - ${headerHeight}px)`;
}

rightBtnElement.addEventListener("click", () => {
  productContainerElement.scrollBy({ left: productWidth + parseFloat(getComputedStyle(productContainerElement).gap), behavior: "smooth"})
});

leftBtnElement.addEventListener("click", () => {
  productContainerElement.scrollBy({ left: -(productWidth + parseFloat(getComputedStyle(productContainerElement).gap)), behavior: "smooth" })
})
