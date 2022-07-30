"use strict";

let pony = document.querySelector('.pony');
let style = document.querySelector('style');
let X = 0, Y = 0;

window.addEventListener('mousemove', function (event) {
  event = window.event || event;
  X = event.pageX;
  Y = event.pageY;
});

window.addEventListener('click', function () {
  let PonyCoordinates = pony.getBoundingClientRect();
  PonyTypeAnimation(PonyCoordinates);
  PonyMove(PonyCoordinates);
});

/* For touch devices */
window.addEventListener('touchstart', function () {
  let PonyCoordinates = pony.getBoundingClientRect();
  PonyTypeAnimation(PonyCoordinates);
  PonyMove(PonyCoordinates);
});

/* PonyTypeAnimation */
function PonyTypeAnimation(PonyCoordinates) {
  // Pony Move-Type Animation
  {
    let distanceX = PonyCoordinates.left - X;
    let distanceY = PonyCoordinates.top - Y;

    switch (true) {
      case (distanceX > 450) || (distanceX < -450):
      case (distanceY > 450) || (distanceY < -450):
        pony.classList = 'pony animation--fly'
      break;
      case (distanceX <= 450) || (distanceX >= -450):
      case (distanceY <= 450) || (distanceY >= -450):
        pony.classList = 'pony animation--trot'
      break;
    }
  }

  // Pony Boop Animation
  switch (true) {
    case pony.classList.contains('animation--boop-fly','animation--boop'):
      return;
    case pony.classList.contains('animation--fly'):
      pony.classList.remove('animation--fly');
      pony.classList.add('animation--boop-fly');
    break;
    case pony.classList.contains('animation--stand'):
      pony.classList.remove('animation--stand');
      pony.classList.add('animation--boop');
    break;
  }

  // Pony Scale Animation
  if (PonyCoordinates.left < X) pony.style.transform = 'scale(-1, 1)';
  else if (PonyCoordinates.left > X) pony.style.transform = 'initial';
}

/* PonyMove */
function PonyMove(PonyCoordinates) {
  let animationTime = '5';
  /*
  Добавляем в тэг "style" анимацию для блока "pony".
  We add animation for the "pony" block to the "style" tag.
  */
  if (style.textContent == '') {
    style.innerHTML = `
      .pony {
        animation: pony-move ${animationTime}s linear 1;
        animation-fill-mode: forwards;
        animation-duration: 1s;
      }
    `;
    /*
    Фреймы добавляем с задержкой в 500ms, иначе они не успеют обработаться и примениться.
    Frames are added with a delay of 500 ms, otherwise they will not have time to be processed and applied.
    */
    setTimeout(() => {
      style.innerHTML += `
        @keyframes pony-move {
          from {
            left: ${PonyCoordinates.left}px;
            top: ${PonyCoordinates.top}px;
          }
          to {
            left: ${X}px;
            top: ${Y}px;
          }
        }
      `;
      /*
      Указываем конечные координаты ( они-же будут начальными при следующей итерации анимации ).
      We specify the final coordinates ( they will also be the initial ones at the next iteration of the animation ).
      */
      pony.style.left = X + 'px';
      pony.style.top = Y + 'px';
      /*
      По окончании анимации приводим к дефолтным значениям и отчищаем тэг "style" от мусора.
      At the end of the animation, we bring it to the default values and clean the "style" tag from garbage.
      */
      setTimeout(() => {pony.classList = 'pony animation--stand'; style.innerHTML = '';}, animationTime*200);
    }, 500);
  }
  return
}

// <!DOCTYPE Liky>
