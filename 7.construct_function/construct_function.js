function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    }
}

const cir = Circle(5);
console.log(radius);

const circle = new Circle(10);
console.log(circle);