function initMap() {
    console.log(__message);

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {
            lat: 52.5032721,
            lng: 13.4194204
        }
    });
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}

var locations = [{
    lat: 52.4950568,
    lng: 13.4230609
}, {

    lat: 52.496312,
    lng: 13.422184
}, {

    lat: 52.497876,
    lng: 13.437491
}, ];