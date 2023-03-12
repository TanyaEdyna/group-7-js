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

// ЗАДАЧА 3
// 3.1 Є МАСИВ, ПОТРІБНО СТВОРИТИ РОЗМІТКУ ІЗ ТИХ КАРТОК через

// const instruments = [{
//   id: 1,
//   img: "https://content.rozetka.com.ua/goods/images/big/13664457.jpg",
//   name: "Молоток",
//   price: 150
// },
// {
//   id: 2,
//   img: "https://machtz.com.ua/files/resized/products/dsc_2898_new.800x550.jpg",
//   name: "Перфоратор",
//   price: 3000
// },{
//   id: 3,
//   img: "https://content2.rozetka.com.ua/goods/images/big_tile/232653359.jpg",
//   name: "Рівень",
//   price: 2000
// }]

// const cardEl = document.querySelector('.js-list');

// function makeInstrumentsArray () {
// const instr = instruments.map(({id, img, name, price}) => {
//     return `
//     <li data-id="${id}">
//     <img src="${img}" alt="${name}" width='300'>
//     <h2>${name}</h2>
//     <p>${price}</p>
//     </li>
//     `
// }).join(' ');
// cardEl.insertAdjacentHTML('beforeend', instr)
// };
// makeInstrumentsArray();

//3.2 ДОБАВТЕ КНОПКУ, ЧЕРЕЗ ЯКУ МИ КУПЛЯТИМЕМО ТОВАР

// ЗАДАЧА 4
// ПОТРІБНО СТВОРИТИ Ф-ЦІЮ , ЯКА БУДЕ ШУКАТИ НАРЦИСА.ГОЛОВНА УМОВА НАРЦИСА ЗНАЮТЬ УСІ , НАРЦИС НЕ ЗНАЄ НІКОГО
// є елемент масиву , який незнає нікого
// якщо не одна така людина , то вертаємо not found
// якщо один , то перевірити , чи його знають усі люди, якщо так то вертаємо found

const people1 = [
  { name: "Alex", know: ["Eva", "Jhon"] },
  { name: "Ivan", know: ["Jhon", "Alex"] },
  { name: "Eva", know: ["Alex", "Jhon"] },
  { name: "Jhon", know: [] },
];
const people2 = [
  { name: "Alex", know: ["Eva", "Jhon"] },
  { name: "Jhon", know: ["Eva"] },
  { name: "Eva", know: [] },
  // { name: "Sasha", know: [] },
  { name: "Ivan", know: ["Jhon", "Alex"] },
];
const people3 = [
  { name: "Alex", know: ["Eva", "Jhon"] },
  { name: "Jhon", know: [] },
  { name: "Eva", know: ["Alex", "Jhon"] },
  { name: "Ivan", know: ["Jhon", "Alex"] },
];

// function foundingNarciss(array) {
//   //Шукаємо скількі елементів не знає нікого:
//   const notKnowAnyone = array
//     .map((item) => item.know)
//     .filter((item) => item.length === 0).length;
//   // console.log(notKnowAnyone);

//   // якщо не одна така людина , то вертаємо not found (по умові задачі)
//   if (notKnowAnyone !== 1) {
//     return "not found. Нарциса не знайдено";
//   }

//   // якщо один , то перевірити , чи його знають усі люди, якщо так то вертаємо found

//   //шукаємо ім'я яке мають знати всі люди
//   const notKnowAnyoneName =
//     array[array.map((item) => item.know).findIndex((item) => item.length === 0)]
//       .name;
//   // console.log(notKnowAnyoneName);

//   // забираємо його з масиву (робимо новий масив без нього)
//   const arrayWithoutNotKnowAnyoneName = array.filter(
//     (item) => item.name !== notKnowAnyoneName
//   );
//   // console.log(arrayWithoutNotKnowAnyoneName);

//   // перевіряємо чи його всі знають
//   const isNarciss = arrayWithoutNotKnowAnyoneName.every((item) =>
//     item.know.some((name) => name === notKnowAnyoneName)
//   );
//   // console.log(isNarciss);

//   //повертаємо результат
//   if (isNarciss) {
//     // console.log('found');
//     return `found: ${notKnowAnyoneName} НАРЦИС. ${notKnowAnyoneName} ЗНАЮТЬ УСІ , ${notKnowAnyoneName} НЕ ЗНАЄ НІКОГО`;
//   }
//   return `found: ${notKnowAnyoneName} не НАРЦИС. ${notKnowAnyoneName} ЗНАЮТЬ не УСІ`;
// }

// console.log(foundingNarciss(people1));
// console.log(foundingNarciss(people2));
// console.log(foundingNarciss(people3));

function findNarcissus(arr) {
  const newArray = [...arr];
  console.log(newArray)
  const egoist = newArray.findIndex((el) => el.know.length === 0);
  console.log(egoist)

  const item = newArray.splice(egoist, 1)[0].name;
  console.log(item)

  const men = newArray.every((el) => el.know.some((el) => el === item));
  console.log(men)

  if (men) {
    return `found. His name ${item}`;
  }

  return "not found";
}

console.log(findNarcissus(people1));

console.log([...people1]);
// console.log(findNarcissus(people2));
// console.log(findNarcissus(people3));
