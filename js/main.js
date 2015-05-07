// create a map in the "map" div, set the view to a given place and zoom
var southWest = L.latLng(-66,-179.9),
    northEast = L.latLng(85, 179.9),
    bounds = L.latLngBounds(southWest, northEast);
var map = L.map('map-canvas', {maxBounds:bounds, maxZoom:5, minZoom:1}).setView([0, 0], initialZoom);

// add an OpenStreetMap tile layer
L.tileLayer('img/{z}/tile_{x}_{y}.jpg', {
    attribution: 'Dragon Age content is trademarked by EA International (Studio And Publishing) Ltd.',
    continuousWorld: true,
    noWrap: true,
    errorTileUrl: 'img/error.png',
    bounds:bounds
//    tileSize:668
}).addTo(map);
//var poiNation = "Orlais";
//var poi = [
//        "Gherlen's Pass",
//];
//var poiIndex = 0;
//map.on('click', function(e) {
//    console.log('{value: "'+poi[poiIndex]+'", data:{"nation":"'+poiNation+'","zoom": '+map.getZoom()+', "latLng": L.latLng('+ e.latlng.lat+','+ e.latlng.lng+')}},');
//    poiIndex++;
//});
var marker;
$('#search-input').autocomplete({
    lookup: places,
    onSelect: function (suggestion) {
        map.setView(suggestion.data.latLng, suggestion.data.zoom);
        marker = marker || L.marker([0,0]).addTo(map);
        marker.setLatLng(suggestion.data.latLng);
        marker.update();
    },
    triggerSelectOnValidInput: false
});

$('#search-input').autocomplete().setOptions({
    formatResult: function (suggestion, currentValue) {
        var htmlSafeString = suggestion.value
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');

        var pattern = '(' + currentValue.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") + ')';

        htmlSafeString = htmlSafeString.replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>');
        if (suggestion.data.nation){
            htmlSafeString += '<small class="nation"> '+suggestion.data.nation+'</small>';
        }
        return htmlSafeString;
    }
});

$('#show-modal').click(function(){
    mixpanel.track("About Click");
});

mixpanel.track("View");