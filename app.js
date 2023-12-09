const work = new Work();
// About me script
const skillsTab = document.querySelector('.skills-tab');
const experienceTab = document.querySelector('.experience-tab');
const educationTab = document.querySelector('.education-tab');

const skillsContent = document.getElementById('skills')
const experienceContent = document.getElementById('experience')
const educationContent = document.getElementById('education')

// add eventListeners
skillsTab.addEventListener('click', showSkills);
experienceTab.addEventListener('click', showExperience);
educationTab.addEventListener('click', showEducation);

function showSkills(){
    skillsTab.classList.add('active-link');
    experienceTab.classList.remove('active-link');
    educationTab.classList.remove('active-link');

    skillsContent.classList.add('show');
    experienceContent.classList.remove('show');
    educationContent.classList.remove('show');
}
function showExperience(){
    skillsTab.classList.remove('active-link');
    experienceTab.classList.add('active-link');
    educationTab.classList.remove('active-link');

    skillsContent.classList.remove('show');
    experienceContent.classList.add('show');
    educationContent.classList.remove('show');
}
function showEducation(){
    skillsTab.classList.remove('active-link');
    experienceTab.classList.remove('active-link');
    educationTab.classList.add('active-link');

    skillsContent.classList.remove('show');
    experienceContent.classList.remove('show');
    educationContent.classList.add('show');
}

// Hamurger menu 
const hamBurger = document.querySelector('.fa-bars');
console.log(hamBurger);
const menu = document.querySelector('.menu');
const closeIcon = document.querySelector('.fa-times');
// show menu
// document.getElementById('hbgers').addEventListener('click', (e)=>{
//     menu.style.right = 0;
// })
hamBurger.addEventListener('click', function(){
    menu.style.right = 0;
    closeIcon.classList.add('active');
})
// hide menu
closeIcon.addEventListener('click', function(){
    closeIcon.classList.remove('active');
    menu.style.right = "-50vw";
})

// form validation with regular expressions
const nameInput = document.querySelector('[name="name"]');
const emailInput = document.querySelector('[name="email"]');
const messageInput = document.querySelector('[name="message"]');

nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
messageInput.addEventListener('blur', validateMessage);

function validateName(e) {
    const nameDiv = document.querySelector('.nameInput')
    const name =  e.target.value;
    const re = /^[a-zA-Z\s]{2,20}$/i

    if(re.test(name)){
        nameDiv.classList.remove('nameErr');
    } else {
        nameDiv.classList.add('nameErr');
    }

}
function validateEmail(e) {
    const emailDiv = document.querySelector('.emailInput')
    const name =  e.target.value;
    const re = /^([a-zA-Z0-9\.\_\-]+)@([a-zA-Z0-9\.\_\-]+)\.([a-zA-Z]{2,5})$/

    if(re.test(name)){
        emailDiv.classList.remove('emailErr');
    } else {
        emailDiv.classList.add('emailErr');
    }
    
}
function validateMessage(e) {
    const messageDiv = document.querySelector('.messageInput')
    const name =  e.target.value;
    const re = /^(\w*\W*){0,250}$/
          ///^(?:\b\w+\b[\s\r\n]*){10,250}$/
          ///^[\w\W\d\D\s\S]{10,200}$/


    if(re.test(name)){
        messageDiv.classList.remove('messageErr');
    } else {
        messageDiv.classList.add('messageErr');
    }
}

// Sticky navbar background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        this.document.querySelector('.nav-bar').style.opacity = 0.9;
    } else {
        this.document.querySelector('.nav-bar').style.opacity = 1;
    }
});

// Smooth scrolling
$('.nav-bar a').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 80
            },
            800
        );
    }
});

$(document).ready(function () {
    $(".btn2").click(function () {
        $(".btn2").attr("disabled", false);
        return true;
    });
});

/* // LightMode/DarkMode
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const body = document.getElementById('home');

sun.addEventListener('click', lightTheme);
moon.addEventListener('click', darkTheme);

function darkTheme() {
    body.classList.remove('light-mode');
    sun.classList.remove('hide');
    moon.classList.add('hide');
}

function lightTheme() {
    body.classList.add('light-mode');
    sun.classList.add('hide');
    moon.classList.remove('hide');
} */