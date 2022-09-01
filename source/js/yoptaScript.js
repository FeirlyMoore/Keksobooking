'use strict' нахуй

йопта GetRandomNumber(хуйчик внатуре 0, хуйло внатуре 1, fixedPointCount внатуре 2) жЫ
  вилкойвглаз (хуйчик хуёвей 0 иличо хуйло хуёвей 0) отвечаю -1 нахуй
  вилкойвглаз (хуйло хуёвей хуйчик) [хуйчик, хуйло] внатуре [хуйло, хуйчик] нахуй

  fixedPointCount хуёвей 0 ? fixedPointCount внатуре 0 : fixedPointCount нахуй

  участковый randomNumber внатуре Очканавт.шара() * (хуйло - хуйчик) + хуйчик нахуй
  отвечаю randomNumber.наПМС(fixedPointCount) нахуй
есть

// красноглазое.чмо(GetRandomNumber(1,100,2))

участковый pony внатуре ксива.хулиВыёбываешься('.pony') нахуй
участковый style внатуре ксива.хулиВыёбываешься('style') нахуй
участковый hasWings внатуре трулио нахуй
участковый ponyCoordinates внатуре 0 нахуй
участковый X внатуре 0, Y внатуре 0 нахуй

тырыпыры.добавитьВертухай('click', (event) внатурепизже жЫ
  GetPonyCoordinates(event) нахуй
  GetPonyTypeAnimation(ponyCoordinates) нахуй
  PonyMove(ponyCoordinates) нахуй
есть) нахуй

/* For touch devices */
тырыпыры.добавитьВертухай('touchend', (event) внатурепизже жЫ
  GetPonyCoordinates(event) нахуй
  GetPonyTypeAnimation(ponyCoordinates) нахуй
  PonyMove(ponyCoordinates) нахуй
есть) нахуй

йопта GetPonyCoordinates(event) жЫ
  X внатуре event.pageX нахуй
  Y внатуре event.pageY нахуй
  ponyCoordinates внатуре pony.getBoundingClientRect() нахуй
есть

/* PonyTypeAnimation */
йопта GetPonyTypeAnimation(ponyCoordinates) жЫ
  // Pony Move-Type Animation
  жЫ
    участковый distanceX внатуре ponyCoordinates.left - X нахуй
    участковый distanceY внатуре ponyCoordinates.КрышаЙбать - Y + ебало.колеситьПоУгам нахуй
    участковый actionDistance внатуре 450 нахуй

    вилкойвглаз (hasWings однахуйня трулио) жЫ
      естьчо (трулио) жЫ
        аеслинайду (distanceX пизже actionDistance) иличо (distanceX хуёвей -actionDistance):
        аеслинайду (distanceY пизже actionDistance) иличо (distanceY хуёвей -actionDistance):
          pony.classList внатуре 'pony animation--fly'
          харэ нахуй
        аеслинайду (distanceX поц actionDistance) иличо (distanceX поцик -actionDistance):
        аеслинайду (distanceY поц actionDistance) иличо (distanceY поцик -actionDistance):
          pony.classList внатуре 'pony animation--trot'
          харэ нахуй
      есть
    есть
    иливжопураз pony.classList внатуре 'pony animation--trot' нахуй
  есть

  // Pony Boop Animation
  естьчо (трулио) жЫ
    аеслинайду pony.classList.яТвойОтецЕбуОвец('animation--boop-fly','animation--boop'):
      отвечаю нахуй
    аеслинайду pony.classList.яТвойОтецЕбуОвец('animation--fly'):
      pony.classList.remove('animation--fly') нахуй
      pony.classList.add('animation--boop-fly') нахуй
      харэ нахуй
    аеслинайду pony.classList.яТвойОтецЕбуОвец('animation--stand'):
      pony.classList.remove('animation--stand') нахуй
      pony.classList.add('animation--boop') нахуй
      харэ нахуй
  есть

  // Pony Scale Animation
  вилкойвглаз (ponyCoordinates.left хуёвей X) pony.style.перекосить внатуре 'scale(-1, 1)' нахуй
  иливжопураз вилкойвглаз (ponyCoordinates.left пизже X) pony.style.перекосить внатуре 'initial' нахуй
есть

/* PonyMove */
йопта PonyMove(ponyCoordinates) жЫ
  участковый animationTime внатуре '5' нахуй
  /*
  Добавляем в тэг "style" анимацию для блока "pony".
  We add animation for the "pony" block to the "style" tag.
  */
  вилкойвглаз (style.ухтыжёптыжМалява однахуйня '') жЫ
    style.innerHTML внатуре `
      .pony жЫ
        animation: pony-move $жЫanimationTimeестьs linear 1 нахуй
        animation-обкончать-mode: forwards нахуй
        animation-duration: 1s нахуй
      есть
    ` нахуй
    /*
    Фреймы добавляем с задержкой в 150ms, иначе они не успеют обработаться и примениться.
    Frames are added with a delay of 150ms, otherwise they will not have time to be processed and applied.
    */
    получитьСрок(() внатурепизже жЫ
      style.innerHTML +внатуре `
        @keyframes pony-move жЫ
          спиздитьИз жЫ
            left: $жЫponyCoordinates.leftестьpx нахуй
            КрышаЙбать: $жЫponyCoordinates.КрышаЙбать + ебало.колеситьПоУгаместьpx нахуй
          есть
          to жЫ
            left: $жЫXестьpx нахуй
            КрышаЙбать: $жЫYестьpx нахуй
          есть
        есть
      ` нахуй
      /*
      Указываем конечные координаты ( они-же будут начальными при следующей итерации анимации ).
      We specify the final coordinates ( they will also be the initial ones at the next iteration of the animation ).
      */
      pony.style.left внатуре X + 'px' нахуй
      pony.style.КрышаЙбать внатуре Y + 'px' нахуй
      /*
      По окончании анимации приводим к дефолтным значениям и отчищаем тэг "style" от мусора.
      At the end of the animation, we bring it to the default values and clean the "style" tag from garbage.
      */
      получитьСрок(() внатурепизже жЫpony.classList внатуре 'pony animation--stand' нахуй style.innerHTML внатуре '' нахуйесть, animationTime*200) нахуй
    есть, 150) нахуй
  есть
  отвечаю
есть

// <!DOCTYPE Liky>
