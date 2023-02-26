
// Створіть карточки товару з масиву використовуючи createElement

// import cars from './date/cars.js';

// const ulEl = document.querySelector('.js-goods');

// const addNewCarEl = ({name, img, price, description})  => {

//     const carsLi = document.createElement('li');

//     const carsTitle = document.createElement('h2');
//     carsTitle.textContent = name;

//     const carsImg = document.createElement('img');
//     carsImg.src = img;
//     carsImg.alt = name;
//     carsImg.width = 300;

//     const carsPrice = document.createElement('p');
//     carsPrice.textContent = price;

//     const carsDescription = document.createElement('p');
//     carsDescription.textContent = description;

//     carsLi.append(carsTitle, carsImg, carsPrice, carsDescription);

//     return carsLi;
// }

// const newCarEl = cars.map(addNewCarEl);
// console.log(newCarEl);

// ulEl.append(...newCarEl);

// console.log(ulEl);



// ЗАДАЧА 2
// 2.1НАПИШІТЬ КАЛЬКУЛЯТОР, ЯКИЙ БУДЕ РАХУВАТИ ЦІНУ ШАШЛИКА, В ЗАЛЕЖНОСТІ ВІД ЦІНИ ЗА КІЛОГРАМ І КІЛЬКОСТІ КУПЛЕНОГО ПРОДУКТА , І БУДЕ ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН,
// html/

// const refs = {
//     priceEl: document.querySelector("#price"),
//     quanlityEl: document.querySelector("#quantity"),
//     totalEl: document.querySelector(".total"),
//     formEl: document.querySelector(".form"),
//     amountEl: document.querySelector(".amount"),
//     containerEl: document.querySelector(".container"),
// }
// //console.log(refs);
// function calculator(e) {
//     e.preventDefault();
//     const price = refs.priceEl.value;
//     const quanlity = refs.quanlityEl.value;
//     const total = price * quanlity;
//     refs.totalEl.textContent = total;
//     refs.amountEl.textContent = quanlity;
//     //return total;
// };

// window.addEventListener("DOMContentLoaded", calculator);
// refs.formEl.addEventListener("submit", calculator);

//  //2.2 ПЕРЕПИШІТЬ КОД , ЩОБ ЗНАЧЕННЯ МИ ОТРИМУВАЛИ ПО КЛІЦІ НА КНОПКУ , 
//  //ПРИ НАЖАТТІ ЯКОГО БУДЕ ВАМ РАХУВАТИ ТА ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН < button class="btn" > Calculate</ >  

// function change() {
//     const price = refs.priceEl.value;
//     const quanlity = refs.quanlityEl.value;
//     refs.amountEl.textContent = quanlity;
// }
// refs.quanlityEl.addEventListener("input", change);

// //2.3 НАПИШІТЬ  РАНДОМНИЙ КОЛІР ДЛЯ НАШОЇ ФОРМИ КОЛЬКУЛЯТОРА
// // ЗА ДОПОМОГОЮ ІНЛАЙНОВОГО СТИЛЮ

// const randomRgbColor = () => {
//   const r = Math.round(Math.random() * (255 - 1) + 1);
//   const g = Math.round(Math.random() * (255 - 1) + 1);
//   const b = Math.round(Math.random() * (255 - 1) + 1);
//   return `rgb(${r},${g},${b})`;
// };

//refs.containerEl.style.backgroundColor = randomRgbColor();