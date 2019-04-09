function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(2);
}

function myInfo() {

	info =  "Bardzo lubie czytać, jeżdzic na rowerze, pływać oraz  piec. Dużo czasu spędzam grajac w gry planszowe";
	navigator.notification.alert(info);
}