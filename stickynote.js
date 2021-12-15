// let stickyNoteIcon = document.getElementById("sticky_note");
let stickyNoteIcon = document.querySelector("#sticky_note");
let sticks = document.querySelector(".sticks");
let count = 1;

stickyNoteIcon.addEventListener("click", (e) => {
    stickyNoteIcon.classList.add("selected");
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

    let closeButton = document.querySelector(`.c${count}`);
    let minimizeButton = document.querySelector(`.m${count}`);
    let textArea = document.querySelector(`.t${count}`);
    let isMinimized = false;

    minimizeButton.addEventListener("click", () => {
        if (isMinimized == false) {
            textArea.style.display = "none";
        } else {
            textArea.style.display = "block";
        }
        isMinimized = !isMinimized;
    })

    closeButton.addEventListener("click", () => {
        stickyNote.remove();
        if (sticks.childElementCount == 0) {
            stickyNoteIcon.classList.remove("selected");
        }
    })

    count++;
})