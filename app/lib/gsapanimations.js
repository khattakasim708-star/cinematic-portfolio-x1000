import gsap from "gsap";

export const fadeIn = (elem) => {
  gsap.fromTo(elem, { opacity: 0 }, { opacity: 1, duration: 1 });
};
