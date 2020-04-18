'use strict';
const China = 'китай';
const Chile = 'чили';
const Australia = 'австралия';
const India = 'индия';
const Jamaica = 'ямайка';
let price = [100, 250, 170, 80, 120];
let credits;
let whereToDeliver = prompt('Куда доставить ваш товар?');
if (whereToDeliver === null) {
  alert('Очень жаль!!!');
} else {
  whereToDeliver = whereToDeliver.toLowerCase();
  switch (whereToDeliver) {
    case China:
      credits = price[0];
      break;
    case Chile:
      credits = price[1];
      break;
    case Australia:
      credits = price[2];
      break;
    case India:
      credits = price[3];
      break;
    case Jamaica:
      credits = price[4];
      break;
      default :
      whereToDeliver = false;
      break;
  }
  if (whereToDeliver === false) {
    alert('В вашей стране доставка не доступна');
  } else {
    alert(`Доставка в ${whereToDeliver} будет стоить ${credits} кредитов`);
  }
}