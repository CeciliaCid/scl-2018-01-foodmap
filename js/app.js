var map;
var infowindow;
    var foodOption = document.getElementById("inputGroupSelect");
    var optionSelected = foodOption.options[foodOption.selectedIndex].value;
console.log(foodOption);

function initMap() {
  navigator.geolocation.getCurrentPosition(function(pos){
    lat = pos.coords.latitude;
    lon = pos.coords.longitude;
    var myLatIng = new google.maps.LatLng(lat, lon);
    var map0ptions = {
      center: myLatIng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.MAP
    };
    map = new google.maps.Map(document.getElementById('map'), map0ptions, {
    zoom: 13
  });

  infowindow = new google.maps.InfoWindow();
  
  var request ={
    location : myLatIng,
    radius: 5000,
    type:  ['restaurant'],
    keyword: optionSelected
    
  };
  console.log(request);
  var service = new google.maps.places.PlacesService(map);

   service.nearbySearch(request, function(results, status) {
     if (status === google.maps.places.PlacesServiceStatus.OK) {
       for (var i = 0; i < results.length; i++) {
         crearMarcador(results[i]);
       }
     }
   });
 });
}

 function crearMarcador(place)
 {
   // Creamos un marcador
   var marker = new google.maps.Marker({
     map: map,
     position: place.geometry.location
   });
   // Asignamos el evento click del marcador
   google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
  }