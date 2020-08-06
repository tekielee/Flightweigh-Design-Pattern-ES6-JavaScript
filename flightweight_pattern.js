class Circle {
	constructor(color) {
		this.color = color;
		this.x;
		this.y;
		this.radius;
	}
	
	setX(x) {
		this.x = x;
	}
	
	setY(y) {
		this.y = y;
	}
	
	setRadius(radius) {
		this.radius = radius;
	}
	
	draw() {
		console.log('Circle: Draw() [ Color : ] ' + this.color + ', x : ' + this.x + ', y : ' + this.y + ', radius : ' + this.radius);
	}
}

class ShapeFactory {
	constructor() {
		this.circleMap = {};
		this.colors = ['Red', 'Green', 'Blue', 'White', 'Black'];
	}
	
	getCircle(color) {
		this.circle = this.circleMap[color];
		
		if(this.circle == null)	{
			this.circle = new Circle(color);
			this.circleMap[color] = this.circle;
			console.log('Creating circle of color : ' + color);
		}
		
		return this.circle;
	}
	
	getRandomColor() {
		let randomColor = Math.floor(Math.random() * this.colors.length);
		return this.colors[randomColor];
	}
	
	getRandomX() {
		let randomX = Math.floor(Math.random() * 100);
		return randomX;
	}
	
	getRandomY() {
		let randomY = Math.floor(Math.random() * 100);
		return randomY;
	}
}

for(let i = 0; i < 20; ++i) {
	const shapeFactory = new ShapeFactory();
	const circle = shapeFactory.getCircle(shapeFactory.getRandomColor());
	circle.setX(shapeFactory.getRandomX());
	circle.setY(shapeFactory.getRandomY());
	circle.setRadius(100);
	circle.draw();
}
 