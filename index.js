const searchIcon= document.querySelector(".search-icon")
const searchForm = document.querySelector(".search-form")
const menuIcon = document.querySelector(".menuIcon")
const navbar = document.querySelector(".navbar")



 searchIcon.addEventListener("click" , ()=>{
    searchForm.classList.add("active");
    cartItemContainer.classList.remove("active");
    navbar.classList.remove("active");
 });
 
 menuIcon.addEventListener("click" ,()  => {
   navbar.classList.add("active");
   searchForm.classList.remove("active");
   cartItemContainer.classList.remove("active");



 const cartIcon= document.querySelector(".cart-icon")
const cartItemContainer = document.querySelector(".cart-items-container")


 cartIcon.addEventListener("click" , ()=>{
    cartItemContainer.classList.add("active");
    searchForm.classList.remove("active");
   
 })
});
 
