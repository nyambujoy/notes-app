# notes-app

const mainBtn = document.querySelector("#notesBtn");
const displayDiv = document.querySelector(".card");
const notes = [];

function MakeNotes(title) {
    this.title = title;
}

function addNote() {
    const title = prompt("Enter note title:");
    if (title) {
        const newNote = new MakeNotes(title);
        notes.push(newNote);
        displayNote();
    } else {
        alert("Please enter a title for your note.");
    }
}

function displayNote() {
    // Clear previous notes
    displayDiv.innerHTML = "";

    // Display current notes
    notes.forEach(note => {
        const noteElement = document.createElement("div");
        noteElement.classList.add("note");
        noteElement.innerHTML = `
            <h2>Note Title: ${note.title}</h2>
        `;
        displayDiv.appendChild(noteElement);
    });
}

mainBtn.addEventListener("click", event => {
    event.preventDefault(); // Prevent the default form submission
    addNote();
});



<!-- old -->
const mainBtn = document.querySelector("#notesBtn")

// make the btn functionable when cclicked it will form the card
// create a constructor to create the card object
// add more notes to the object list 
const notes = []

function MakeNotes(title) {
    this.title = title
}

function addNote() {
    const newNote = new MakeNotes(title)
    notes.push(newNote)
    // displayNote()


}

mainBtn.addEventListener("click", displayNote => {
    const displayDiv = document.querySelector(".card")
    notes.forEach(note => {
        const bookElement = document.createElement("div")
        bookElement.classList.add("book")
        bookElement.innerHTML = `
        <h2>BOOK LIST</h2>
        
        <p>status: ${note.title}</p>
        `

        displayDiv.appendChild(bookElement)
    })
})
