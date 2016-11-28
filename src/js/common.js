$(document).ready(function() {

	$('.recalls__slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        focusOnSelect: true
    })

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

//feedback script
    document.getElementById('feedback').onsubmit = function(){
        var http = new XMLHttpRequest();
        http.open("POST", "contacts.php", true);
        http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        http.send("nameFF=" + this.nameFF.value + "&contactFF=" + this.contactFF.value + "&messageFF=" + this.messageFF.value);
        http.onreadystatechange = function() {
            if (http.readyState == 4 && http.status == 200) {
                alert(http.responseText + ', Ваше сообщение получено!.\nАдминистрация ответит на него на протяжении 2х дней.\nСпасибо!');
            }
        };
        http.onerror = function() {
            alert('Извините, данные не передано');
        };
        return false;
    }

});