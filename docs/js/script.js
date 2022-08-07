"use strict";

function GetRandomNumber(min, max, fixedPointCount) {
  let randomNumber = Math.random() * (max - min) + min;

  return randomNumber.toFixed(fixedPointCount);
}
