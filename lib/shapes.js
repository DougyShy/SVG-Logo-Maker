class Shape {
    constructor(text, text_color, shape_color) {
        this.text = text;
        this.text_color = text_color;
        this.shape_color = shape_color;
    }
    setText(text) {
        this.text = text;
    }
    setTextColor(color) {
        this.text_color = color;
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

class Circle extends Shape {

    render() {
        return (`<circle cx="150" cy="100" r="80" fill="${this.shape_color}" />`);
    }
}

class Square extends Shape {

    render() {
        return (`<rect x="75" y="25" width="150" height="150" fill="${this.shape_color}" />`);
    }
}

module.exports = {
    Triangle,
    Circle,
    Square,
};