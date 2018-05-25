var mapCanvas = document.getElementById("map__canvas");

if (mapCanvas) {

  function initialize() {
    var myLatLng = new google.maps.LatLng(59.9388916, 30.3234393);
    var marker = new google.maps.LatLng(59.938528, 30.323401);
    var mapOptions = {
      center: myLatLng,
      zoom: 16.25,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
disableDefaultUI: true
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);

  var image = "img/icon-map-marker.svg";
    var beachMarker = new google.maps.Marker({
    position: marker,
    map: map,
    icon: image
  });
  }
google.maps.event.addDomListener(window, "load", initialize);
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
  navToggle.addEventListener("click", function() {
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
