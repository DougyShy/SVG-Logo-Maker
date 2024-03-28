const inquirer = require('inquirer');
const fs = require('fs');

const {Triangle, Circle, Square} = require('../shapes.js');

const generateSVG = require('./lib/generateSVG.js');

const text = 'CDS';
const text_color = "blue";
const shape_color = "red";
const shape = new Circle("CDS", "red", "blue");



  
