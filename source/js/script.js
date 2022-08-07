"use strict";

function GetRandomNumber(min, max, fixedPointCount) {
  if (min < 0 || max < 0) return 0;

  if (max < min) [min, max] = [max, min];

  let randomNumber = Math.random() * (max - min) + min;

  return randomNumber.toFixed(fixedPointCount);
}
