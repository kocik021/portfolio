// BURGER

const burger = document.querySelector("nav.burger-side-menu");
const ico = document.querySelector(".burger-ico i");

// Buttons

const jk = document.querySelector(".JK");
const aboutBtn = document.querySelector(".dot-about");
const projectsBtn = document.querySelector(".dot-projects");
const contactBtn = document.querySelector(".dot-contact");
const burgerIco = document.querySelector(".burger-ico");

// burger buttons

const jkb = document.querySelector(".JK-b");
const aboutBtnb = document.querySelector(".dot-about-b");
const projectsBtnb = document.querySelector(".dot-projects-b");
const contactBtnb = document.querySelector(".dot-contact-b");

// Sections

const face = document.querySelector(".face");
const body = document.querySelector("body");
const about = document.querySelector(".about-me");
const projects = document.querySelector(".projects");
const contact = document.querySelector(".contact");

jk.addEventListener("click", function() {
  face.scrollIntoView({ behavior: "smooth" });
});
aboutBtn.addEventListener("click", function() {
  about.scrollIntoView({ behavior: "smooth" });
});
projectsBtn.addEventListener("click", function() {
  projects.scrollIntoView({ behavior: "smooth" });
});
contactBtn.addEventListener("click", function() {
  contact.scrollIntoView({ behavior: "smooth" });
});

jkb.addEventListener("click", function() {
  face.scrollIntoView({ behavior: "smooth" });
});
aboutBtnb.addEventListener("click", function() {
  about.scrollIntoView({ behavior: "smooth" });
});
projectsBtnb.addEventListener("click", function() {
  projects.scrollIntoView({ behavior: "smooth" });
});
contactBtnb.addEventListener("click", function() {
  contact.scrollIntoView({ behavior: "smooth" });
});

function animations() {
  const scrollInt = window.scrollY;
  if (scrollInt >= 570) {
    console.log(scrollInt);
    about.classList.add("show");
  }
  if (scrollInt >= 1200) {
    projects.classList.add("show");
  }
  if (scrollInt >= 1700) {
    contact.classList.add("show");
  }
}
window.addEventListener("scroll", animations);

burgerIco.addEventListener("click", function() {
  burger.classList.toggle("show");
  ico.classList.toggle("fa-bars");
  ico.classList.toggle("fa-times");
});
