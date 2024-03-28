const {Triangle, Circle, Square} = require('../shapes.js');

describe('Render Triangle', () => {
    it('should return an accurate svg triangle render', () => {
        const triangle = new Triangle("CDS", "red", "red");
        triangle.setColor("blue");
        expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`);
    });
});

describe('Render Circle', () => {
    it('should return an accurate svg circle render', () => {
        const shape = new Circle("CDS", "red", "red");
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`);
    });
});

describe('Render Square', () => {
    it('should return an accurate svg square render', () => {
        const shape = new Square("CDS", "red", "red");
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<rect x="75" y="25" width="150" height="150" fill="blue" />`);
    });
});

