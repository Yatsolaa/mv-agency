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