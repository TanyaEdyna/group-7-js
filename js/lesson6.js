// ЗАДАЧА 1
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ https://pixabay.com/api/docs/ ,
// ТА ЗА ДОПОМОГОЮ fetch , ВИВЕДИ НА ЕКРАН ОТРИМАНИЙ РЕЗУЛЬТАТ (ВИКОРИСТАЙ МЕТОД createElement())

// fetch(
//   "https://pixabay.com/api/?key=34744066-258cb09888b79ff1454a5a6f0&image_type=photo&category=industry&q=cats"
// )
//   .then((res) => res.json())
//   .then((data) => galleryMarkup(data.hits))
//   .catch((err) => console.log(err));

// function markup(el) {
//   const img = document.createElement('img');
//   img.src = el.webformatURL;
//   img.width = 250;
//   gallery.appendChild(img);
// }

// const gallery = document.querySelector('.gallery-js');

// function galleryMarkup(elements) {
//   for (const el of elements) {
//   markup(el)
// }
// }

// ЗАДАЧА 2
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ  https://www.thecocktaildb.com/api.php , ТА ЗА ДОПОМОГОЮ fetch, ВИВОДЬ РЕЗУЛЬТАТ НА ЕКРАН.
// РЕЗУЛЬТАТ ПОШУКУ МОЖНА ОТРИМАТИ ІЗ ІМПУТА, КОЛИ КЛІЄНТ НАБРАВ ДАНИЙ ТОВАР(ВИКОРИСТАЙ РОЗМІТКУ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА)

  // <div id='root'>
  //   <form id='form'>
  //       <input type="text" id="input">
  //     <button>Пошук</button>
  //   </form>
  // </div>

  
 
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const coctail = document.querySelector('.coctail');

function inputCoctail (e) {
e.preventDefault();

const coctailEl = input.value;
console.log(coctailEl)
fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${coctailEl}`)
.then(res => res.json())
.then(data => 
  coctailCards(data.drinks)
)
.catch(err => console.log(err))
  
}

form.addEventListener('submit', inputCoctail);

function coctailCerd ({strDrink, strDrinkThumb}) {
  const card = `
  <div>
    <h2>Назва:${strDrink}</h2>
    <img src="${strDrinkThumb}" alt="${strDrink}">
  </div>
  `
coctail.insertAdjacentHTML("beforeend", card)
}

function coctailCards (array) {
  array.forEach(element => 
    coctailCerd(element) 
  ); 
}
