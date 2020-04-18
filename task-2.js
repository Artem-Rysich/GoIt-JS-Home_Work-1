'use strict';
const total = 100;
const ordered = 50;
let massage;
if (ordered > total) {
  massage = 'На складе недостаточно твоаров!';
} else {
  massage = 'Заказ оформлен, с вами свяжется менеджер';
}
console.log(massage);
