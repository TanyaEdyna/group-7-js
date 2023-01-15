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
