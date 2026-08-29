import { useEffect } from "react";

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".hero, .section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    elements.forEach((element) => {
      element.classList.add("reveal");
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}

export default useScrollReveal;