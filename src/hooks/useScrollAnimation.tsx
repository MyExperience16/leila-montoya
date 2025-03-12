
import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,  // Trigger when 10% of the element is visible
      rootMargin: '0px 0px -100px 0px'  // Trigger slightly before elements enter the viewport
    });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        animatedElements.forEach((el) => observerRef.current?.unobserve(el));
      }
    };
  }, []);

  return null;
};

export default useScrollAnimation;
