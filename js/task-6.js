/**
 * Задание 6
 *
 * Напиши скрипт со следующим функционалом:
 *
 * При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив
 * чисел numbers.
 * Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
 * После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и
 * записать ее в переменную total. Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
 * 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. Если хочешь, в случае
 * некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в
 * массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.
 *
 * let input;
 * const numbers = [];
 * let total = 0;
*/

 let input;
 let total = 0;
 const numbers = [];
 let convertedInput = 0;
 let saftyCounter = 100; // I do not like endless loops

 do {
   input = prompt("Input a number or press 'Cancel' to finish.");
   if (null === input) {
     break;
   }
   convertedInput = Number(input);
   if (isNaN(convertedInput)) {
     alert(`Было введено не число (${input}), попробуйте еще раз`);
     continue;
   }
   numbers.push(convertedInput);
   saftyCounter--;
 } while (saftyCounter > 0);

 if (numbers.length > 0) {
   for (const number of numbers) {
     total += number;
   }
   console.log(`Общая сумма чисел равна ${total}`);
 } else {
   console.log("No numbers entered.");
 }
