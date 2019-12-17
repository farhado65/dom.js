alert = function() {
    var planet = document.querySelector("#blueplanet");

    planet.innerHTML = "Aliens approaching!";
    planet.style.color = "red";
}
clear = function() {
    var planet = document.querySelector("#blueplanet");
    planet.innerHTML = "Nothing to report";
    planet.style.color = "black";
}
document.querySelector("#blueplanet").onmouseover = alert;
document.querySelector("#blueplanet").onmouseout = clear;
