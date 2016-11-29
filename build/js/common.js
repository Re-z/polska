$(document).ready(function() {

    //feedback script
    document.getElementById('feedback').onsubmit = function(){
        var http = new XMLHttpRequest();
        http.open("POST", "contacts2.php", true);
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
    };

	$('.recalls__slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        focusOnSelect: true
    })

});