var thedasTypeOptions = {
    getTileUrl: function(coord, zoom) {
        var tileRange = 1 << zoom;
        if (coord.y < 0 || coord.y >= tileRange || coord.x < 0 || coord.x >= tileRange) {
            console.log(coord + ' out of range');
            return null;

        }
        return './img/' + zoom + '/tile_'+coord.x + '_'+coord.y+'.jpg';
    },
    tileSize: new google.maps.Size(668, 501),
    maxZoom: 5,
    minZoom: 1,
    radius: 1738000,
    name: 'Thedas'
};

var thedasMapType = new google.maps.ImageMapType(thedasTypeOptions);

function initialize() {
    var myLatlng = new google.maps.LatLng(0, 0);
    var mapOptions = {
        center: myLatlng,
        zoom: 1,
        streetViewControl: false,
        mapTypeControlOptions: {
            mapTypeIds: ['thedas']
        }
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    map.mapTypes.set('thedas', thedasMapType);
    map.setMapTypeId('thedas');
}


google.maps.event.addDomListener(window, 'load', initialize);
