class Shape {
    constructor(text, text_color, shape_color) {
        this.text = text;
        this.text_color = text_color;
        this.shape_color = shape_color;
    }
    setColor(color) {
        this.shape_color = color;
    }
}

class Triangle extends Shape {
    render() {
        return (`<polygon points="150, 18 244, 182 56, 182" fill="${this.shape_color}" />`);
    }
}

const shape = new Triangle();
shape.setColor("blue");
console.log (shape.render());
