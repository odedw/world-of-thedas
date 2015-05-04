// create a map in the "map" div, set the view to a given place and zoom
var southWest = L.latLng(-66,-179.9),
    northEast = L.latLng(85, 179.9),
    bounds = L.latLngBounds(southWest, northEast);
var map = L.map('map-canvas', {maxBounds:bounds, maxZoom:5, minZoom:1}).setView([0, 0], 3);

// add an OpenStreetMap tile layer
L.tileLayer('img/{z}/tile_{x}_{y}.png', {
    attribution: 'Dragon Age content is trademarked by EA International (Studio And Publishing) Ltd.',
    continuousWorld: true,
    noWrap: true,
    errorTileUrl: 'img/error.png',
    bounds:bounds
//    tileSize:668
}).addTo(map);

map.on('click', function(e) {
    console.log(e.latlng.lat + "," + e.latlng.lng);
});
