// const slides = document.querySelectorAll(".slide");
// const btnLeft = document.querySelector(".btn--left");
// const btnRight = document.querySelector(".btn--right");
// const dotContainer = document.querySelector(".dots");

// let curSlide = 0;
// const maxSlide = slides.length;

// const createDots = function () {
//   slides.forEach(function (_, i) {
//     dotContainer.insertAdjacentHTML(
//       "beforeend",
//       `<button class="dots__dot" data-slide="${i}"></button>`
//     );
//   });
// };
// createDots();

// const activeDot = function (slide) {
//   document
//     .querySelectorAll(".dots__dot")
//     .forEach((dot) => dot.classList.remove("dots__dot--active"));

//   document
//     .querySelector(`.dots__dot[data-slide="${slide}"]`)
//     .classList.add("dots__dot--active");
// };
// activeDot(0);
// const goToSlide = function (slide) {
//   slides.forEach(
//     (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
//   );
// };
// goToSlide(0);

// const nextSlide = function () {
//   if (curSlide === maxSlide - 1) {
//     curSlide = 0;
//   } else {
//     curSlide++;
//   }

//   goToSlide(curSlide);
//   activeDot(curSlide);
// };

// const prevSlide = function () {
//   if (curSlide === 0) {
//     curSlide = maxSlide - 1;
//   } else {
//     curSlide--;
//   }
//   goToSlide(curSlide);
//   activeDot(curSlide);
// };

// btnRight.addEventListener("click", nextSlide);
// btnLeft.addEventListener("click", prevSlide);

// document.addEventListener("keydown", function (e) {
//   if (e.key === "ArrowLeft") prevSlide();
//   e.key === "ArrowRight" && nextSlide();
// });

// dotContainer.addEventListener("click", function (e) {
//   if (e.target.classList.contains("dots__dot")) {
//     const { slide } = e.target.dataset;
//     goToSlide(slide);
//     activeDot(slide);
//   }
// });

// Refactor codes
// Slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".btn--left");
  const btnRight = document.querySelector(".btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activeDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activeDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activeDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activeDot(0);
  };
  init();

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activeDot(slide);
    }
  });
};
slider();
