const inquirer = require('inquirer');
const fs = require('fs');

const {Triangle, Circle, Square} = require('./lib/shapes.js');

const text = 'BIL';
const text_color = "black";
const shape_color = "red";

const myShape = new Square(text, text_color, shape_color);


const generateSVG = (text, text_color, renderedShape) =>
    `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    <rect width="100%" height="100%" fill="white" />

    ${renderedShape}

    <text x="150" y="110" font-size="40" text-anchor="middle" fill="${text_color}">${text}</text>
    </svg>`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three (3) letters for your .svg logo:',
        },
        {
            type: 'input', 
            name: 'text_color',
            message: 'Enter the color of the logo text (by keyword OR a hexadecimal number):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose which shape you would like your logo to be:',
            choices: ['Circle', 'Square', 'Triangle'],
        },
        {
            type: 'input',
            name: 'shape_color',
            message: 'Enter the color of the logo shape (by keyword OR a hexadecimal number):',
        },
    ])
    .then(answers => {
        let logoShape = undefined; 
        switch(answers.shape) {
            case 'Circle':
                logoShape = new Circle(answers.text, answers.text_color, answers.shape_color);
                break;
            case 'Square':
                logoShape = new Square(answers.text, answers.text_color, answers.shape_color);
                break;
            case 'Triangle':
                logoShape = new Triangle(answers.text, answers.text_color, answers.shape_color);
                break;
        }
        fs.writeFile('./examples/' + logoShape.text.substring(0,3) + '-' + logoShape.text_color + '.svg', generateSVG(logoShape.text.substring(0,3), logoShape.text_color, logoShape.render()), err => {
            if (err) {
                console.log('Error writing to file:', err);
                return; 
            }
            console.log('File write operation completed');
        });
    });


