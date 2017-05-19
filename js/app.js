var map;
var infoWindow;

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      mapTypeId: 'satellite',
      center: {lat: -18.422716, lng: -41.792933}
    });
    // Define the LatLng coordinates for the Water Spring Área
    var polygonCoords = [
      [
        {lat: -18.41884224439001, lng: -41.79019036378016},
        {lat: -18.41930844122728, lng: -41.79026057239864},
        {lat: -18.41954600433185, lng: -41.78939200487037},
        {lat: -18.41875316854447, lng: -41.78943828195189}
      ],
      [
        {lat: -18.42496847164817, lng: -41.7950402189401},
        {lat: -18.42472953587253, lng: -41.79571361413813},
        {lat: -18.42529740989818, lng: -41.7961371564427},
        {lat: -18.42564891236489, lng: -41.7957275007935}
      ]
    ];
    // Points
    var image = {
      url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      // This marker is 20 pixels wide by 32 pixels high.
      size: new google.maps.Size(20, 32),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      anchor: new google.maps.Point(0, 32)
    };
    // Define markers for Water Eye
    var markerPoints = [
      ['N126', -18.41901952438913, -41.79002710036961, 0],
      ['N127', -18.42509040016377, -41.79534702540499, 0]
    ];
    for (var i = 0; i < markerPoints.length; i++) {
      var markerPoint = markerPoints[i];
      var marker = new google.maps.Marker({
        position: {lat: markerPoint[1], lng: markerPoint[2]},
        map: map,
        icon: image,
        title: markerPoint[0],
        zIndex: markerPoint[3]
      });
    }
    // Define and construct the polygons
    var areas = new google.maps.Polygon({
        paths: polygonCoords,
        strokeColor: '#FFC107',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FFC107',
        fillOpacity: 0.20
    });
    //Constuct the map
    areas.setMap(map);          
}