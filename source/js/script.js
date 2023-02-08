'use strict';

const OFFERS_COUNT = 10
let verificationArr = [];

const PRICE = {
  MIN: 1000,
  MAX: 5000,
};

const TYPE = ['Palace', 'Flat', 'House', 'Bungalow'];

const ROOMS = {
  MIN: 1,
  MAX: 10,
};

const GUESTS = {
  MIN: 1,
  MAX: 10,
};

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'Wifi',
  'Dishwasher',
  'Parking',
  'Washer',
  'elevator',
  'conditioner',
];

const TITLES = [
  'Сдам квартиру',
  'Сдам дом',
  'Сдам сарай',
  'Сдам Яхту',
  'Сдам лофт',
  'Сдам Студию',
  'Сдам гараж',
  'Сдам самолёт',
  'Сдам жену в рабство',
  'Выпью с вами пива',
];

const locations = {
  x : GetRandomNumber(35.65000, 35.70000, 5),
  y : GetRandomNumber(139.70000, 139.80000, 5),
}

const offers = new Array(OFFERS_COUNT).fill().map(() => CreateOffer());

console.log(offers);

function GetRandomNumber(min = 0, max = 1, fixedPointCount = 0) {
  while (true) {
    // Валидация и нормализация переданных данных
    // Validation and normalization of transmitted data
    if (verificationArr.length >= OFFERS_COUNT) verificationArr = [];
    if (min < 0 || max < 0) return -1;
    if (max < min) [min, max] = [max, min];
    fixedPointCount < 0 ? fixedPointCount = 0 : fixedPointCount;

    // Генерация рандомного числа
    // Random number generation
    const randomNumber = (Math.random() * (max - min) + min).toFixed(fixedPointCount);

    // Проверка на уникальность полученных чисел
    // Checking for the uniqueness of the received numbers
    if (verificationArr.every((number) => number != randomNumber)) {
      verificationArr.push(randomNumber)
      return randomNumber;
    }
  }
}

function GetRandomArrElem(arr) {
  return arr[GetRandomNumber(0, arr.length - 1)];
}

function CreateOffer() {
  return {
    author: CreateAuthor(),
    offer : CreateDescription(),
  };
}

function CreateAuthor() {
  const obj = new Object();
  obj.avatar = `img/avatars/user0${GetRandomNumber(1, OFFERS_COUNT)}.png`;
  return obj
}

// function CreateDescription() {
//   const obj = new Object();

//   obj.title = GetRandomArrElem(TITLES);
//   obj.address = [locations.x, locations.y];
//   obj.price = GetRandomNumber(1000, 20000);
//   obj.type = GetRandomArrElem(TYPE);
//   obj.rooms = GetRandomNumber(ROOMS.MIN, ROOMS.MAX);
//   obj.guests = GetRandomNumber(GUESTS.MIN, GUESTS.MAX);
//   obj.checkin = GetRandomArrElem(CHECKIN);
//   obj.checkout = GetRandomArrElem(CHECKOUT);
//   obj.features = GetRandomArrElem(FEATURES);
//   obj.description = '';
//   obj.photos = '';
//   obj.location = '';

//   return obj
// }

// Структура каждого объекта должна быть следующей:

// author, объект — описывает автора. Содержит одно поле:

// avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png,
// где {{xx}} — это число от 1 до 10 с ведущим нулём. Например, 01, 02 и т. д. Адреса изображений не повторяются.

// offer, объект — содержит информацию об объявлении. Состоит из полей:

// title, строка — заголовок предложения. Придумайте самостоятельно.

// address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат
// по маске {{location.x}}, {{location.y}}.

// price, число — стоимость. Случайное целое положительное число.

// type, строка — одно из четырёх фиксированных значений: palace, flat, house или bungalow.

// rooms, число — количество комнат. Случайное целое положительное число.

// guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.

// checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

// checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

// features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner.
// Значения не должны повторяться.

// description, строка — описание помещения. Придумайте самостоятельно.

// photos, массив строк — массив случайной длины из значений: http://o0.github.io/assets/images/tokyo/hotel1.jpg,
// http://o0.github.io/assets/images/tokyo/hotel2.jpg, http://o0.github.io/assets/images/tokyo/hotel3.jpg.

// location, объект — местоположение в виде географических координат. Состоит из двух полей:

// x, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000

// y, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000
