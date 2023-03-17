// ------------------ условие ЗАДАЧА 2 ----------------------------
// const info = {
//   [Symbol("a")]: "b",
// };
// console.log(info);
// console.log(Object.keys(info));

// Symbol не является перечисляемый. Метод Object.keys возвращает все
// перечисляемые свойства ключа для объекта. Symbol не просматривается
// таким образом, и возвращается пустой массив.
// При регистрации всего объекта будут видны все свойства,
// даже не перечисляемые.

// Это одно из многих качеств символа: помимо представления
// совершенно уникального значения (которое предотвращает
// случайное столкновение имен в объектах, например,
// при работе с 2 библиотеками, которые хотят добавить
// свойства к одному и тому же объекту), вы также можете "скрыть"
// свойства объектов таким образом (хотя и не полностью).
// Вы можете получить доступ к символам, используя метод
// Object.getOwnPropertySymbols().

// ------------------ условие ЗАДАЧА 1 ----------------------------
// var thing;
// let func = (str = "no arg") => {
//   console.log(str);
// };
// func(thing);
// func(null);
