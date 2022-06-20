// function Circle(radius){
//     this.radius = radius;
//     }
    
    var bigCircle = new Circle(100);        // without new code returns undefined.
    var smallCircle = new Circle(2);

// console.log(bigCircle)
// console.log(smallCircle)


function getArea(){
    return (this.radius*this.radius*3.14);
}
    
function getCircumference(){
    var diameter = this.radius*2;
    var circumference = diameter*3.14;
    return circumference;
}

function Circle(radius){
    this.radius = radius;
    this.getArea = getArea;
    this.getCircumference = getCircumference;
}

console.log(bigCircle.getArea())
console.log(smallCircle.getCircumference())