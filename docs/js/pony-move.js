let pony = document.querySelector('.pony');
let style = document.querySelector('style');
let X = 0, Y = 0;

window.addEventListener('mousemove', function (event) {
  event = window.event || event;
  X = event.pageX;
  Y = event.pageY;
});



window.addEventListener('click', function () {

  if (pony.classList.contains('animation--boop-fly','animation--boop')) return

  else if (pony.classList.contains('animation--fly')) {
    pony.classList.remove('animation--fly');
    pony.classList.add('animation--boop-fly');
    setTimeout(() => {RemoveBoopAnimation('boop-fly', 'fly')}, 1000);
  }

  else if(pony.classList.contains('animation--stand')) {
    pony.classList.remove('animation--stand');
    pony.classList.add('animation--boop');
    setTimeout(() => {RemoveBoopAnimation('boop', 'stand')}, 1000);
  }

  function RemoveBoopAnimation(boopType, selector) {
    console.log(boopType, selector);
    pony.classList.remove(`animation--${boopType}`);
    pony.classList.add(`animation--${selector}`);
  }
});

function PonyMove() {
  pony.style.left = X + 30 + 'px';
  pony.style.top = Y + 'px';

  setTimeout(PonyMove, 0);
}

PonyMove();

//   setInterval(() => {
//   let PonyCoordinates = pony.getBoundingClientRect();

//   function PonyMove(X, Y) {
//     pony.style.left = X + 30 + 'px';
//     pony.style.top = Y + 'px';

//     let dynamicStyles = null;

//     function addAnimation(body) {
//       if (!dynamicStyles) {
//         dynamicStyles = document.createElement('style');
//         dynamicStyles.type = 'text/css';
//         document.head.appendChild(dynamicStyles);
//       }

//       dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
//     }

//     addAnimation(`
//           @keyframes move-eye {
//             from {
//               left: ${PonyCoordinates.left};
//               top: ${PonyCoordinates.top};
//              }
//             to {
//               left: ${X}px;
//               top: ${Y}px;
//             }
//           }
//         `);

//     setTimeout(PonyMove, 5000);
//   }
//   PonyMove(X, Y);
// }, 2000);
