// 3) УМОВА
// Зробити фіксований скрол на сторінці для менюшки,тобто , щоб наше меню фіксувалось зверху браузера при скролі, для того потрібно порахувати висоту хедера, відстежуємо позицію скролу та додавати клас fixed-nav якщо скрол більше висоту хедера, в іншому випадку його видаляємо

// const header = document.querySelector(".header");
// const navBar = document.querySelector(".nav");

// const headerHeight = header.clientHeight;

// function onScroll() {
//   if (pageYOffset > headerHeight) {
//     navBar.classList.add("fixed-nav");
//   } else {
//     navBar.classList.remove("fixed-nav");
//   }
// }

// window.addEventListener("scroll", onScroll);
