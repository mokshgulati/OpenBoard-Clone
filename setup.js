// canvas tag -> let's you draw
let canvas = document.querySelector("canvas");

// tool -> to draw on that canvas
// that's the tool that will bring in functions to draw and stuff
// all it's functions work inside the canvas
let tool = canvas.getContext("2d");

// default height width is smaller
// every change is supposed to be done after the size of canvas is set
// otherwise changes will not reflect
// size is always supposed to be set
// otherwise functions over it, won't work
canvas.height = window.innerHeight;
canvas.width = window.innerWidth - '70';

// initial settings
let body = document.querySelector("body");
let defaultColor = "white";
let toolSizes = {
    pencilSize: 3,
    rectangleSize: 3,
    lineSize: 3,
    eraserSize: 8
}
let cTool = 'pencil';