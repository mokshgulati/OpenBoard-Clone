let canvas = document.querySelector("canvas");
// this line gives you the tool to draw on that canvas
// this tool will bring in functions to draw and stuff
// all it's functions work insode the canvas
let tool = canvas.getContext("2d");

// default height width is smaller
// every change is supposed to be done after the size of canvas is set
// otherwise changes will not reflect
// size is always supposed to be set in js file (not css file)
// otherwise functions over it won't work
canvas.height = window.innerHeight;
canvas.width = window.innerWidth - '70';

let body = document.querySelector("body");

let defaultColor = "white";

let toolSizes = {
    pencilSize: 3,
    rectangleSize: 3,
    lineSize: 3,
    eraserSize: 8
}

let cTool = 'pencil';