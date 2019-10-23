//Create Map
function createMap(el, center) {
    return new google.maps.Map(el, {
        center: center,
        zoom: 13,
    });
}

//Initiate Map
function initMap() {
    const berlin = new google.maps.LatLng(52.5007423, 13.4300188);
    const map = createMap(document.getElementById('map'), berlin);


    var currentOpenInfoWindow = null;


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


            //Close infoWindow if already open and open the relevant one
            marker.addListener('click', function() {
                if (currentOpenInfoWindow != null) {
                    currentOpenInfoWindow.close();
                }

                infoWindow.open(map, marker);
                currentOpenInfoWindow = infoWindow;
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