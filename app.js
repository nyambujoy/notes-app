
const mainBtn = document.querySelector("#notesBtn");
const displayDiv = document.querySelector(".card");
const modal = document.getElementById("modal")
const trashBtn = document.querySelector(".Trash")
const saveBtn = document.querySelector("#save")
const noteContent = document.querySelector("#noteContent")
const notes = [];



mainBtn.addEventListener("click", () => {
    modal.showModal()

})



class NotesApp {
    constructor(note) {
        this.note = note
    }

    displayNote() {
        // console.log(`this is a note ${this.note}`)
        const newNote = new NotesApp(this.note)
        notes.push(newNote)
        console.log(newNote)
    }

    postContent() {
        noteContent.textContent = ""
        for (let i = 0; i < notes.length; i++) {
            const currentNote = notes[i].note;
            const displayP = document.createElement("p");
            displayP.setAttribute("contenteditable", "true")
            displayP.classList.add("para");
            displayP.textContent = currentNote;
            displayDiv.appendChild(displayP);


        }

    }
}


saveBtn.addEventListener("click", (event) => {
    event.preventDefault()
    const contentValue = noteContent.textContent.trim()

    if (contentValue !== "") {
        const note1 = new NotesApp(contentValue)
        note1.displayNote()
        note1.postContent()
    }


    modal.close()
})
