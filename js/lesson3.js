// ЗАДАЧА 1
// Напишіть дві функції:
// letMeSeeYourName(callback) - запитує імя користувача , через prompt і викликає колбек функцію (callback)
// greet(name) - колбек , який приймає імя і логінує в консоль рядок  "Привіт" + імя

// letMeSeeYourName(callback)
// const letMeSeeYourName = (callback) => {
//   const getName = prompt("your name");
//   callback(getName);
// };

// const greet = (getName) => {
//   //   console.log(`Привіт + ${getName}`);
//   alert(`Привіт + ${getName}`);
// };
// console.log(letMeSeeYourName(greet));

// ЗАДАЧА 2
// Напишіть дві функції:
// makeProduct(name, price, callback) -приймає імя та ціну товару, а також колбек.Функція створює обєкт товару,
// добавляє йому унікальний ідентифікатор, в значення id і викликає колбек, передаючи йому створений обєкт.
// showProduct(product) - колбек приймає обєкт продукта і логінує його в консоль;
// makeProduct("Холодильник", 10000, logger);

// const makeProduct = (name, price, callback) => {
//   const products = {
//     name,
//     price,
//     id: Date.now(),
//   };
//   callback(products);
// };

// const showProduct = (products) => {
//   console.log(products);
// };

// console.log(makeProduct("Холодильник", 10000, showProduct));

// ЗАДАЧА 3
// МАЄМО МАСИВ, ПОТРІБНО:
// 1)получити масив вчених які народились у 19ст;
// 2)порахувати загальну суму років скільки прожили вчені , і визначити середнє значення;
// 3) відсортувати по алфавіту;
// 4)відсортувати по кількості прожитих років;
// 5)відфільтрувати, хто народився в 15,16,17ст;
// 6)знайти рік народження Albert Einstein;
// 7)визначити, чи усі вчені працювали у 19ст;




// const scientists = [
//     {
//       name: "Albert",
//       surname: "Einstein",
//       born: 1879,
//       dead: 1955,
//       id: 1,
//     },
//     {
//       name: "Isaac",
//       surname: "Newton",
//       born: 1643,
//       dead: 1727,
//       id: 2,
//     },
//     {
//       name: "Galileo",
//       surname: "Galilei",
//       born: 1564,
//       dead: 1642,
//       id: 3,
//     },
//     {
//       name: "Marie",
//       surname: "Curie",
//       born: 1867,
//       dead: 1934,
//       id: 4,
//     },
//     {
//       name: "Johannes",
//       surname: "Kepler",
//       born: 1571,
//       dead: 1630,
//       id: 5,
//     },
//     {
//       name: "Nicolaus",
//       surname: "Copernicus",
//       born: 1473,
//       dead: 1543,
//       id: 6,
//     },
//     {
//       name: "Max",
//       surname: "Planck",
//       born: 1858,
//       dead: 1947,
//       id: 7,
//     },
//     {
//       name: "Katherine",
//       surname: "Blodgett",
//       born: 1898,
//       dead: 1979,
//       id: 8,
//     },
//     {
//       name: "Ada",
//       surname: "Lovelace",
//       born: 1815,
//       dead: 1852,
//       id: 9,
//     },
  
//     {
//       name: "Lise",
//       surname: "Meitner",
//       born: 1878,
//       dead: 1968,
//       id: 11,
//     },
//     {
//       name: "Sarah E.",
//       surname: "Goode",
//       born: 1855,
//       dead: 1905,
//       id: 10,
//     },
//     {
//       name: "Hanna",
//       surname: "Hammarström",
//       born: 1829,
//       dead: 1909,
//       id: 12,
//     },
// ];
  
// 1)получити масив вчених які народились у 19ст;

// const scientistArrayNineTnths = scientists.filter(scientist => scientist.born >= 1801 && scientist.born <= 1900);

// const scientistArrayNames = scientistArrayNineTnths.map(scientistArrayNineTnth => `${scientistArrayNineTnth.name} ${scientistArrayNineTnth.surname}`);

// console.log(scientistArrayNames);

// 2)порахувати загальну суму років скільки прожили вчені , і визначити середнє значення;

//  const total = scientists.reduce((age, scientistsAge) => { return age + (scientistsAge.dead - scientistsAge.born) }, 0);

//  console.log(total);

//  const averageAge = total / scientists.length;

//  console.log(averageAge.toFixed(1));

// 3) відсортувати по алфавіту;

// const sortByName = [...scientists].sort((a, b) => (a.name[0] > b.name[0] ? 1 : -1));

// const sortByName = [...scientists].sort((a, b) => (a.name[0] > b.name[0] ? -1 : 1));/// Выбери один из вариантов

// console.log(sortByName);

// 4)відсортувати по кількості прожитих років;

// const sortByAge = [...scientists].sort((a, b) => (a.dead - a.born) - (b.dead - b.born));

// console.log(sortByAge);

// 5)відфільтрувати, хто народився в 15,16,17ст;

// const sortByCenturyAge = scientists.filter(scientist => scientist.born >= 1401 && scientist.born <= 1700);

// console.log(sortByCenturyAge);

// 6)знайти рік народження Albert Einstein;

// const findAlbEinst = scientists.find(scientist => scientist.name === "Albert" && scientist.surname === "Einstein");

// console.log(findAlbEinst);

// 7)визначити, чи усі вчені працювали у 19ст;

// const workAtNineTnth = scientists.every(scientist => scientist.dead >= 1801 && scientist.dead <= 1900);

// console.log(workAtNineTnth);


//ЗАДАЧА 4
//Сортування примітивів.
//Виконати сортування масиву цін зі спадання та зростання.
//const prices = [2, 14, 1, 37, 26, 8];

//const priceUp = [...prices].sort((a, b) => a - b);

//const priceDown = [...prices].sort((a, b) => b - a);
//console.log(priceUp);
//console.log(priceDown);

//ЗАДАЧА 5
//Виконати сортування масиву назв моніторів в алфавітному та зворотному алфавітному порядку.
// const items = ["SAMSUNG", "LG", "ASUS", "DELL", "BENQ"];

// const itemsUp = [...items].sort((a, b) => a > b ? 1 : -1);
// const itemsDown = [...items].sort((a, b) => a > b ? -1 : 1);
// console.log(itemsUp);
// console.log(itemsDown);
// ЗАДАЧА 6
// Зібрати в allTopics масив усіх предметів всіх курсів використовуючи flatMap.
// Використовуючи Array.prototype.filter виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи.

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub Desktop", "GitHub"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "Terminal", "Git", "GitHub", "HTML", "CSS"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Functions",
//       "Conditions",
//       "Classes",
//       "DOM",
//       "Git",
//       "GitHub",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Promises",
//       "AJAX",
//       "Git",
//       "GitHub",
//     ],
//   },
// ];

//---------------------------- 5 Модуль ----------------------------------
// ЗАДАЧА 7
// 1) Напишіть ф - ю конструктор яка створює обєкт person з такимим ключами:
// const Person = {
//   firstName,
//   lastName,
//   age,
//   gender,
//   interest,
//   bio() {
//     // виводить рядок Привіт {імя} мені {вік} років. Мені подобається {інтерес}
//   },
//   greeting() {
//     // Привіт, я {імя}
//   },
// };
// const user = new Person(
//     "Den",
//    "Dounot",
//     40,
//     "male",
//    "React",
// );
  

// ЗАДАЧА 8
// Напишіть клас User для створення користувача з наступними властивостями:
// username - імя, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.
// Добавте метод getInfo(), який повертає рядок:
// User ${ імя } is ${ вік } years old and has ${ кількість постів } posts.
    
    
// ЗАДАЧА 9
// Напиши клас Storage який створює об'єкти керувати складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items.
// Добавте методи класу:

// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар та додає його до поточних.
// removeItem(item) - отримає товар і, якщо він є, видаляє його з поточних.

// const items = new Storage(["Виноград", "Банани", "Кокоси", "Ківі"]);
// items.addItem("Манго");
// items.removeItem("Ківі")


// ЗАДАЧА 4
// Напиши клас Client який створює об'єкт із властивостями login і email.
// Оголоси приватні властивості #login і #email, доступ до яких зроби через геттер та сеттер login і email.



