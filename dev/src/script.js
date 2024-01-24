window.onload = () => {
    document.body.style.overflow = 'auto';
    document.querySelector('.preloader').classList.add('preloader--disabled');
}

// if section is in viewport

function isSectionInViewport(section) {
    let viewportTop = window.scrollY;
    let viewportBottom = viewportTop + window.innerHeight;

    let sectionTop = section.offsetTop;
    let sectionBottom = sectionTop + section.offsetHeight;

    return (sectionTop >= viewportTop && sectionTop <= viewportBottom) ||
        (sectionBottom >= viewportTop && sectionBottom <= viewportBottom);
}

// animate section

let animatedSection = document.querySelector('.js-animated-text');
let animatedTextLeft = document.querySelector('.js-to-left');
let animatedTextRight = document.querySelector('.js-to-right');

window.addEventListener('scroll', function () {

    let sectionTop = animatedSection.offsetTop;
    let scrollPosition = window.scrollY;
    let relativeScroll;
    let reverseRelativeScroll;

    if (isSectionInViewport(animatedSection)) {
        if (window.screen.width > 768) {
            relativeScroll = ((scrollPosition - sectionTop) / 1.5) + 300;
            reverseRelativeScroll = -((scrollPosition - sectionTop) / 1.5) - 300;
        } else {
            relativeScroll = ((scrollPosition - sectionTop) / 1.5) + 900;
            reverseRelativeScroll = -((scrollPosition - sectionTop) / 1.5) - 900;
        }

        animatedTextLeft.style.transform = 'translateX(' + reverseRelativeScroll + 'px)';
        animatedTextRight.style.transform = 'translateX(' + relativeScroll + 'px)';
    }
});

document.querySelectorAll('.js-contact-us').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.popup').classList.add('is-active');
        document.querySelector('.overlay').classList.add('is-active');
        document.querySelector('body').style.overflow = 'hidden';
    })
})

document.querySelector('.overlay').addEventListener('click', () => {
    document.querySelector('.popup').classList.remove('is-active');
    document.querySelector('.overlay').classList.remove('is-active');
    document.querySelector('body').style.overflow = 'auto';
});

// document.getElementById('contactForm').addEventListener('submit', function (event) {
//     event.preventDefault();
//     sendEmail();
// });

// function sendEmail() {
//     let params = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         number: document.getElementById('phone').value,
//         message: document.getElementById('message').value,
//     };

//     const serviceID = "service_9t61o06";
//     const templateID = "template_tfb31ug";

//     emailjs.send(serviceID, templateID, params)
//         .then(res => {
//             document.getElementById('name').value = "",
//                 document.getElementById('email').value = "",
//                 document.getElementById('phone').value = "",
//                 document.getElementById('message').value = "",

//                 document.querySelector('.popup').classList.remove('is-active');
//             document.querySelector('.overlay').classList.remove('is-active');
//             document.querySelector('body').style.overflow = 'auto';
//         })
//         .catch(err => console.log(err));
// }

// language

document.querySelectorAll('.js-language-swither').forEach(item => {
    item.addEventListener('click', (event) => {

        document.querySelectorAll('.js-language-swither').forEach(switcher => {
            switcher.classList.remove('header__language-switcher--current');
        });

        setTimeout(() => {
            switchLanguage(window.location.hash.substring(1));
        }, 10);

        event.target.classList.add('header__language-switcher--current');
    })
})

let currentLanguage = 'en';

function switchLanguage(language) {
    currentLanguage = language;
    loadTranslations();
}

function loadTranslations() {
    const languageScript = document.getElementById(`${currentLanguage}-language`);
    fetch(languageScript.src)
        .then(response => response.json())
        .then(translations => {
            const elements = document.querySelectorAll('[data-translate]');

            elements.forEach(element => {
                const translationKey = element.dataset.translate;
                const keys = translationKey.split('.');

                let value = translations;
                keys.forEach(key => {
                    value = value[key];
                });

                if (element.tagName == "INPUT" || element.tagName == "TEXTAREA") {
                    element.placeholder = value || '';
                } else {
                    element.innerHTML = value || '';
                }
            });
        });
}

document.addEventListener('DOMContentLoaded', loadTranslations);

// text animation

function reveal() {
    document.querySelectorAll(".js-animation").forEach(item => {
        var windowHeight = window.innerHeight;
        var elementTop = item.getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", reveal);
