"use strict";

function GetRandomNumber(startValue, endValue, fixedPointCount) {
  let randomNumber = Math.random() * (endValue - startValue) + startValue;

  return randomNumber.toFixed(fixedPointCount);
}
