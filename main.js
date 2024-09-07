const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close"),
      navLinks = document.querySelectorAll('.nav__link');

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    });
}

if(navClose){
    navClose.addEventListener('click',()=>{ 
        navMenu.classList.remove('show-menu');
    });
}

navLinks.forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
}));

const blurHeader = () => {
    const header = document.getElementById('header');
    window.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
};

window.addEventListener('scroll', blurHeader);

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    window.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
};
window.addEventListener('scroll', scrollActive);

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: '2500',
    delay: '300'
});

sr.reveal('.home_img, .new__data, .care_img, .contact_content, .footer');
sr.reveal('.home_data, .care_list, .contact_img', { delay: 500 });
sr.reveal('.new_card', { delay: 500, interval: 100 });
sr.reveal('.shop_card', { interval: 100 });

var icon =document.getElementById("icon2")
icon.onclick=function(){
	document.body.classList.toggle("dark-theme");
	// if(	document.body.classList.toggle("dark-theme")){
	// 	icon.src="./assests/sun.png"
	// }
	// else{
	// 	icon.src="./assests/sun.png"
	// }
}