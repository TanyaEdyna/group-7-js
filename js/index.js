// ЗАДАЧА 1
// НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА,
// МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"

// const name = "Galyna";
// const age = 35;
// const hobby = "Java Script";
// const message = `ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ${name}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ ${hobby}`;
// console.log(message);

// ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

// const name = prompt("Введіть своє ім'я");
// const mail = prompt("Введіть свою електронну пошту");
// const tel = prompt("Введіть свій телефон");

// const message = `КОРИСТУВАЧ ${name} ВИКОРИСТОВУЄ  ${mail} ПОЧТУ І ${tel} ТЕЛЕФОН`;
// console.log(message);

//ЗАДАЧА 3
//ПОРАХУЙТЕ СУМУ ТОВАРІВ У КОРЗИНІ . ПОТРІБНО ВВЕСТИ СУМУ 3-Х ТОВАРІВ І ПОРАХУВАТИ ЇХ СУМУ

//const tel = Number(prompt("Введить ціну товару 1!"));
//const comp = +prompt("Введить ціну товару 2!");
//const tv = +prompt("Введить ціну товару 3!");

//const totalPrise = tel + comp + tv;
//console.log(totalPrise);

// ЗАДАЧА 4
// ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ:
// "СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО,
// ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ
// "НЕ ЗНАЄТЕ? 12"

// const years = Number(prompt("СКІЛЬКИ МІСЯЦІВ МАЄ РІК?"));

// if (years === 12) {
//   console.log("Вірно");
// } else {
//   console.log("НЕ ЗНАЄТЕ? 12");
// }

// ЗАДАЧА 5
// НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ОПРИДІЛЯТИМЕ ЧИ ЧИСЛО
// ДІЛИТЬСЯ НА СВОЄ ЧИСЛО, ЧИ МАЄ ОСТАТОК

// const num = Number(prompt("Enter a number"));

// if (num % 2 === 0) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// const res = num % 2 === 0 ? "Yes" : "No";

// console.log(res);

// ЗАДАЧА 6
// НАПИШІТЬ ПРОГРАМУ, ДЕ МИ У КОРИСТОВАЧА ПИТАЄМОСЬ МІСЯЦЬ НАРОДЖЕННЯ,
// І ПОКАЗУЄМО У ЯКУ ПОРУ РОКУ ВІН НАРОДИВСЯ

// const month = Number(prompt("Enter a month"));

// if (month === 12 || month === 1 || month === 2) {
//   console.log("winter");
// } else if (month >= 3 && month <= 5) {
//   console.log("spring");
// } else if (month >= 6 && month <= 8) {
//   console.log("summer");
// } else if (month >= 9 && month <= 11) {
//   console.log("autumn");
// } else {
//   console.log("no month");
// }
// ЗАДАЧА 7
// НАПИШІТЬ ПРОГРАМУ, ЯКА ПРОВІРЯЄ ЛОГІН І ПАРОЛЬ, І ВИВОДИТЬ ПРИВІТАННЯ - ЯКЩО ВСЕ ДОБРЕ,
// АБО ВИДАЄ ПОМИЛКУ , ЩО НЕ ВІРНИЙ ЛОГІН

// front
// const login = prompt("введіть ваш логін").toLowerCase();

// const pass = prompt("введіть ваш пароль").toLowerCase();

// //  back
// const passwordOk = "12345";
// const loginOk = "Ivan".toLowerCase();

// const result = login === loginOk && pass === passwordOk ? "welcome" : "error";

// console.log(result);

//ЗАДАЧА 8
//НАПИШІТЬ ПРОГРАМУ, ЯКА БУДЕ ЗАПИТУВАТИ У КОРИСТУВАЧА ПЕРІОД ПІДПИСКИ НА СЕРВІС ТА ПОКАЗУВАТИМЕ ЦІНУ
//ПІДПИСКИ(ВИКОРИСТАЙ IF..ELSE, ТА ПЕРЕПИШИ НА SWITCH)
//ЯКЩО ДЕНЬ - ціна 1.99
//ЯУЩО НЕДІЛЯ - ціна 5.99
//ЯКЩО МІСЯЦЬ - ціна 10.99
//ЯКЩО РІК - ціна 100.99

// const subscribe = prompt("input period of subscribe");

// if (subscribe === "day") {
//    console.log("1.99");
// } else if (subscribe === "week") {
//    console.log("5.99");
// } else if (subscribe === "month") {
//    console.log("10.99");
// } else if (subscribe === "year") {
//    console.log("100.99");
// }

// switch (subscribe) {
//   case "day":
//     console.log("1.99");
//     break;
//   case "week":
//     console.log("5.99");
//     break;
//   case "month":
//     console.log("10.99");
//     break;
//   case "year":
//     console.log("100.99");
//     break;
//   default:
//     console.log("input corect period please");
// }

//ЗАДАЧА 9
//НАПИШІТЬ ЦИКЛ FOR ЯКА БУДЕ ВИВОДИТИ У КОНСОЛЬ ЧИСЛА ЗА ЗРОСТАННЯМ ВІД MIN ДО MAX, ПІСЛЯ ТОГО ЧИСЛА КРАТНІ 10

// min = 5;
// max = 106;

// for (i = min; i <= max; i += 1) {
//   console.log(i);
// }

// for (i = min; i <= max; i += 1) {
//   if (i % 10 === 0) {
//     console.log(i);
//   }
// }

//ЗАДАЧА 10
//НАПИШІТЬ ПРОГРАМУ, ЯКА БУДЕ ВИЗНАЧАТИ ДОВЖИНУ ІМЕНІ , ЯКЩО ІМЯ БІЛЬШЕ 7 СИМВОЛІВ, КОНСОЛЬ ВИВОДИТЬ "Wow, you  have a REALLY long name!" , ЯКЩО МЕНШЕ 7
//"Your name isn't very long"

// const name = prompt("введіть ім'я");
// if (name.length > 7) {
//   console.log("Wow, you  have a REALLY long name!");
// } else {
//   console.log("Your name isn't very long");
// }

//ЗАДАЧА 11
// Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// const string = prompt("Какое официальное название JavaScript?");
// if (string === "ECMAScript") {
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

// const minutsNubmer = Number(prompt("Введите число (количество минут)"));
// let hours = Math.floor(minutsNubmer / 60);
// let minuts = minutsNubmer % 60;

// //варіант 1
// if (hours < 10 && minuts < 10) {
//   console.log(`0${hours}:0${minuts}`);
// } else if (hours >= 10 && minuts < 10) {
//   console.log(`${hours}:0${minuts}`);
// } else if (hours < 10 && minuts >= 10) {
//   console.log(`0${hours}:${minuts}`);
// } else {
//   console.log(`${hours}:${minuts}`);
// }

// //варіант 2
// if (hours < 10) {
//   hours = "0" + hours.toString();
// }

// if (minuts < 10) {
//   minuts = "0" + minuts.toString();
// }

// console.log(`${hours}:${minuts}`);

//--------

//ЗАДАЧА 13
//При помощи цикла for додайте все четные числа от   min до max

// const min = 1;
// const max = 10;
// let sum = 0;
// for (let i = min; i <= max; i += 1) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);

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

// const login = prompt("Введите логин");
// if (login === "Админ") {
//   const pass = prompt("Введите пароль");
//   if (pass === "Я главный") {
//     console.log("Здравствуйте!");
//   } else {
//     console.log("Неверный пароль!");
//   }
// } else if (login === null) {
//   console.log("Отменено");
// } else {
//   console.log("Я вас не знаю");
// }

//ЗАДАЧА 15
// При загрузке страницы пользователю предлагается
//в prompt ввести число. Ввод добавляется к значению
//переменной total.
//Операция ввода числа продолжается до тех пор,
//пока пользователь не нажмет кнопку Cancel в prompt.
//После того как пользователь прекратил ввод нажав на
// кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
//Делать проверку,что пользователь ввел именно число,
//а не произвольный набор символов, не нужно.

// let total = 0;
// let number = 0;

// while (number !== null) {
//   number = prompt("Введіть число");

//   //чому не спрацьовує if (Number(number) === NaN)?
//   if (isNaN(Number(number))) {
//     alert("Будь внимательнее, вводи число");
//   } else {
//     total += Number(number);
//   }
// }

// alert(`Общая сумма введенных чисел равна ${total}`);

//ЗАДАЧА 16
//  В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа попадает
// это число(в первую, вторую, третью или четвертую).

// const min = Number(prompt("Введіть число від 0 до 59"));

// if (min / 15 >= 0 && min / 15 < 1) {
//   console.log(`${min} це перша чверть`);
// } else if (min / 15 >= 1 && min / 15 < 2) {
//   console.log(`${min} це друга чверть`);
// } else if (min / 15 >= 2 && min / 15 < 3) {
//   console.log(`${min} це третя чверть`);
// } else if (min / 15 >= 3 && min / 15 < 4) {
//   console.log(`${min} це четверта чверть`);
// } else {
//   console.log(`${min} за межами діапазону циферблата годинника`);
// }

//ЗАДАЧА 17

// Дана строка, состоящая из символов, например, 'abcde'.
// Проверьте, что первым символом этой строки является буква 'a'.
// Если это так - выведите 'да', в противном случае выведите 'нет'.,

// const string = "abcde";
// const letter = "a";
// if (string[0] === letter) {
//   console.log("да");
// } else {
//   console.log("нет");


ЗАДАЧА 1
БАЗОВІ ОПЕРАЦІЇ З МАСИВОМ
1)створіть масив styles з елементами «Джаз» і «Блюз»
2)добавте «Рок-н-ролл» в кінець
3)замініть значення в середині на «Классика»
4)видаліть перший елемент і виведіть його в консоль
5)вставте «Рэп» і «Регги» на початок масиву

МАСИВ ПО ХОДІ ВИПОВНЕННЯ ОПЕРАЦІЇ
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл