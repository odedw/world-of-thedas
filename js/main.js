//var thedasTypeOptions = {
//    getTileUrl: function(coord, zoom) {
//        var tileRange = 1 << zoom;
//        if (coord.y < 0 || coord.y >= tileRange || coord.x < 0 || coord.x >= tileRange) {
//            return null;
//
//        }
//        return './img/' + zoom + '/tile_'+coord.x + '_'+coord.y+'.jpg';
//    },
//    tileSize: new google.maps.Size(668, 501),
//    maxZoom: 5,
//    minZoom: 0,
//    name: 'Thedas'
//};
//
//var thedasMapType = new google.maps.ImageMapType(thedasTypeOptions);
//
//function initialize() {
//    var myLatlng = new google.maps.LatLng(0, 0);
//    var mapOptions = {
//        center: myLatlng,
//        zoom: 1,
//        streetViewControl: false,
//        mapTypeControlOptions: {
//            mapTypeIds: ['thedas']
//        }
//    };
//
//    var map = window.map = new google.maps.Map(document.getElementById('map-canvas'),
//        mapOptions);
//    map.mapTypes.set('thedas', thedasMapType);
//    map.setMapTypeId('thedas');
//
//    // Bounds for North America
////    var allowedBounds = new google.maps.LatLngBounds(
////        new google.maps.LatLng(28.70, -127.50),
////        new google.maps.LatLng(48.85, -55.90));
////
////    // Listen for the dragend event
////    google.maps.event.addListener(map, 'drag', function() {
////        if (allowedBounds.contains(map.getCenter())) return;
////
////        // Out of bounds - Move the map back within the bounds
////
////        var c = map.getCenter(),
////            x = c.lng(),
////            y = c.lat(),
////            maxX = allowedBounds.getNorthEast().lng(),
////            maxY = allowedBounds.getNorthEast().lat(),
////            minX = allowedBounds.getSouthWest().lng(),
////            minY = allowedBounds.getSouthWest().lat();
////
////        if (x < minX) x = minX;
////        if (x > maxX) x = maxX;
////        if (y < minY) y = minY;
////        if (y > maxY) y = maxY;
////
////        map.setCenter(new google.maps.LatLng(y, x));
////    });
//}
//
//
//google.maps.event.addDomListener(window, 'load', initialize);
// create a map in the "map" div, set the view to a given place and zoom
var southWest = L.latLng(-66,-180),
    northEast = L.latLng(85, 180),
    bounds = L.latLngBounds(southWest, northEast);
var map = L.map('map-canvas', {maxBounds:bounds}).setView([0, 0], 2);

// add an OpenStreetMap tile layer
L.tileLayer('img/{z}/tile_{x}_{y}.png', {
    attribution: 'Dragon Age content is trademarked by EA International (Studio And Publishing) Ltd.',
    continuousWorld: true,
    noWrap: true
//    tileSize:668
}).addTo(map);

map.on('click', function(e) {
    console.log(e.latlng);
});
//L.tileLayer('/img/{z}/tile_{x}_{y}.jpg', {
//    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//    maxZoom: 5
//}).addTo(map);