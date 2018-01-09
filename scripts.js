var salto = false;
var vidas = 3;
var balas = 3;
var milisegundos = 0;
var segundos =0;
var minutos = 0;
var jugando = false;
var tiempoDeJuego = null;

window.onload = function() {
	document.getElementById("vidas").innerHTML = "x"+vidas;
	document.getElementById("balas").innerHTML = "x"+balas;
	document.onkeydown = teclaPulsada;
}

var teclaPulsada = function(ev){
	var evento = ev || window.event;
	var tecla = evento.keyCode;
	if ((tecla == 13) && (jugando == false)){
		empezarJuego();
	} 
	if(jugando == true){
		switch(tecla){
			case 32: disparar(); break;
			case 87: jugador.saltar(); break;
			case 38: jugador.saltar(); break;
			case 65: jugador.detras(); break;
			case 37: jugador.detras(); break;
			case 68: jugador.delante(); break;
			case 39: jugador.delante(); break;
		}
	}
}

var empezarJuego = function(ev){
	document.getElementById("texto").innerHTML = "";
	jugando = true;
	tiempoDeJuego = window.setInterval(tiempo,10);
	window.setInterval(spamEnemigo,4000);
	jugador = new Jugador();
}

var saltar = function(){
	if (salto == false){
		salto = true;
		document.getElementById("img_jugador").src = "walk.png";
		document.getElementById("jugador").style.bottom = "200px";
		window.setTimeout(bajar, 600);
	}
}

var bajar = function(){
	document.getElementById("jugador").style.bottom = "60px";
	window.setTimeout(cambiarImagen, 500);
}

var cambiarImagen = function(){
	document.getElementById("img_jugador").src = "stop.png";
	salto = false;
}

var disparar = function(){
	if(balas > 0){
		jugador.disparar();
		balas = balas - 1;
		document.getElementById("balas").innerHTML = "x"+balas;
	}
}

var spamEnemigo = function(){
	let enemigo = new Enemigo();
	window.setInterval( function (){ enemigo.moverEnemigo() }, 40);
}

var tiempo = function(){
	if (milisegundos < 99){
		milisegundos++;
	} else {
		if (segundos < 59){
			segundos++;
			milisegundos = 00;
		} else {
			minutos++;
			segundos = 0;
			milisegundos = 00;
		}
	}
	document.getElementById("tiempo").innerHTML = minutos+":"+segundos+":"+milisegundos;
}