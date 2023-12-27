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
        relativeScroll = (scrollPosition - sectionTop) + 800;
        reverseRelativeScroll = -(scrollPosition - sectionTop) - 800;

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

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    sendEmail();
});

function sendEmail() {
    const recipient = document.getElementById('email').value;
    const subject = document.getElementById('name').value;

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}`;

    window.location.href = mailtoLink;
}