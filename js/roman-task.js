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
