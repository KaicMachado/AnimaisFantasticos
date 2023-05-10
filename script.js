function initTabNav() {
 const tabMenu = document.querySelectorAll(".js-tabmenu li");
 const tabContent = document.querySelectorAll(".js-tabcontent section");

 if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add("ativo");

  function activeTab(index) {
   tabContent.forEach((section) => {
    section.classList.remove("ativo");
   });
   tabContent[index].classList.add("ativo");
  }

  tabMenu.forEach((itemMenu, index) => {
   itemMenu.addEventListener("click", () => {
    activeTab(index);
   });
  });
 }
}
initTabNav();

function initAccordion() {
 const accordionLista = document.querySelectorAll(".js-accordion dt");
 const activeClass = "ativo";
 if (accordionLista.length) {
  accordionLista[0].classList.add(activeClass);
  accordionLista[0].nextElementSibling.classList.add(activeClass);

  function activeAccordion() {
   this.classList.toggle(activeClass);
   this.nextElementSibling.classList.toggle(activeClass);
  }

  accordionLista.forEach((item) => {
   item.addEventListener("click", activeAccordion);
  });
 }
}
initAccordion();

function initScrollSuave() {
 const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

 function scrollToSection(e) {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  section.scrollIntoView({
   behavior: "smooth",
   block: "start",
  });

  // forma alternativa de scroll suave
  //  const topo = section.offsetTop;
  //  window.scrollTo({
  //   top: topo,
  //   behavior: "smooth",
  //  });
 }

 linksInternos.forEach((link) => {
  link.addEventListener("click", scrollToSection);
 });
}
initScrollSuave();

function initAnimacaoScroll() {
 const sections = document.querySelectorAll(".js-scroll");
 if (sections.length) {
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
   sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - windowMetade < 0;
    if (isSectionVisible) {
     section.classList.add("ativo");
    }
   });
  }
  window.addEventListener("scroll", animaScroll);
 }
}

initAnimacaoScroll();
