export const initFadeInObserver = (): void => {
    const fadeInOnScroll: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('viewed');
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
    };
  
    const observer: IntersectionObserver = new IntersectionObserver(fadeInOnScroll, observerOptions);
  
    const fadeInElements: NodeListOf<Element> = document.querySelectorAll('.watch-scroll');
    fadeInElements.forEach(el => observer.observe(el as HTMLElement));
};

export const initTopObserver = (): void => {
  const navbar = document.querySelector('.watch-top');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY < 50) {
      // Scrollbar is at the top of the page
      navbar.classList.add('is-top');
    } else {
      // Scrollbar is not at the top
      navbar.classList.remove('is-top');
    }
  };

  // Initial check in case the page starts at the top
  onScroll();

  // Listen for scroll events
  window.addEventListener('scroll', onScroll);
};

  
  // Initialize the observer when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initFadeInObserver();
    initTopObserver();
});