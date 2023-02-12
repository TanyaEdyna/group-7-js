// 12.02.2023 ------------------------
// ------------------ условие ЗАДАЧА 21 ----------------------------
// Напиши клас Client який створює об'єкт із властивостями login і email.
// Оголоси приватні властивості #login і #email,
// доступ до яких зроби через геттер та сеттер login і email.

// ------------------ решение ЗАДАЧА 21 ----------------------------
// class Client {
//   #login;
//   #email;

//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const pirat = new Client({
//   login: "Jone",
//   email: "buhta@island.com",
// });

// console.log(pirat);
// console.log(pirat.email);
// console.log(pirat.login);

// pirat.email = "ship@buhta.bay";
// pirat.login = "Black Beard";

// console.log(pirat.email);
// console.log(pirat.login);

// ------------------ условие ЗАДАЧА 20 ----------------------------
// Напиши клас Storage який створює об'єкти керувати складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів,
// і записуватиме його у властивість items.
// Добавте методи класу:

// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар та додає його до поточних.
// removeItem(item) - отримає товар і, якщо він є, видаляє його з поточних.

// const items = new Storage(["Виноград", "Банани", "Кокоси", "Ківі"]);
// items.addItem("Манго");
// items.removeItem("Ківі")

// ------------------ решение ЗАДАЧА 20 ----------------------------
// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     this.items.push(item);
//   }
//   removeItem(item) {
//     this.items.splice(this.items.indexOf(item), 1);
//   }
// }

// const productGroupe = new Storage(["Виноград", "Банани", "Кокоси", "Ківі"]);
// console.table(productGroupe.getItems());
// productGroupe.addItem("Манго");
// productGroupe.removeItem("Ківі");

// ------------------ условие ЗАДАЧА 19 ----------------------------
// Напишіть клас User для створення користувача з наступними властивостями:
// username - імя, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.
// Добавте метод getInfo(), який повертає рядок:
// User ${ імя } is ${ вік } years old and has ${ кількість постів } posts.

// ------------------ решение ЗАДАЧА 19 ----------------------------
// class User {
//   constructor({ username, age, numberOfPosts }) {
//     this.username = username;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//   }

//   getInfo() {
//     return `User ${this.username} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//   }
// }

// const bigBoy = new User({
//   username: "Bobby",
//   age: "58",
//   numberOfPosts: 34,
// });

// console.table(bigBoy);
// console.log(bigBoy.getInfo());

// ------------------ условие ЗАДАЧА 18 ----------------------------
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
//   );

// ------------------ решение ЗАДАЧА 18 ----------------------------
// class Pearson {
//   constructor({ firstName, lastName, age, gender, interest }) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//     this.interest = interest;
//   }

//   bio() {
//     console.log(
//       `Привіт ${this.firstName} мені ${this.age} років. Мені подобається ${this.interest}`
//     );
//   }

//   greeting() {
//     console.log(`Привіт, я ${this.firstName}`);
//   }
// }

// const userSergio = new Pearson({
//   firstName: "Den",
//   lastName: "Dounot",
//   age: 40,
//   gender: "male",
//   interest: "React",
// });

// console.table(userSergio);
// userSergio.bio();
// userSergio.greeting();

// ------------------ условие ЗАДАЧА 17 ----------------------------
// Зібрати в allTopics масив усіх предметів всіх курсів використовуючи flatMap.
// Використовуючи Array.prototype.filter виконати фільтрацію,
// залишивши в uniqueTopics тільки унікальні елементи.

// ------------------ решение ЗАДАЧА 17 ----------------------------
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
// const allTopics = courses.flatMap((el) => el.topics);
// const uniqueTopics = allTopics.filter((el, i, arr) => i === arr.indexOf(el));
// console.log(allTopics);
// console.log(uniqueTopics);

// ------------------ условие ЗАДАЧА 16 ----------------------------
// Виконати сортування масиву назв моніторів в алфавітному
// та зворотному алфавітному порядку.

// ------------------ решение ЗАДАЧА 16 ----------------------------
// const items = ["SAMSUNG", "LG", "ASUS", "DELL", "BENQ"];
// const itemsUp = [...items].sort((a, b) => a.localeCompare(b));
// const itemsDown = [...items].sort((a, b) => (a > b ? -1 : 1));
// console.table(itemsUp);
// console.table(itemsDown);

// ------------------ условие ЗАДАЧА 15 ----------------------------
// Сортування примітивів.
// Виконати сортування масиву цін зі спадання та зростання.

// ------------------ решение ЗАДАЧА 15 ----------------------------
// const prices = [2, 14, 1, 37, 26, 8];
// const pricesUp = [...prices].sort((a, b) => a - b);
// const pricesDown = [...prices].sort((a, b) => b - a);
// console.table(pricesUp);
// console.table(pricesDown);

// ------------------ условие ЗАДАЧА 14 ----------------------------
// МАЄМО МАСИВ, ПОТРІБНО:
// 1)получити масив вчених які народились у 19ст;
// 2)порахувати загальну суму років скільки прожили вчені , і визначити середнє значення;
// 3) відсортувати по алфавіту;
// 4)відсортувати по кількості прожитих років;
// 5)відфільтрувати, хто народився в 15,16,17ст;
// 6)знайти рік народження Albert Einstein;
// 7)визначити, чи усі вчені працювали у 19ст;

// ------------------ решение ЗАДАЧА 14 ----------------------------
// const scientists = [
//   {
//     name: "Albert",
//     surname: "Einstein",
//     born: 1879,
//     dead: 1955,
//     id: 1,
//   },
//   {
//     name: "Isaac",
//     surname: "Newton",
//     born: 1643,
//     dead: 1727,
//     id: 2,
//   },
//   {
//     name: "Galileo",
//     surname: "Galilei",
//     born: 1564,
//     dead: 1642,
//     id: 3,
//   },
//   {
//     name: "Marie",
//     surname: "Curie",
//     born: 1867,
//     dead: 1934,
//     id: 4,
//   },
//   {
//     name: "Johannes",
//     surname: "Kepler",
//     born: 1571,
//     dead: 1630,
//     id: 5,
//   },
//   {
//     name: "Nicolaus",
//     surname: "Copernicus",
//     born: 1473,
//     dead: 1543,
//     id: 6,
//   },
//   {
//     name: "Max",
//     surname: "Planck",
//     born: 1858,
//     dead: 1947,
//     id: 7,
//   },
//   {
//     name: "Katherine",
//     surname: "Blodgett",
//     born: 1898,
//     dead: 1979,
//     id: 8,
//   },
//   {
//     name: "Ada",
//     surname: "Lovelace",
//     born: 1815,
//     dead: 1852,
//     id: 9,
//   },
// ];
// // 1)
// const scientistsName = scientists.filter(
//   (el) => el.born >= 1801 && el.born <= 1900
// );
// console.log(scientistsName);
// // 2)
// const scientistsAges = scientists.reduce((acc, el) => {
//   return acc + el.dead - el.born;
// }, 0);
// console.log(scientistsAges / scientists.length);
// // 3)
// const scientistsNameSort1 = [...scientists].sort((a, b) =>
//   a.name.localeCompare(b)
// );
// const scientistsNameSort2 = [...scientists].sort((a, b) =>
//   a.name < b.name ? 1 : -1
// );
// console.table(scientistsNameSort1);
// console.table(scientistsNameSort2);
// // 4)
// const scientistsAgesSort = [...scientists].sort(
//   (a, b) => a.dead - a.born - (b.dead - b.born)
// );
// console.table(scientistsAgesSort);
// // 5)
// const scientistsBornCentury = scientists.filter(
//   (el) => el.born >= 1501 && el.born <= 1800
// );
// console.table(scientistsBornCentury);
// // 6)
// const scientistsFindBornYear = (scientistName, scientistSurname) => {
//   const scientistAgeBirth = scientists.find(
//     (el) => el.name === scientistName && el.surname === scientistSurname
//   );
//   console.log(
//     `${scientistName} ${scientistSurname} was born in ${scientistAgeBirth.born}`
//   );
// };
// scientistsFindBornYear("Albert", "Einstein");
// // 7)
// const scientistsAges = scientists.every((el) => el.dead >= 1900);
// console.log(scientistsAges);

// ------------------ условие ЗАДАЧА 13 ----------------------------
// Напишіть дві функції:
// makeProduct(name, price, callback) - приймає імя та ціну товару, а також колбек.
// Функція створює обєкт товару, добавляє йому унікальний ідентифікатор,
// в значення id і викликає колбек, передаючи йому створений обєкт.
// showProduct(product) - колбек приймає обєкт продукта і логінує його в консоль;
// makeProduct("Холодильник", 10000, logger);
// ------------------ решение ЗАДАЧА 13 --------------------------------
// const makeProduct = (name, price, callback) => {
//   const product = {
//     id: Date.now(),
//     name,
//     price,
//   };

//   callback(product);
// };

// const showProduct = (product) => {
//   console.log(product);
// };

// makeProduct("Холодильник", 10000, showProduct);

// ------------------ условие ЗАДАЧА 12 ----------------------------
// Напишіть дві функції:
// letMeSeeYourName(callback) - запитує імя користувача, через prompt і викликає
// колбек функцію(callback)
// greet(name) - колбек , який приймає імя і логінує в консоль рядок  "Привіт" + імя

// ------------------ решение ЗАДАЧА 12 --------------------------------
// const letMeSeeYourName = (callback) => {
//   const userName = prompt("What is your name?");
//   callback(userName);
// };

// const greet = (userName) => {
//   console.log(`User name is: ${userName}`);
// };

// letMeSeeYourName(greet);

// 11.02.2023 ------------------------
// ------------------ условие ЗАДАЧА 11 (codewars - 7 kyu) ----------------------------
// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.

// ------------------ решение ЗАДАЧА 11 (codewars - 7 kyu) --------------------------------
// function moveZeros(arr) {
//   const zeroArr = arr.filter((el) => el === 0);
//   const noneZeroArr = arr.filter((el) => el !== 0);

//   return [...noneZeroArr, ...zeroArr];
// }

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // returns[false,1,1,2,1,3,"a",0,0]

// 07.02.2023 ------------------------
// ------------------ условие ЗАДАЧА 10 (freecodecamp) ----------------------------
// We have defined a function named rangeOfNumbers with two parameters.
// The function should return an array of integers which begins with a number
// represented by the startNum parameter and ends with a number represented by the endNum parameter.
// The starting number will always be less than or equal to the ending number.
// Your function must use recursion by calling itself and not use loops of any kind.
// It should also work for cases where both startNum and endNum are the same.

// ------------------ решение ЗАДАЧА 10 (freecodecamp) --------------------------------
// function countdown(n) {
//   if (0 >= n) {
//     return [];
//   } else {
//     const arr = countdown(n - 1);
//     arr.push(n);
//     return arr;
//   }
// }

// // const countdown = (n) => (n < 1 ? [] : [n, ...countdown(n - 1)]); //тоже что и выше

// console.log(countdown(5));

// const rangeOfNumbers = (startNum, endNum) =>
//   startNum > endNum ? [] : [startNum, ...rangeOfNumbers(startNum + 1, endNum)];

// console.log(rangeOfNumbers(1, 5));

// 05.02.2023 ------------------------
// ------------------ условие ЗАДАЧА 9 (codewars - 7 kyu) ----------------------------
// The rgb function is incomplete.Complete it so that passing in RGB decimal values will result
// in a hexadecimal representation being returned.Valid decimal values for RGB are 0 - 255.
// Any values that fall out of that range must be rounded to the closest valid value.
// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
// The following are examples of expected output values:
// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3
// rgb(0, 0, -20), // returns 2E0AFF;
// rgb(46, 10, 268); // returns "2E0AFF";

// ------------------ решение ЗАДАЧА 9 (codewars - 7 kyu) --------------------------------
// const rgb = (...args) => {
//   return args.reduce(
//     (str, el) =>
//       (str += Math.min(255, Math.max(0, el))
//         .toString(16)
//         .padStart(2, "0")
//         .toUpperCase()),
//     ""
//   );
// };

// console.log(rgb(0, 0, -20));
// console.log(rgb(46, 10, 268));

// 04.02.2023 ------------------------
// ------------------ условие ЗАДАЧА 8 ----------------------------
// создать счетчик на странице

// эту html разметку нужно добавить в index.html
// <div id="counter-1">
//   <button data-decrement>-</button>
//   <span data-value>0</span>
//   <button data-increment>+</button>
// </div>

// <div id="counter-2">
//   <button data-decrement>-</button>
//   <span data-value>0</span>
//   <button data-increment>+</button>
// </div>

// синтакчис через класс

// class CounterPlugin {
//   constructor({ rootSelector, initialValue = 0, step = 1 } = {}) {
//     this._value = initialValue;
//     this._step = step;
//     this._refs = this.getRefs(rootSelector);
//     this.updateValueUI();
//     this.bindFvents();
//   }

//   getRefs(rootSelector) {
//     const refs = {};

//     refs.container = document.querySelector(rootSelector);
//     refs.incrementBtn = refs.container.querySelector("[data-increment]");
//     refs.decrementBtn = refs.container.querySelector("[data-decrement]");
//     refs.value = refs.container.querySelector("[data-value]");

//     return refs;
//   }

//   updateValueUI() {
//     this._refs.value.textContent = this._value;
//   }

//   increment() {
//     this._value += this._step;
//   }

//   decrement() {
//     this._value -= this._step;
//   }

//   bindFvents() {
//     this._refs.incrementBtn.addEventListener("click", () => {
//       this.increment();
//       this.updateValueUI();
//     });

//     this._refs.decrementBtn.addEventListener("click", () => {
//       this.decrement();
//       this.updateValueUI();
//     });
//   }
// }

// const counter1 = new CounterPlugin({
//   rootSelector: "#counter-1",
//   initialValue: 2,
//   step: 2,
// });
// console.log("counter1", counter1);

// const counter2 = new CounterPlugin({
//   rootSelector: "#counter-2",
//   initialValue: 10,
//   step: 5,
// });
// console.log("counter2", counter2);

// синтакчис через функцию

// const CounterPlugin = function ({
//   rootSelector,
//   initialValue = 0,
//   step = 1,
// } = {}) {
//   this._value = initialValue;
//   this._step = step;

//   this._refs = this._getRefs(rootSelector);
//   this.updateValueUI();
//   this._bindFvents();
// };

// CounterPlugin.prototype._getRefs = function (rootSelector) {
//   const refs = {};
//   refs.container = document.querySelector(rootSelector);

//   refs.incrementBtn = refs.container.querySelector("[data-increment]");
//   refs.decrementBtn = refs.container.querySelector("[data-decrement]");
//   refs.value = refs.container.querySelector("[data-value]");

//   return refs;
// };

// CounterPlugin.prototype._bindFvents = function () {
//   this._refs.incrementBtn.addEventListener("click", () => {
//     this.increment();
//     this.updateValueUI();
//   });

//   this._refs.decrementBtn.addEventListener("click", () => {
//     this.decrement();
//     this.updateValueUI();
//   });
// };

// CounterPlugin.prototype.updateValueUI = function () {
//   this._refs.value.textContent = this._value;
// };

// CounterPlugin.prototype.increment = function () {
//   this._value += this._step;
// };

// CounterPlugin.prototype.decrement = function () {
//   this._value -= this._step;
// };

// const counter1 = new CounterPlugin({
//   rootSelector: "#counter-1",
//   step: 2,
// });

// const counter2 = new CounterPlugin({ rootSelector: "#counter-2", step: 10 });

// console.log(counter1);
// console.log(counter2);

// 29.01.2023 ------------------------
// ------------------ условие ЗАДАЧА 7 ----------------------------
// //7. Напиши скрипт управления личным кабинетом интернет банка
// //Есть объект account в котором необходимо реализовать
// //методы для работы с балансом и историей транзакций

// //Типов транзакций всего два: Можно положить либо снять деньги со счета
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };
// //Каждая транзакция это объект со свойствами: id, type, amount
// const account = {
//   //текущий баланс счёта
//   balance: 0,
//   //История транзакций
//   transactions: [],
//   //Метод создает и возвращает объект транзакций
//   //Принимает сумму и тип транзакций
//   createTransaction(type, amount) {
//     return {
//       type,
//       amount,
//     };
//   },
//   //Метод отвечающий за добавление суммы к балансу.
//   //Принимает сумму транцакции.
//   //Вызывает createTransaction для создания объекта транзакции
//   //после чего добавляет его в историю транзакций
//   deposit(amount) {},
//   //Метод отвечающий за снятие суммы с баланса.
//   //Принимает сумму транцакции.
//   //Вызывает createTransaction для создания объекта транзакции
//   //после чего добавляет его в историю транзакций
//   //Если amount больше чем текущий баланс, выводим сообщение о том,
//   //что недостаточно средств на счету
//   withdraw(amount) {},
//   //Метод возвращает текущий баланс
//   getBalance() {},
//   //Метод ищет и возвращает объект транзакции по id
//   getTransactionDetails(id) {},
//   //Метод возвращает количество средств определенного типа
//   //транзакции из всей истории транзакций
//   getTransactionType(type) {},
// };

// ------------------ решение ЗАДАЧА 7 --------------------------------
// const transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// const account = {
//   balance: 0,
//   transactions: [],
//   createTransaction(type, amount) {
//     const id = this.transactions.length + 1;
//     this.transactions.push({ id, type, amount });
//     switch (type) {
//       case transaction.DEPOSIT:
//         this.balance += amount;
//         break;

//       case transaction.WITHDRAW:
//         this.balance -= amount;
//         break;
//     }
//   },
//   deposit(amount) {
//     if (amount) {
//       this.createTransaction(transaction.DEPOSIT, amount);
//     }
//   },
//   withdraw(amount) {
//     if (amount <= this.balance) {
//       this.createTransaction(transaction.WITHDRAW, amount);
//       return;
//     }
//     return console.log(`Not enough money. You have ${this.balance} money`);
//   },
//   getBalance() {
//     return `You have ${this.balance} money`;
//   },
//   getTransactionDetails(id) {
//     if (this.transactions.find((el) => el.id === id)) {
//       return this.transactions.find((el) => el.id === id);
//     }
//     return `There is no ${id}`;
//   },
//   getTransactionType(type) {
//     switch (type) {
//       case transaction.DEPOSIT:
//         return this.transactions
//           .filter((el) => el.type === transaction.DEPOSIT)
//           .reduce((total, el) => (total += el.amount), 0);

//       case transaction.WITHDRAW:
//         return `-${this.transactions
//           .filter((el) => el.type === transaction.WITHDRAW)
//           .reduce((total, el) => (total += el.amount), 0)}`;

//       default:
//         return `There is no ${type} transaction`;
//     }
//   },
// };

// account.deposit(1000);
// console.log(account.getBalance());
// account.withdraw(500);
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(1));
// console.log(account.getTransactionType(transaction.DEPOSIT));
// console.log(account.getTransactionType(transaction.WITHDRAW));

// ------------------ условие ЗАДАЧА 6 ----------------------------
//6. Напишите функцию, которая принимает как параметр объект
//и формирует объекты в новом массиве в формате [key, value]
// const user6 = {
//   name: "John",
//   surName: "Stones",
//   age: 20,
//   hobby: "tenis",
//   haveCar: true,
//   merried: false,
// };

// ------------------ решение ЗАДАЧА 6 --------------------------------
// const user6 = {
//   name: "John",
//   surName: "Stones",
//   age: 20,
//   hobby: "tenis",
//   haveCar: true,
//   merried: false,
// };

// const makeArrayFromObject = (obj) => {
//   return Object.entries(obj).reduce(
//     (acc, el) => [...acc, { [el[0]]: el[1] }],
//     []
//   );
// };

// console.log(makeArrayFromObject(user6));

// ------------------ условие ЗАДАЧА 5.1 ----------------------------
//5.1 Напишите функцию updateObject, которая принимает объект и возвращает
//новый объект без указанных параметров
//Ожидаемый результат ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}

// ------------------ решение ЗАДАЧА 5.1 --------------------------------
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   i: 5,
// };

// function updateObject(obj, ...args) {
//   for (let item of args) {
//     if (item in obj) {
//       delete obj[item];
//     }
//   }
//   return obj;
// }

// console.log(updateObject(obj, "b", "a", "c"));

// ------------------ условие ЗАДАЧА 4 ----------------------------
//3. Напишите ф-цию calcTotalPrice(stones, stonesName),
//которая принимает массив объектов и
//строку с названием камня.
//Функция считает м возвращает общую стоимость камней
//с таким именем, ценой и количеством из объекта
// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

// ------------------ решение ЗАДАЧА 4 --------------------------------
// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(stones, stonesName) {
//   if (stones.indexOf(stones.name)) {
//     return stones
//       .filter((el) => el.name === stonesName)
//       .reduce((total, el) => (total = el.price * el.quantity), 0);
//   }
//   return "We did't find name";
// }

// console.log(calcTotalPrice(stones, "Изумруд"));
// console.log(calcTotalPrice(stones, "Бриллиант"));
// console.log(calcTotalPrice(stones, "Сапфир"));
// console.log(calcTotalPrice(stones, "Щебень"));

// ------------------ условие ЗАДАЧА 3 ----------------------------
// Створи обєкт calculator(калькулятор) з 3-ма методами:
// read()- запрошує 2 значення і зберігає їх як значення обєкта;
// sum() -повертає суму збережених значень;
// mult() -перемножує значення збережені і повертає результат;
//  const calculator = {
//  a: null,
//  b: null,
//   read() {},
//   sum() {},
//   mult() {},
// };
// calculator.read();
// console.log(`sum`, calculator.sum());
// console.log(`mult`, calculator.mult());

// ------------------ решение ЗАДАЧА 3 --------------------------------
// // решение задачи модифицировано под много чисел
// const calculator = {
//   calcNumbers: {},
//   read() {
//     let items = prompt("Введите два или более чисел через пробел").split(" ");
//     for (let i = 0; i < items.length; i += 1) {
//       while (isNaN(items[i])) {
//         alert("You wrote not a number!");
//         items = prompt("Введите два или более чисел через пробел").split(" ");
//       }
//     }
//     items.map((el, i) => (this.calcNumbers[i] = Number(el)));
//   },
//   sum() {
//     return Object.values(this.calcNumbers).reduce(
//       (total, el) => (total += el),
//       0
//     );
//   },
//   mult() {
//     return Object.values(this.calcNumbers).reduce((total, el) => (total *= el));
//   },
// };

// calculator.read();
// console.log(calculator.calcNumbers);
// console.log(calculator.sum());
// console.log(calculator.mult());

// ------------------ условие ЗАДАЧА 2 ----------------------------
// У вас є обєкт , у якому зберігаються зарплати нашої команди.
// Напишіть код , для підрахунку всіх зарплат і збережіть результат в змінні sum
// Повинно получитись 390, якщо обєкт salaries пустий , то результат буде 0
// ЩОБ МОЖНА БУЛО ПЕРЕВИКОРИСТОВУВАТИ ЛОГІКУ, ТОМУ ПИШЕМО ФУНКЦІЮ
//  const salaries = {
//    John: 100,
//    Ann: 160,
//    Pete: 130,
//  };

// ------------------ решение ЗАДАЧА 2 --------------------------------
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// const emptyObject = {};

// // решение через фукцию
// const totalSalaries = (obj) => {
//   const totalValues = Object.values(obj);
//   let total = 0;
//   for (let item of totalValues) {
//     total += item;
//   }
//   return total;
// };
// console.log(totalSalaries(salaries));
// console.log(totalSalaries(emptyObject));

// // решение через метод
// const totalSalariesObj = {
//   employe: {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
//   },
//   emptyObject: {},
//   totalSalaries() {
//     return Object.values(this.employe).reduce((total, el) => (total += el), 0);
//   },
// };
// console.log(totalSalariesObj.totalSalaries());

// // решение через метод массива
// const totalSalaries1 = (obj) => {
//   return Object.values(obj).reduce((total, el) => (total += el), 0);
// };
// console.log(totalSalaries1(salaries));
// console.log(totalSalaries1(emptyObject));

// ------------------ условие ЗАДАЧА 1 ----------------------------
// Напишіть скрипт,для обєкта user в послідовності:
//  добавляє поле mood із значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення  premium на false
// виводить отримане обєкта user в форматі ключ:значення використовуючи  Object.keys() и for...of
//  const user = {
//    name: "Mango",
//    age: 20,
//    hobby: "html",
//    premium: true,
// };

// ------------------ решение ЗАДАЧА 1 --------------------------------
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// const changeObj = (user) => {
//   user.mood = "happy";
//   user.hobby = "skydiving";
//   user.premium = false;

//   const keysFromUser = Object.keys(user);
//   for (let key of keysFromUser) {
//     console.log(`${key}: ${user[key]}`);
//   }

//   return user;
// };

// console.table(changeObj(user));

// ------------------ условие ЗАДАЧА 9 -----------------------------------------------------------
// Напишіть функцію для роботи з колекцією навчаючих курсів courses:
// addCourse(name) - добавляє курс у кінець колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName)- змінює імя на нове
// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// addCourse("Express"); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse("CSS"); // 'У вас уже є такий курс'
// removeCourse("React"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse("Vue"); // 'Курс з таким іменем не найдено'
// updateCourse("Express", "NestJS"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// ------------------ решение ЗАДАЧА 9 --------------------------------
// const obj = {
//   courses: ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"],
//   addCourse(name) {
//     if (!this.courses.includes(name)) {
//       this.courses.push(name);
//       return;
//     }
//     return "У вас уже є такий курс";
//   },
//   removeCourse(name) {
//     const item = this.courses.indexOf(name);
//     if (item !== -1) {
//       this.courses.splice(item, 1);
//     }
//     return "Курс з таким іменем не найдено";
//   },
//   updateCourse(oldName, newName) {
//     const oldItem = this.courses.indexOf(oldName);
//     if (oldItem !== -1) {
//       this.courses.splice(oldItem, 1, newName);
//     }
//   },
// };
// console.log(obj.courses); // ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"]
// obj.addCourse("Express");
// console.log(obj.courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(obj.addCourse("CSS")); // 'У вас уже є такий курс'
// obj.removeCourse("React");
// console.log(obj.courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// console.log(obj.removeCourse("Vue")); // 'Курс з таким іменем не найдено'
// obj.updateCourse("Express", "NestJS");
// console.log(obj.courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// last tasks -------------------
//ЗАДАЧА 8
//НАПИШІТЬ ПРОГРАМУ, ЯКА БУДЕ ЗАПИТУВАТИ У КОРИСТУВАЧА ПЕРІОД ПІДПИСКИ НА СЕРВІС ТА ПОКАЗУВАТИМЕ ЦІНУ
//ПІДПИСКИ(ВИКОРИСТАЙ IF..ELSE, ТА ПЕРЕПИШИ НА SWITCH)
//ЯКЩО ДЕНЬ - ціна 1.99
//ЯУЩО НЕДІЛЯ - ціна 5.99
//ЯКЩО МІСЯЦЬ - ціна 10.99
//ЯКЩО РІК - ціна 100.99

// const subscribe = prompt("input period of subscribe");

//if (subscribe === "day") {
//    console.log("1.99");
//} else if (subscribe === "week") {
//    console.log("5.99");
//} else if (subscribe === "month") {
//    console.log("10.99");
//} else if (subscribe === "year") {
//    console.log("100.99");
//}

// переписал на switch
// switch (subscribe) {
//   case "day":
//     console.log("ціна 1.99");
//     break;

//   case "week":
//     console.log("ціна 5.99");
//     break;

//   case "month":
//     console.log("ціна 10.99");
//     break;

//   case "year":
//     console.log("ціна 100.99");
//     break;

//   default:
//     console.log("Такого нема");
//     break;
// }

//ЗАДАЧА 9
//НАПИШІТЬ ЦИКЛ FOR ЯКА БУДЕ ВИВОДИТИ У КОНСОЛЬ ЧИСЛА
//ЗА ЗРОСТАННЯМ ВІД MIN ДО MAX, ПІСЛЯ ТОГО ЧИСЛА КРАТНІ 10

// const min = 0;
// const max = 50;

// for (let i = min; i <= max; i += 1) {
//   if (i % 10 === 0) {
//     console.log(i);
//   }
// }

//ЗАДАЧА 10
//НАПИШІТЬ ПРОГРАМУ, ЯКА БУДЕ ВИЗНАЧАТИ ДОВЖИНУ ІМЕНІ ,
//ЯКЩО ІМЯ БІЛЬШЕ 7 СИМВОЛІВ, КОНСОЛЬ ВИВОДИТЬ "Wow, you  have a REALLY long name!",
//ЯКЩО МЕНШЕ 7
//"Your name isn't very long"

// const firstName = "Garry Gudini";
// const longSentece = "Wow, you  have a REALLY long name!";
// const shortSentence = "Your name isn't very long";

// const result = firstName.length < 7 ? shortSentence : longSentece;

// console.log(result);

//ЗАДАЧА 11
// Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// const test = prompt("Какое официальное название JavaScript?");

// if (test === "ECMAScript") {
//   alert("Верно!");
// } else {
//   alert("Не знаете? ECMAScript!");
// }

//ЗАДАЧА 12
// Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// let time = Number(prompt("Enter number of minutes from 0 to 1440"));

// while (time < 0 || time > 1440) {
//   time = Number(prompt("Enter number of minutes from 0 to 1440"));
// }

// const hour = Math.floor(time / 60);

// const minutes = time % 60;

// const totalTime = `${hour.toString().padStart(2, "0")}:${minutes
//   .toString()
//   .padStart(2, "0")}`;

// console.log(totalTime);

//ЗАДАЧА 13
//При помощи цикла for додайте все четные числа от   min до max

// const min = 0;
// const max = 20;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//ЗАДАЧА 14
//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести строку "Отменено"
//В противном случае вывести строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"

// const user = prompt("Enter a login");
// let pass;

// if (user === "admin") {
//   pass = prompt("Enter a password");
//   alert(pass === "I am a boss" ? "Hello boss!" : "Wrong password");
// } else if (user === "" || user === null) {
//   alert("You canceled");
// } else {
//   alert("I don't know you");
// }

//ЗАДАЧА 15
// При загрузке страницы пользователю предлагается
//в prompt ввести число. Ввод добавляется к значению
//переменной total.
//Операция ввода числа продолжается до тех пор,
//пока пользователь не нажмет кнопку Cancel в prompt.
//После того как пользователь прекратил ввод нажав на
//кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
//Делать проверку,что пользователь ввел именно число,
//а не произвольный набор символов, не нужно.

// let num = prompt("Enter a number");
// let total = 0;

// // while (num != null) {
// //   total += Number(num);
// //   num = prompt("Enter a number");
// // }

// for (; num != null; ) {
//   total += Number(num);
//   num = prompt("Enter a number");
// }

// alert(`Общая сумма введенных чисел равна ${total}.`);

//ЗАДАЧА 16
//  В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа попадает
// это число(в первую, вторую, третью или четвертую).

// let min = Number(prompt("Enter a number from 0 to 59"));

// while (min < 0 || min > 59) {
//   min = Number(prompt("Enter a number from 0 to 59"));
// }

// if (min >= 0 && min <= 14) {
//   console.log("first part of hour");
// } else if (min >= 15 && min <= 29) {
//   console.log("second part of hour");
// } else if (min >= 30 && min <= 44) {
//   console.log("third part of hour");
// } else {
//   console.log("fourth part of hour");
// }

//ЗАДАЧА 17

// Дана строка, состоящая из символов, например, 'abcde'.
// Проверьте, что первым символом этой строки является буква 'a'.
// Если это так - выведите 'да', в противном случае выведите 'нет'.

// const str = "abcde";

// if (str[0] === "a") {
//   console.log("Yes");
// } else {
//   console.log("No");
// }
