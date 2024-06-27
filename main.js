document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".header__menu-link");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const numbers = document.querySelectorAll(".number");

  function startNumberAnimations() {
    numbers.forEach((number) => {
      const targetValue = parseInt(number.getAttribute("data-target"), 10);

      anime({
        targets: number,
        innerHTML: [0, targetValue],
        easing: "linear",
        round: 1,
        duration: 1500,
        update: function (anim) {
          number.innerHTML = Math.round(anim.animations[0].currentValue);
        },
      });
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startNumberAnimations();
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  const statsBlock = document.querySelector(".stats");
  if (statsBlock) {
    observer.observe(statsBlock);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const background = document.getElementById("background");

  for (let i = 0; i < 15; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");

    const diameter = Math.random() * 100 + 50;
    circle.style.width = `${diameter}px`;
    circle.style.height = `${diameter}px`;

    const positionX = Math.random() * (window.innerWidth - diameter);
    const positionY = Math.random() * (window.innerHeight - diameter);
    circle.style.top = `${positionY}px`;
    circle.style.left = `${positionX}px`;

    background.appendChild(circle);
  }

  const circles = document.querySelectorAll(".circle");
  circles.forEach((circle) => {
    anime({
      targets: circle,
      translateX: () =>
        Math.random() * window.innerWidth - window.innerWidth / 2,
      translateY: () =>
        Math.random() * window.innerHeight - window.innerHeight / 2,
      scale: () => Math.random() * 2,
      duration: () => Math.random() * 6000 + 6000,
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
    });
  });
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header__menu");

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
})

document.querySelectorAll('.header__menu-link').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}))