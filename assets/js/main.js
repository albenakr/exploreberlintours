function initMap() {
    console.log(__message)
        //Map
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 52.5007423,
            lng: 13.4300188
        },
        zoom: 13
    });



    // Loop through markers
    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);

    }

    //Add Marker Function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coordinates,
            map: map,

        });

        //Check for content
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });
        }
    }

    //Create Tour Path
    var TourPath = new google.maps.Polyline({
        path: TourPlanCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    TourPath.setMap(map);

}