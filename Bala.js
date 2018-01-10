class Bala {

	constructor(posX,posY, orientacion){


		if (orientacion == 1){
			this._orientacion = orientacion;
			this._posX = posX;
			this._posY = posY + 30;
			this._element = document.createElement("div");
			console.log("Se genero una bala");
			var imagen = document.createElement("img");
			imagen.src = "llama.png";
			imagen.style.width = "40px";
			this._element.style.position = "absolute";
			this._element.style.top = (posY + 30) + "px";
			this._element.style.left = (posX) + "px";
			this._element.appendChild(imagen);
			document.body.appendChild(this._element);
		} else if (orientacion == 0){
			this._orientacion = orientacion;
			this._posX = posX;
			this._posY = posY + 30;
			this._element = document.createElement("div");
			console.log("Se genero una bala");
			var imagen = document.createElement("img");
			imagen.src = "llama.png";
			imagen.style.width = "40px";
			this._element.style.position = "absolute";
			this._element.style.transform = "scaleX(-1)";
			this._element.style.top = (posY + 30) + "px";
			this._element.style.left = (posX) + "px";
			this._element.appendChild(imagen);
			document.body.appendChild(this._element);
		}
	}

	get orientacion(){
		return this._orientacion;
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

	moverBala(){
		if(this.orientacion == 1){
			this.posX = this.posX + 10;			
		} else if(this.orientacion == 0) {
			this.posX = this.posX - 10;
		}

		this.element.style.left = this.posX + "px";
		if(this.posX >= screen.width){
			this.borrarBala();
		}
	}

	borrarBala(){
		this.element.parentNode.removeChild(this.element);
	}
}