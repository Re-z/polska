//google map
function initMap() {
    var myLatLng = {lat: 50.4261628094272, lng: 30.3705827982598};

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
    var myLatLng = {lat: 52.1992649, lng: 20.9529429};

    var map = new google.maps.Map(document.getElementById('map-sec'), {
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

