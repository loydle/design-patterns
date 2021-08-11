
function shapeFactory() {
  this.createShape = (shapeType) => {
    let shape;
    switch(shapeType) {
      case 'rectangle':
        shape = new Rectangle();
        break;
      case 'circle':
        shape = new Circle();
        break;
      default:
        shape = new Rectangle();
    }
    return shape;
  }
}

function Rectangle(){
  this.draw = () => { console.log('Drawing a rectangle.') }
}

function Circle(){
  this.draw = () => { console.log('Drawing a circle.') }
}


const factory = new shapeFactory();
const rectangle = factory.createShape('rectangle');
const circle = factory.createShape('circle');

rectangle.draw();
circle.draw();

