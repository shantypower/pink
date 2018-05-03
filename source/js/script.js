function initialize() {
  var mapCanvas = document.getElementById('map__canvas');
  var myLatLng = new google.maps.LatLng(59.936148, 30.322917);
  var mapOptions = {
    center: myLatLng,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
disableDefaultUI: true
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);

var image = '../img/icon-map-marker.png';
  var beachMarker = new google.maps.Marker({
  position: myLatLng,
  map: map,
  icon: image
});
}
google.maps.event.addDomListener(window, 'load', initialize);

  var navMain = document.querySelector(".header__nav");
  var navToggle = document.querySelector(".header__button");

  navMain.classList.remove("header__nav--nojs");

  navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("header__nav--closed")) {
      navMain.classList.remove("header__nav--closed");
      navMain.classList.add("header__nav--opened");
    } else {
      navMain.classList.add("header__nav--closed");
      navMain.classList.remove("header__nav--opened");
    }
  });

