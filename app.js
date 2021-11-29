/*-------------------------------------------*\
  VARIABLES
\*-------------------------------------------*/


/* layout */
const newNoteBtn = document.querySelector(".btn-new-note")

/* note input form */
const addNoteSection = document.querySelector(".note");
const form = document.querySelector(".note__form");
const noteTitle = document.querySelector("#note__title");
const noteBody = document.querySelector("#note__body");
const noteSubmitBtn = document.querySelector("#note__btn--submit");

/* note list */
const tasksList = document.querySelector(".tasks__list");
const checkTaskOffBtns = document.querySelectorAll(".tasks__note-check");
let notes = [];

/* single note/task */
const noteControls = document.querySelector(".tasks__note-controls");
const deleteTaskBtns = document.querySelectorAll(".tasks__note-delete")





/*-------------------------------------------*\
  FUNCTIONS
\*-------------------------------------------*/


// Function to: get user input, create html note structure, Update DOM, add note to notes array
function addNote() {

  const formData = new FormData(form);

  // Retrieve values entered by user
  const title = formData.get("note__title");
  const body = formData.get("note__body");
  // addNote(title, body);

  // create the note to update the DOM
  let note = document.createElement("li");
  note.classList.add("tasks__note");
  note.id = "note_" + notes.length;

  // dinamically create html note content
  note.innerHTML = `
  <div class="tasks__note-content">  
    <h2 class='tasks__note-title'>${title}</h2>
    <p class='tasks__note-body'>${body}</p>
  </div>
  <div class="tasks__note-controls">
    <button type="button" class="btn-control tasks__note-check">☑️</button>
    <button  type="button" class="btn-control tasks__note-delete">X</button>
  </div>
  `

  // update the DOM
  tasksList.append(note);

  // store the note into an object and push it to the notes array
  if (noteTitle.value !== '') {
    notes.push({
      "noteId": "note_" + notes.length,
      "noteTitle": title,
      "noteBody": body,
      "completed": false
    });
  }

  // reset form
  form.reset();
  // console.log(notes);

  addNoteSection.classList.add("hidden");

}


// Function to check task off
function checkTaskOff(e) {
  // console.log(typeof e);
  if (e.target.classList.contains("tasks__note-check")) {
    let checkedBtnTarget = e.target;
    checkedBtnTarget.closest(".tasks__note").classList.toggle('completed');
  }
  //return e; // for testing checkTaskOff receives an object
}

//Function to delete task
function taskDelete(e) {
  if (e.target.classList.contains("tasks__note-delete")) {
    let deleteBtn = e.target;
    deleteBtn.closest(".tasks__note").remove();
    // classList.add('hidden');
  }
}


// function to show note enter div on click
function showNoteForm() {
  addNoteSection.classList.toggle("hidden");
}


/*-------------------------------------------*\
  EVENT LISTENERS
\*-------------------------------------------*/


// When user presses enter on keyboard, get the submitted data from the form, then call addNote();
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && noteBody !== document.activeElement) { // textarea must not be active
    addNote();
  }
})

// When user clicks new note button, get the submitted data from the form, then call addNote();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addNote();
})


// when user clicks on checkTaskOff button, the note turns green
tasksList.addEventListener("click", checkTaskOff);

// delete button that removes tasks
tasksList.addEventListener('click', taskDelete);

// when clicking the add new note button, the form opens up
newNoteBtn.addEventListener("click", showNoteForm); 