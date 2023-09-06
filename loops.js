// // Таски на умови.

// // 1) Запитати змінну у користувача. Якщо змінна дорівнює числу 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

const usersUnswers = prompt("Input number here", "");
if (usersUnswers === 10) {
  console.log(true);
} else {
  console.log(false);
}
console.log(usersUnswers);

// // 2) Напишіть дві перевірки.
// // Якщо змінна test дорівнює true, виведіть 'Вірно', інакше виведіть 'Невірно'.
const test = "";
if (test === true) {
  console.log("вірно");
} else {
  console.log("Не вірно");
}
console.log(test);
// Якщо змінна test не дорівнює true, то виведіть 'Вірно', інакше виведіть 'Невірно'
const test = "";
if (test !== true) {
  console.log("вірно");
} else {
  console.log("Не вірно");
}
console.log(test);

// 3) Обчислити суму покупки з урахуванням знижки. Знижка 3% надається, якщо сума покупки більша за 500 грн., а знижка 5% - якщо сума покупки більша за 800 грн. Суму покупки вводить користувач.
// const cash = prompt(" Введіть суму покупки!", "");
for (let i = 0; i <= cash; i++) {
  if (i > 500) {
    console.log("Знижка на покупку 3%");
  } else if (i > 800) {
    console.log("Знижка на покупку 5%");
  } else if (i !== "number") {
    console.log("Введіть сумму покупки в цифрах ");
  }
}

// /************************************************* *****************/
// Таски на цикли.
// Кожне завдання вирішити циклами while, do..while.

// 1) Виведення чисел від 25 до 0 (порядок зменшення).
let j = 25;
const min = 0;
while (j >= min) {
  console.log(j);
  j--;
}

// 2) Виведення чисел від 10 до 50, які кратні 5.
let min2 = 10;
const max = 50;
while (min2 <= max) {
  if (min2 % 5 == 0) {
    console.log(min2);
  }
  min2++;
}

// 3) *Знайти суму чисел в межах від 1 до 100.
let sum;
let k = 1;
const maximum = 100;
while (k <= maximum) {
  sum = k + k;
  console.log(sum);
  k++;
}

// /************************************************* *****************/
