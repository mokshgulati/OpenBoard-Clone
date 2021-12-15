// The Element.getBoundingClientRect() method returns a DOMRect object
// providing information about the size of an element and its position relative to the viewport.
let topShift = canvas.getBoundingClientRect().top;
let leftShift = canvas.getBoundingClientRect().left;

let xPosInit, yPosInit, xPosFin, yPosFin;
let drawingMode = false;

canvas.addEventListener("mousedown", function (e) {
    if (cTool == 'pencil') {
        tool.strokeStyle = defaultColor;
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
    // clientX, clientY 
    xPosInit = e.pageX - topShift;
    yPosInit = e.pageY - leftShift;

    if (cTool == "pencil" || cTool == "eraser") {
        drawingMode = true;
        tool.beginPath();
        tool.moveTo(xPosInit, yPosInit);
    }
})

canvas.addEventListener("mouseup", function (e) {
    if (cTool == "pencil" || cTool == "eraser") {
        drawingMode = false;

    } else if (cTool == "rectangle" || cTool == "line") {
        xPosFin = e.pageX - topShift;
        yPosFin = e.pageY - leftShift;

        let width = xPosFin - xPosInit;
        let height = yPosFin - yPosInit;

        if (cTool == "rectangle") {
            tool.strokeRect(xPosInit, yPosInit, width, height);
        } else if (cTool == "line") {
            tool.beginPath();
            tool.moveTo(xPosInit, yPosInit);
            tool.lineTo(xPosFin, yPosFin);
            tool.stroke();
        }
    }
})

canvas.addEventListener("mousemove", function (e) {
    if (drawingMode == true) {
        xPosFin = e.pageX - topShift;
        yPosFin = e.pageY - leftShift;

        tool.lineTo(xPosFin, yPosFin);
        tool.stroke();
    }
})