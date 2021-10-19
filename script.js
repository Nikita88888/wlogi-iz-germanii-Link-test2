/*//Buttons

document.getElementById('youtube').onclick = function () {

    console.log("YouTube")
}

document.getElementById('instagram').onclick = function () {

    console.log("Instagram")
}

document.getElementById('tiktok').onclick = function () {

    console.log("tiktok")
}

document.getElementById('youtube_2').onclick = function () {

    console.log("YouTube 2")
}


//Display Größe

//-----Es muss noch ein weg gefunden werden-----

/*if (screen.width <= 285) {
    console.log(":(")
    document.getElementById('style').href = 'assets/css/285.css';
}
else if (screen.width <= 494) {
    console.log(":|")
    document.getElementById('style').href = 'assets/css/494.css';
}
else if (screen.width >= 495) {
    console.log(":)")
}*/



var style = document.getElementById('style');
var style_scroll_bar = document.getElementById('style_scroll_bar');
var style_bg = document.getElementById('style_bg');

if (confirm("Soll halloween geladen werden?") === true) {

    style.href = 'assets/halloween/halloween.css'
    style_scroll_bar.href = 'assets/halloween/halloween_scroll_bar.css'
    style_bg.href = ''
}