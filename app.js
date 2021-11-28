/*-------------------------------------------*\
  VARIABLES
\*-------------------------------------------*/

const form = document.querySelector(".note__form");
const noteTitle = document.querySelector("#note__title");
const noteBody = document.querySelector("#note__body");
const noteSubmitBtn = document.querySelector("#note__btn--submit");
const noteCloseBtn = document.querySelector("#note__btn--close");
const tasksList = document.querySelector(".tasks__list");
let notes = [];



/*-------------------------------------------*\
  FUNCTIONS
\*-------------------------------------------*/
// Generate note when user clicks button or presses enter on keyboard
function generateNote() {
  const formData = new FormData(form);

  // Retrieve values entered by user
  const title = formData.get("note__title");
  const body = formData.get("note__body");
  addNote(title, body);

  // reset form
  noteTitle.value = '';
  noteBody.value = '';
}


// Create the html note structure, Update the DOM and add the note to the notes array
function addNote(titleText, bodyText) {

  // create the note to update the DOM
  let note = document.createElement("li");
  note.classList.add("tasks__note");
  note.id = notes.length;

  // create note check button
  let noteCheck = document.createElement("input");
  noteCheck.type = "checkbox";
  noteCheck.id = "tasks__note-check";
  noteCheck.name = "tasks__note-check";
  noteCheck.value = "notecheck";
  note.prepend(noteCheck);

  // create note title
  let noteH2 = document.createElement("h2");
  noteH2.classList.add("tasks__note-title");
  noteH2.textContent = titleText;
  note.append(noteH2);

  // create note body
  let noteContent = document.createElement("div");
  noteContent.classList.add("tasks__note-body");
  noteContent.textContent = bodyText;
  note.append(noteContent);

  // update the DOM
  tasksList.append(note);

  // store the note into an object and push it to the notes array
  if(noteTitle.value !== '') {
    notes.push({
      "noteId": notes.length,
      "noteTitle": titleText,
      "noteBody": bodyText,
      "completed": false
    });
  }
  console.log(noteTitle.value);

  console.log(notes);

}


/*-------------------------------------------*\
  EVENT LISTENERS
\*-------------------------------------------*/

// When user presses enter on keyboard, get the submitted data from the form, then call addNote();
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && noteBody !== document.activeElement) { // textarea must not be active
    generateNote();
  }
})

// When user clicks new note button, get the submitted data from the form, then call addNote();
form.addEventListener("submit", (e) => {
  e.preventDefault() 
  generateNote();
})