// tool icons
let pencil = document.querySelector("#pencil");
let rectangle = document.getElementById("rectangle");
let line = document.querySelector("#line");
let eraser = document.getElementById("eraser");

// other elements
let kits = document.querySelectorAll(".kit");

let sizeBox = document.querySelectorAll(".size_box");
let c1 = 0, c2 = 0; c3 = 0, c4 = 0;

let colorBox = document.querySelector(".color_box");
let colors = document.querySelectorAll(".color");

// when a color is clicked from the color box
// two thing happens ->
colorBox.addEventListener("click", (e) => {
    let choosenColor = e.target;
    if (choosenColor != colorBox) {
        // 1. color gets highlightened on the top bar
        if (choosenColor.classList.contains("selected_color")) {
            choosenColor.classList.remove("selected_color");
            defaultColor = "white";
        } else {
            for (let i = 0; i < colors.length; i++) {
                colors[i].classList.remove("selected_color");
            }
            choosenColor.classList.add("selected_color");

            // 2. selected color becomes default color
            let col = choosenColor.id;
            defaultColor = col;
        }
    }
});

// when pencil icon is clicked
pencil.addEventListener("click", () => {
    // 1. icon gets highlightened
    for (let i = 0; i < sizeBox.length; i++) {
        sizeBox[i].style.display = "none";
    }
    for (let i = 0; i < kits.length; i++) {
        kits[i].classList.remove("selected");
    }
    pencil.classList.add("selected");

    // 2. current tool becomes pencil
    cTool = 'pencil';

    // 3. sizebox show/hide
    c1 %= 2;
    if (c1 == 0 && cTool == 'pencil') {
        sizeBox[0].style.display = "block";
    } else if (c1 == 1) {
        sizeBox[0].style.display = "none";
    }
    c1++;
});

// when rectangle icon is clicked
rectangle.addEventListener("click", () => {
    // 1. icon gets highlightened
    for (let i = 0; i < sizeBox.length; i++) {
        sizeBox[i].style.display = "none";
    }
    for (let i = 0; i < kits.length; i++) {
        kits[i].classList.remove("selected");
    }
    rectangle.classList.add("selected");

    // 2. current tool becomes rectangle
    cTool = 'rectangle';

    // 3. sizebox -> show/hide
    c2 %= 2;
    if (c2 == 0) {
        sizeBox[1].style.display = "block";
    } else if (c2 == 1) {
        sizeBox[1].style.display = "none";
    }
    c2++;
});

// when line icon is clicked
line.addEventListener("click", () => {
    // 1. icon gets highlightened
    for (let i = 0; i < sizeBox.length; i++) {
        sizeBox[i].style.display = "none";
    }
    for (let i = 0; i < kits.length; i++) {
        kits[i].classList.remove("selected");
    }
    line.classList.add("selected");

    // 2. current tool becomes line
    cTool = 'line';

    // 3. sizebox show/hide
    c3 %= 2;
    if (c3 == 0) {
        sizeBox[2].style.display = "block";
    } else if (c3 == 1) {
        sizeBox[2].style.display = "none";
    }
    c3++;
});

// when pencil icon is clicked
eraser.addEventListener("click", () => {
    // 1. icon gets highlightened
    for (let i = 0; i < sizeBox.length; i++) {
        sizeBox[i].style.display = "none";
    }
    for (let i = 0; i < kits.length; i++) {
        kits[i].classList.remove("selected");
    }
    eraser.classList.add("selected");

    // 2. current tool becomes eraser
    cTool = 'eraser';

    // 3. sizebox show/hide
    c4 %= 2;
    if (c4 == 0) {
        sizeBox[3].style.display = "block";
    } else if (c4 == 1) {
        sizeBox[3].style.display = "none";
    }
    c4++;
});

// choosing size for any tool from it's size box
for (let i = 0; i < sizeBox.length; i++) {
    sizeBox[i].addEventListener("click", (e) => {
        let targetSize = e.target;
        if (targetSize != sizeBox[i]) {

            // selected size gets highlightened
            let sizes = sizeBox[i].children;
            for (let j = 0; j < sizes.length; j++) {
                sizes[j].classList.remove("selected_size");
            }
            targetSize.classList.add("selected_size");

            // size of the tool is made to set
            let selectedSize = targetSize.classList[1];
            setToolSize(selectedSize, i);
        }
    });
};

// function to set individual tool size
function setToolSize(selectedSize, i) {
    if (i == 0) {
        setSize(selectedSize, "pencilSize");
    } else if (i == 1) {
        setSize(selectedSize, "rectangleSize");
    } else if (i == 2) {
        setSize(selectedSize, "lineSize");
    } else if (i == 3) {
        setSizeForEraser(selectedSize, "eraserSize");
    }
}

// function for setting size (in numeric value) for the tool according to selection
// for any tool except eraser
// pencil, rectangle, line
function setSize(selectedSize, toolSize) {
    if (selectedSize == "size1") {
        toolSizes[toolSize] = 3;
    } else if (selectedSize == "size2") {
        toolSizes[toolSize] = 7;
    } else if (selectedSize == "size3") {
        toolSizes[toolSize] = 11;
    } else if (selectedSize == "size4") {
        toolSizes[toolSize] = 18;
    }
}

// function for setting size (in numeric value) for the tool
// eraser explicitly
// according to selection
function setSizeForEraser(selectedSize, toolSize) {
    if (selectedSize == "size1") {
        toolSizes[toolSize] = 8;
    } else if (selectedSize == "size2") {
        toolSizes[toolSize] = 16;
    } else if (selectedSize == "size3") {
        toolSizes[toolSize] = 24;
    } else if (selectedSize == "size4") {
        toolSizes[toolSize] = 32;
    }
}

// at load -> pencil is selected (pencil icon is clicked)
pencil.click();
pencil.click();