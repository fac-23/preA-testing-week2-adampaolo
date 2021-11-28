/*-------------------------------------------*\
  VARIABLES
\*-------------------------------------------*/

/* input form */
const form = document.querySelector(".note__form");
const noteCloseBtn = document.querySelector("#note__btn--close");
const noteTitle = document.querySelector("#note__title");
const noteBody = document.querySelector("#note__body");
const noteSubmitBtn = document.querySelector("#note__btn--submit");

/* note list */
const tasksList = document.querySelector(".tasks__list");
const checkTaskOffBtns = document.querySelectorAll(".tasks__note-check");
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


// Function to create the html note structure, Update the DOM and add the note to the notes array
function addNote(titleText, bodyText) {

  // create the note to update the DOM
  let note = document.createElement("li");
  note.classList.add("tasks__note", "stack-md");
  note.id = "note_" + notes.length;

  // Dinamically create html note content
  note.innerHTML = `
  <button type="button" class="tasks__note-check">☑️</button>
  <h2 class='tasks__note-title'>${titleText}</h2>
  <p class='tasks__note-body'>${bodyText}</p>
  `
  
  // update the DOM
  tasksList.append(note);

  // store the note into an object and push it to the notes array
  if(noteTitle.value !== '') {
    notes.push({
      "noteId": "note_" + notes.length,
      "noteTitle": titleText,
      "noteBody": bodyText, 
      "completed": false
    });
  }
  // console.log(noteTitle.value);

  console.log(notes);
}


// Function to check task off
function checkTaskOff(e) {
  // console.log(typeof e);
  if(e.target.classList.contains("tasks__note-check")) {
    let checkedBtnTarget = e.target;
    checkedBtnTarget.parentElement.classList.toggle('completed');
  }
  // return e; // for testing checkTaskOff receives an object
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
  e.preventDefault();
  generateNote();
})


// When user clicks on checkTaskOff button, the note turns green
tasksList.addEventListener("click", checkTaskOff);

