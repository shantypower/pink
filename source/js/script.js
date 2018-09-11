var myMap = document.getElementById("map__canvas");

if (myMap) {

  ymaps.ready(function () {
    myMap = new ymaps.Map('map__canvas', {
      center: [59.938585, 30.322413],
      zoom: 16.25
    }, {
        searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'ул. Большая Конюшенная, 19/8',
        balloonContent: 'ул. Большая Конюшенная, 19/8'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/icon-map-marker.svg',
          // Размеры метки.
          iconImageSize: [36, 36],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [36, -36]
        }),

    myMap.geoObjects
      .add(myPlacemark)
  });
}

  var navMain = document.querySelector(".header__nav");
  var navToggle = document.querySelector(".header__button");
  var headerBg = document.querySelector(".header");
  var headerTop = document.querySelector(".header__top");

  navMain.classList.remove("header__nav--nojs");
  headerTop.classList.remove("header__top--opened");
  headerTop.classList.remove("header__top--nojs");
  navToggle.classList.remove("header__button--hidden");

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      if (navMain.classList.contains("header__nav--closed")) {
        navMain.classList.remove("header__nav--closed");
        navMain.classList.add("main-nav__list--opened");
        headerBg.classList.remove("header--closed");
        headerBg.classList.add("header__menu--opened");
        headerTop.classList.remove("header__top--closed");
        headerTop.classList.add("header__top--opened");
      } else {
        navMain.classList.remove("main-nav__list--opened");
        navMain.classList.add("header__nav--closed");
        headerBg.classList.remove("header__menu--opened");
        headerBg.classList.add("header--closed");
        headerTop.classList.remove("header__top--opened");
        headerTop.classList.add("header__top--closed");
      }
    });
  }
