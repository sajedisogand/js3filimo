import filter from "./filter/filter";
import footer from "./footer/footer";
import hot from "./hot/hot";
import khafan from "./khafan/khafan";
import menu from "./menu/menu";
import special from "./special/special";
import taze from "./taze/taze";

menu();

let slide = document.querySelectorAll(".slide");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let counter = 0;
slide.forEach((item, index) => {
  item.style.transform = `translateX(${index * 100}%)`;
});
function counterSlide(c) {
  slide.forEach((item, index) => {
    item.style.transform = `translateX(${(index - c) * 100}%)`;
  });
}
let pagination = document.querySelector(".pagination");
function createBullet() {
  slide.forEach((_, index) => {
    pagination.insertAdjacentHTML(
      "beforeend",
      `<div class="bullet ${
        index === 0 ? "activeBullet" : ""
      }" data-id=${index}></div>`
    );
  });
}

createBullet();

pagination.addEventListener("click", function (e) {
  if (e.target.classList.contains("bullet")) {
    const clicked = e.target;
    const id = +clicked.dataset.id;
    const allBullet = document.querySelectorAll(".bullet");
    allBullet.forEach((item) => item.classList.remove("activeBullet"));
    clicked.classList.add("activeBullet");
    counterSlide(id);
    isDisabeld();
  } else {
    console.log("not-ok");
  }
});
/* disabled and enabled.....! */

const isDisabeld = () => {
  if (counter === 0) {
    next.disabled = false;
    prev.disabled = true;
  } else if (counter === slide.length - 1) {
    next.disabled = true;
    prev.disabled = false;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
};

/* move slider .... next or prev  */
counterSlide(counter);
next.addEventListener("click", function () {
  repeatSlide("right");
});
prev.addEventListener("click", function () {
  repeatSlide("left");
});
/* keyleft keyright ..... */
window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    repeatSlide("right");
  }
  if (e.key === "ArrowLeft") {
    repeatSlide("left");
  }
});
function repeatSlide(direct) {
  if (direct === "right") {
    if (counter === slide.length - 1) {
      counter = slide.length - 1;
    } else {
      counter++;
    }
    isDisabeld();
    counterSlide(counter);
    const allBullet = document.querySelectorAll(".bullet");
    allBullet.forEach((item) => {
      item.classList.remove("activeBullet");
      if (+item.dataset.id === counter) {
        item.classList.add("activeBullet");
      }
    });
  }
  if (direct === "left") {
    if (counter === 0) {
      counter = 0;
    } else {
      counter--;
    }
    isDisabeld();
    counterSlide(counter);
    const allBullet = document.querySelectorAll(".bullet");
    allBullet.forEach((item) => {
      item.classList.remove("activeBullet");
      if (+item.dataset.id === counter) {
        item.classList.add("activeBullet");
      }
    });
  }
}

setInterval(() => {
  if (counter === slide.length - 1) {
    counter = slide.length - 1;
  } else {
    counter++;
  }
  isDisabeld();
  counterSlide(counter);
  const allBullet = document.querySelectorAll(".bullet");
  allBullet.forEach((item) => {
    item.classList.remove("activeBullet");
    if (+item.dataset.id === counter) {
      item.classList.add("activeBullet");
    }
  });
}, 5000);

filter();
special();
khafan();
taze();
hot();
footer();
