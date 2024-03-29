function createMap(el, center) {
    //Initiate Map
    return new google.maps.Map(el, {
        center: center,
        zoom: 13,
        mapTypeId: 'roadmap'
    });
}

function initAutocomplete() {
    const berlin = new google.maps.LatLng(52.5007423, 13.4300188);
    const map = createMap(document.getElementById('mainMap'), berlin);

    // Create the search box and link it to the UI element.
    const input = document.getElementById('pac-input');
    const searchBox = new google.maps.places.SearchBox(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
    });

    const infoWindow = new google.maps.InfoWindow({

    });


    let markers = [];

    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
        var places = searchBox.getPlaces();

        // Clear out the old markers.
        markers.forEach(function(marker) {
            marker.setMap(null);
        });
        markers = [];

        // Close current info window, if any
        infoWindow.close();

        if (places.length == 0) {
            return;
        }

        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry", place);
                return;
            }
            var icon = {
                url: place.icon,
                size: new google.maps.Size(25, 25),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            var marker = new google.maps.Marker({
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location,
                address: place.formatted_address,


            })

            var infoWindowContent =
                `
            <h6>${marker.title}</h6>
            <p>${marker.address}</p>
           
            <a href="contact.html" class="btn">Book a Guide</a>

            `;


            marker.addListener('click', function() {
                infoWindow.setContent(infoWindowContent);
                infoWindow.open(map, marker);
            });

            // Create a marker for each place.
            markers.push(marker);


            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }


        });

        map.fitBounds(bounds);



    });
}