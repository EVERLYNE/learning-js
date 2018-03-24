class Triangle {
	constructor(height,base){
		this.height=height;
		this.base=base;

	}
	calcArea(){
		return 0.5*(this.height*this.base);

	}
}
const triangle = new Triangle(14,28);
console.log(triangle.calcArea());