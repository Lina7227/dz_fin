var swiper = new Swiper('.swiper-container', {
    cssMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
  });
  
let burger = document.querySelector(".burger");
let nav = document.querySelector(".nav_mobile");
burger.onclick = () => {
    if (nav.style.display == "flex") {
        nav.style.display = "none";
    } 
    else {
        nav.style.display = "flex";
    }
};