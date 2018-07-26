var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:  -33.4372, lng: -70.6506},
    zoom: 13
  });
}