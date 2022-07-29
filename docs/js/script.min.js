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

  // Pony Move-Type Animation
  let distance = PonyCoordinates.left - X;
  if ((distance > 450) || (distance < -450)) pony.classList = 'pony animation--fly';
  else if ((distance) <= 450 || (distance >= -450)) pony.classList = 'pony animation--trot';

  // Pony Boop Animation
  if (pony.classList.contains('animation--boop-fly','animation--boop')) return
  else if (pony.classList.contains('animation--fly')) {

    pony.classList.remove('animation--fly');
    pony.classList.add('animation--boop-fly');
  }
  else if(pony.classList.contains('animation--stand')) {

    pony.classList.remove('animation--stand');
    pony.classList.add('animation--boop');
  }

  // Pony Scale Animation
  if (PonyCoordinates.left < X) pony.style.transform = 'scale(-1, 1)';
  else if (PonyCoordinates.left > X) pony.style.transform = 'initial';

  PonyMove(PonyCoordinates);
});

function PonyMove(PonyCoordinates) {
  let animationTime = '5';
  style.innerHTML = `
    .pony {
      animation: pony-move ${animationTime}s linear 1;
      animation-fill-mode: forwards;
      animation-duration: 1s;
    }
  `;
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
    pony.style.left = X + 'px';
    pony.style.top = Y + 'px';
    setTimeout(() => {pony.classList = 'pony animation--stand'}, animationTime*200);
  }, 500);
}
