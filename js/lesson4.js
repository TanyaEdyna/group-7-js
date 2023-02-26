
// Створіть карточки товару з масиву використовуючи createElement

import cars from './date/cars.js';

const ulEl = document.querySelector('.js-goods');

const addNewCarEl = ({name, img, price, description})  => {

    const carsLi = document.createElement('li');

    const carsTitle = document.createElement('h2');
    carsTitle.textContent = name;

    const carsImg = document.createElement('img');
    carsImg.src = img;
    carsImg.alt = name;
    carsImg.width = 300;

    const carsPrice = document.createElement('p');
    carsPrice.textContent = price;

    const carsDescription = document.createElement('p');
    carsDescription.textContent = description;

    carsLi.append(carsTitle, carsImg, carsPrice, carsDescription);

    return carsLi;
}

const newCarEl = cars.map(addNewCarEl);
console.log(newCarEl);

ulEl.append(...newCarEl);

console.log(ulEl);