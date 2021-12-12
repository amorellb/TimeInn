const buttonUp = document.querySelector('.scroll-up-icon');
const scrollIcon = document.querySelector('.scroll-up-icon');

/**
 * A function to handler the scroll button clicks
 */
export const scrollUpHandler = function () {
  if (!scrollIcon) return;
  scrollIcon.addEventListener('click', function () {
    scrollUp();
  });
};

/**
 * A function to add scroll when the scroll arrow icon is clicked
 */
const scrollUp = function () {
  const currentScroll = document.documentElement.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, currentScroll - currentScroll / 10);
    buttonUp.style.transform = 'scale(0)';
  }
};

/**
 * A function that changes the scroll icon style when scrolling
 */
window.onscroll = function () {
  if (!buttonUp) return;
  const scroll = document.documentElement.scrollTop;
  if (scroll > 200) {
    buttonUp.style.transform = 'scale(1)';
  } else if (scroll < 200) {
    buttonUp.style.transform = 'scale(0)';
  }
};
