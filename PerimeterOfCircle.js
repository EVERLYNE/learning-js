class Circle{
constructor(radius){
	this.radius=radius;	
}
calcperimeter(){
	return 2*3.142*(this.radius);
	}
}
const circle = new Circle(10);
console.log(circle.calcperimeter());