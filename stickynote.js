// let stickyNoteIcon = document.getElementById("sticky_note");
let stickyNoteIcon = document.querySelector("#sticky_note");
let sticks = document.querySelector(".sticks");
let count = 1;

// when stickynote icon is clicked
stickyNoteIcon.addEventListener("click", (e) => {
    stickyNoteIcon.classList.add("selected");

    // creating the whole stickynote with these html commands
    // we have to write the css in css file for the classes
    let stickyNote = document.createElement("div");
    stickyNote.setAttribute("class", "sticky");
    stickyNote.innerHTML = `
        <div class="navbar">
            <div class="minimize m${count}"></div>
            <div class="close c${count}"></div>
        </div>
        <textarea class="t${count}"></textarea>
    `;
    sticks.appendChild(stickyNote);

    // elements inside the sticky note
    let closeButton = document.querySelector(`.c${count}`);
    let minimizeButton = document.querySelector(`.m${count}`);
    let textArea = document.querySelector(`.t${count}`);

    let isMinimized = false;

    // when minimize button is clickedd inside the stickynote
    // it hides/unhides the textarea
    minimizeButton.addEventListener("click", () => {
        if (isMinimized == false) {
            textArea.style.display = "none";
        } else {
            textArea.style.display = "block";
        }
        isMinimized = !isMinimized;
    })

    // when close button is clickedd inside the stickynote
    closeButton.addEventListener("click", () => {
        // stickynote (stickynote element is removed)
        stickyNote.remove();
        if (sticks.childElementCount == 0) {
            stickyNoteIcon.classList.remove("selected");
        }
    })

    count++;
})