'use strict';
let input = 0;
let total = 0;
while (input !== null) {
  input = prompt('Введите число');
  if (isNaN(input)) alert('Было введено не число, попробуйте еще раз');
  else if (input === null) break;
  else {
    input = Number(input);
    total = total + input;
  }
}
alert(`Общая сумма чисел равна ${total}`);