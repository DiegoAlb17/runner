class Bala {

	constructor(posX,posY, element){
		this._posX = posX;
		this._posY = posY - 70;
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
		console.log("Se ejecuta moverBala");
		this.posX = this.posX + 10;
		this.element.style.left = this.posX + "px";
		if(this.posX >= screen.width){
			this.borrarBala();
		}
	}

	borrarBala(){
		console.log("Se ejecuta borrarBala");
		this.element.parentNode.removeChild(this.element);
	}
}