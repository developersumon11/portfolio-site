var typed = new Typed(".typing",{
    strings: ["Web Designer", "Web Developer", "Youtuber", "Blogger"],
    typeSpeed: 80,
    backSpeed: 80
});
var typed = new Typed(".typing-2",{
    strings: ["Web Designer", "Web Developer", "Youtuber", "Blogger"],
    typeSpeed: 80,
    backSpeed: 80
});

// showing/hide FAQs 

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');
    });

    // const icon = faq.querySelector('.faq-icon i');
    // if(icon.className === 'fa-solid fa-plus'){
    //     icon.className = 'fa-solid fa-minus';
    // }else{
    //     icon.className = 'fa-solid fa-plus';
    // }

});



// show/hide nav menu

const menu = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');


menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
})

closeBtn.addEventListener('click' , () =>{
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
})