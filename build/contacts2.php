<?
if (array_key_exists('messageFF', $_POST)) {
    mail ("praca23@ukr.net",
        "заполнена контактная форма с ".$_SERVER['HTTP_REFERER'],
        "Имя: ".$_POST['nameFF']."\nEmail: ".$_POST['contactFF']."\nСообщение: ".$_POST['messageFF']);
    echo $_POST['nameFF'];
}
?>