const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container img", {
  duration: 1000,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

// about contsiner
ScrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about__content h3", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {  //agar yha se mai .about mein se . hata du wo content scroll hoga hi nhi upar 
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".about__.content .section__subheader", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".about__content .about__grid", {
    ...scrollRevealOption,
    delay: 2000, //jitna jyda number utna jyda delay time mein
});

// contact container
ScrollReveal().reveal(".contact__image img", {
  ...scrollRevealOption,
  origin: "left",
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 25,
});