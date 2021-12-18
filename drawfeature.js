let xPosInit, yPosInit, xPosFin, yPosFin;
let drawingMode = false;

// The Element.getBoundingClientRect() method returns a DOMRect object
// providing information about the size of an element and its position relative to the viewport.
let topShift = canvas.getBoundingClientRect().top;
let leftShift = canvas.getBoundingClientRect().left;

// in event of mousedown -> (mouse clicked && held down)
canvas.addEventListener("mousedown", function (e) {
    // setting properties of tool -> on basis of current tool selection
    if (cTool == 'pencil') {
        // sets the color of the drawing tool over the canvas
        tool.strokeStyle = defaultColor;
        // sets the width of the drawing tool over the canvas
        tool.lineWidth = toolSizes.pencilSize;
    } else if (cTool == 'rectangle') {
        tool.strokeStyle = defaultColor;
        tool.lineWidth = toolSizes.rectangleSize;
    } else if (cTool == 'line') {
        tool.strokeStyle = defaultColor;
        tool.lineWidth = toolSizes.lineSize;
    } else if (cTool == 'eraser') {
        tool.strokeStyle = "rgb(30, 30, 30)";
        tool.lineWidth = toolSizes.eraserSize;
    }

    // gives x, y coordinates of mouse pointer on mouse down
    // clientX, clientY -> from the topleft point of the viewport of the screen
    // pageX, pageY -> from the topleft point of the webpage loaded
    xPosInit = e.pageX - topShift;
    yPosInit = e.pageY - leftShift;

    if (cTool == "pencil" || cTool == "eraser") {
        drawingMode = true;

        // needed to be done when when you want to draw a line with that tool
        tool.beginPath();
        // it moves the position from where the mine is to be drawn
        tool.moveTo(xPosInit, yPosInit);
    }
})

// in event of mouseup -> (mouseclick lifted up)
canvas.addEventListener("mouseup", function (e) {
    if (cTool == "pencil" || cTool == "eraser") {
        drawingMode = false;

    } else if (cTool == "rectangle" || cTool == "line") {
        xPosFin = e.pageX - topShift;
        yPosFin = e.pageY - leftShift;

        let width = xPosFin - xPosInit;
        let height = yPosFin - yPosInit;

        if (cTool == "rectangle") {
            // function to draw a rectangle with that tool
            // it takes 4 parameters
            // initial x-cordinate, initial y-cordinate, req width of rectangle, req height of rectangle
            tool.strokeRect(xPosInit, yPosInit, width, height);
        } else if (cTool == "line") {
            // these below combination of four functions one after the other are
            // exactly the things required to draw a line
            // we give initial position (x-y-coordinate) in moveTo
            // we give final position (x-y-coordinate) in lineTo
            tool.beginPath();
            tool.moveTo(xPosInit, yPosInit);
            tool.lineTo(xPosFin, yPosFin);
            tool.stroke();
        }
    }
})

// in event of mousemove -> (mouse clicked && held down && cursor made to moved)
canvas.addEventListener("mousemove", function (e) {

    if (drawingMode == true) {
        // we are deleting the excess shift with topshift & leftshift
        xPosFin = e.pageX - topShift;
        yPosFin = e.pageY - leftShift;

        // once the moveTo function is written,
        // you don't have to write it again if you want to draw a line again
        // lineTo function again will do with a combination of tool.stroke (which actually draws the line)
        tool.lineTo(xPosFin, yPosFin);
        tool.stroke();
    }
})