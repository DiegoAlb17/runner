class Jugador{

	constructor(){
		this._salto = false;
		this._posX = 10;
		this._posY = 60;
		this._element = document.getElementById('jugador');
		console.log("Se genero un jugador");
		this._imagen = document.createElement("img");
		this._imagen.src = "stop.png";
		this._imagen.style.width = "90px";
		this._element.style.position = "absolute";
		this._element.style.bottom = this._posY +"px";
		this._element.style.left = "10px";
		this._element.appendChild(this._imagen);
	}

	get salto(){
		return this._salto;
	}

	set salto(salto){
		this._salto = salto;
	}

	get posY(){
		return this._posY;
	}

	set posY(posY){
		this._posY = posY;
	}

	get posX(){
		return this._posX;
	}

	set posX(posX){
		this._posX = posX;
	}

	get element(){
		return this._element;
	}

	set element(element){
		this._element = element;
	}

	get image(){
		return this._image;
	}

	set image(image){
		this._image = image;
	}

	get imagen(){
		return this._imagen;
	}

	set imagen(imagen){
		this._imagen = imagen;
	}

	saltar(){
		if (this.salto == false){
			this.salto = true;
			var that = this;
			this.imagen.src = "walk.png";
			this.posY = this.posY + 150;
			this.element.style.bottom = this.posY + "px";
			window.setTimeout(function(){
				that.abajo();
			}, 600);
		}
	}

	abajo(){
		var that = this;
		this.posY = this.posY - 150;
		this.element.style.bottom = this.posY + "px";
		window.setTimeout(function(){
			that.imagen.src = "stop.png";
			that.salto = false;
		}, 500);
	}

	delante(){
		this.posX = (this.posX + 10);
		this.element.style.left = this.posX + "px";
		this.imagen.style.transform = "scaleX(1)";
	}

	detras(){
		this.posX = (this.posX - 10);
		this.element.style.left = this.posX + "px";
		this.imagen.style.transform = "scaleX(-1)";
	}

	disparar(){
		let bala = new Bala(this.element.offsetLeft, this.element.offsetTop);
		window.setInterval( function (){ bala.moverBala() }, 10);
}

}