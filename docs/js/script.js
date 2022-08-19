'use strict';

function GetRandomNumber(min = 0, max = 1, fixedPointCount = 2) {
  if (min < 0 || max < 0) return -1;
  if (max < min) [min, max] = [max, min];

  fixedPointCount < 0 ? fixedPointCount = 0 : fixedPointCount;

  let randomNumber = Math.random() * (max - min) + min;
  return randomNumber.toFixed(fixedPointCount);
}
