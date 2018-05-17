var mapCanvas = document.getElementById('map__canvas');

if (mapCanvas) {

  function initialize() {
    var myLatLng = new google.maps.LatLng(59.9388916, 30.3234393);
    var mapOptions = {
      center: myLatLng,
      zoom: 16.25,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
disableDefaultUI: true
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);

  var image = 'img/icon-map-marker.svg';
    var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
  }
google.maps.event.addDomListener(window, 'load', initialize);
}


var navMain = document.querySelector(".header__nav");
var navToggle = document.querySelector(".header__button");
var headerBg = document.querySelector(".header");
var headerTop = document.querySelector(".header__top");

navMain.classList.remove("header__nav--nojs");

if (navToggle) {
  navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("header__nav--closed")) {
      navMain.classList.remove("header__nav--closed");
      navMain.classList.add("header__nav--opened");
      headerBg.classList.remove("header__menu--closed");
      headerBg.classList.add("header__menu--opened");
      headerTop.classList.remove("header__top--closed");
      headerTop.classList.add("header__top--opened");
    } else {
      navMain.classList.remove("header__nav--opened");
      navMain.classList.add("header__nav--closed");
      headerBg.classList.remove("header__menu--opened");
      headerBg.classList.add("header__menu--closed");
      headerTop.classList.remove("header__top--opened");
      headerTop.classList.add("header__top--closed");
    }
  });
}
