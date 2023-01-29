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
