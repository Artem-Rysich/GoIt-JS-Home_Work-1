'use strict';
let credits = 23580;
const pricePerDroid = 3000;
let theNumber = prompt('Какое количество  жилаете купить?');
const totalPrice = theNumber * pricePerDroid;
let massage;
if (theNumber === null) {
  massage = 'Отменено пользователем!';
} else if (totalPrice > credits) {
  message = 'Недостаточно средств на счету!';
} else {
  theNumber = Number(theNumber);
  credits = credits - totalPrice;
  massage = `Вы купили ${theNumber} дроидов, на счету осталось ${credits}.`;
}
console.log(massage);
