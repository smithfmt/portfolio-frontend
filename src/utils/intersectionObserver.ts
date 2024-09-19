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
  
  // Initialize the observer when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initFadeInObserver();
});