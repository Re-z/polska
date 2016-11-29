    //google map
    function initMap() {
        var myLatLng = {lat: 39.6570100, lng: 19.8421400};

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 17,
            center: myLatLng,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            streetViewControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM
            }
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Hotel'
        });
    }
    initMap();

    function initMapSec() {
        var myLatLng = {lat: 39.6570100, lng: 19.8421400};

        var map = new google.maps.Map(document.getElementById('map2'), {
            zoom: 17,
            center: myLatLng,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            streetViewControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM
            }
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Hotel'
        });
    }
    initMapSec();
