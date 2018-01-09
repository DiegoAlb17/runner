class Enemigo{

	constructor(){
		this._posX = screen.width;
		this._posY = 60;
		this._element = document.createElement("div");
		console.log("Se genero un enemigo");
		var imagen = document.createElement("img");
		imagen.src = "zombi.gif";
		imagen.style.width = "90px";
		this._element.style.position = "absolute";
		this._element.style.bottom = "60px";
		this._element.style.left = screen.width + "px";
		this._element.style.transform = "scaleX(-1)";
		this._element.appendChild(imagen);
		document.body.appendChild(this._element);

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

	moverEnemigo(){
		console.log("Se ejecuta moverEnemigo");
		this.posX = this.posX - 10;
		this.element.style.left = this.posX + "px";
		if(this.posX <= (-80)){
			this.borrarEnemigo();
		}
	}

	borrarEnemigo(){
		console.log("Se ejecuta borrarEnemigo")
		this.element.parentNode.removeChild(this.element);
	}


}