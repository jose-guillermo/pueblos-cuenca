var escenas = document.querySelectorAll(".escena");
console.log(escenas)
for (var i = 0; i < escenas.length; i++) {
    escenas[i].style.display = "none";
    var efecto = new Audio ("next-page.mp3");
}
escenas[0].style.display = "block";

escenas[0].addEventListener("click", cambiarEscena_1_2);
//funciones
function cambiarEscena_1_2() {
    escenas[0].style.display = "none";
    escenas[1].style.display = "block";
    efecto.play();
}

escenas[1].addEventListener("click", cambiarEscena_2_3);
function cambiarEscena_2_3() {
    escenas[1].style.display = "none";
    escenas[2].style.display = "block";
    efecto.play();
}

escenas[2].addEventListener("click", cambiarEscena_3_4);
function cambiarEscena_3_4() {
    escenas[2].style.display = "none";
    escenas[3].style.display = "block";
    efecto.play();
}

escenas[3].addEventListener("click", cambiarEscena_4_5);
function cambiarEscena_4_5() {
    escenas[3].style.display = "none";
    escenas[4].style.display = "block";
    efecto.play();
}

escenas[4].addEventListener("click", cambiarEscena_5_6);
function cambiarEscena_5_6() {
    escenas[4].style.display = "none";
    escenas[5].style.display = "block";
    efecto.play();
}

escenas[5].addEventListener("click", cambiarEscena_6_7);
function cambiarEscena_6_7() {
    escenas[5].style.display = "none";
    escenas[6].style.display = "block";
    efecto.play();
}

var enlace = document.getElementById("enlace");
enlace.addEventListener("click", volverInicio);
function volverInicio() {
    escenas[6].style.display = "none";
    escenas[0].style.display = "block";
    efecto.play();
}
var rep = new Audio ("pasodoble-cuenca.mp3")
var audio = document.getElementById("audio")
function reproductorMusica() {
    if (rep.paused) {
        rep.play();
        audio.className = "bi bi-pause-circle"
    } else {
        audio.className = "bi bi-play-circle";
        rep.pause();
    }
}
audio.addEventListener("click",reproductorMusica);