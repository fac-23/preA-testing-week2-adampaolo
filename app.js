/*-------------------------------------------*\
  VARIABLES
\*-------------------------------------------*/


/* layout */
const newNoteBtn = document.querySelector(".btn-new-note");
const filterBtn = document.querySelector("#filter-completed");

/* note input form */
const addNoteSection = document.querySelector(".note");
const form = document.querySelector(".note__form");
const noteTitle = document.querySelector("#note__title");
const noteBody = document.querySelector("#note__body");
const noteSubmitBtn = document.querySelector("#note__btn--submit");

/* note list */
const tasksSection = document.querySelector(".tasks");
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

  // if the title field is not empty
  if (noteTitle.value !== '') {

    // create the note to update the DOM
    let note = document.createElement("li");
    note.classList.add("tasks__note");
    note.id = "note_" + notes.length;


    // create basic html note structure
    note.innerHTML = `
    
    <div class="tasks__note-controls">
      <input type="checkbox" class="btn btn-control tasks__note-check" aria-label="Click this button to check task as completed"></input>
      <button  type="button" class="btn btn-control tasks__note-delete" aria-label="Click this button to delete task">X</button>
    </div>
    `

    // Add user input to the note using the textContent property to prevent Cross-Site Scripting vulnerability.
    const noteContent = document.createElement("div");
    noteContent.classList.add("tasks__note-content");

    const noteTitle = document.createElement("h2");
    noteTitle.classList.add("tasks__note-title");
    noteTitle.textContent = title;

    const noteBody = document.createElement("p");
    noteBody.classList.add("tasks__note-body");
    noteBody.textContent = body;

    noteContent.append(noteTitle, noteBody);
    note.prepend(noteContent);


    // update the DOM
    tasksList.append(note);

    // store the note into an object and push it to the notes array
    notes.push({
      "noteId": "note_" + notes.length,
      "noteTitle": title,
      "noteBody": body,
      "completed": false
    });

    // reset form
    form.reset();
    // console.log(notes);

    tasksSection.classList.remove("hidden");

    // expose the state of the popup programmatically to let users know the enter new note form section is collapsed
    newNoteBtn.setAttribute('aria-expanded', 'false');

  }

}


// Function to check task off
function checkTaskOff(e) {
  // console.log(typeof e);
  if (e.target.classList.contains("tasks__note-check")) {
    let checkedBtnTarget = e.target;
    let thisNote = checkedBtnTarget.closest(".tasks__note");
    checkedBtnTarget.checked ?
      thisNote.classList.add('completed') :
      thisNote.classList.remove('completed');
  }

  // check if filter btn is checked, if it is filter out completed notes
  if(filterBtn.checked) {
    filterCompleted();
  }
  //return e; // for testing checkTaskOff receives an object
}


//Function to delete task
function taskDelete(e) {
  if (e.target.classList.contains("tasks__note-delete")) {
    let deleteBtn = e.target;
    deleteBtn.closest(".tasks__note").remove();
  }
}


// function to show note enter div on click
function showNoteForm(e) {
  e.preventDefault();

  tasksSection.classList.toggle("hidden");

  newNoteBtn.getAttribute('aria-expanded') === 'false' ? 
  newNoteBtn.setAttribute('aria-expanded', 'true') :
  newNoteBtn.setAttribute('aria-expanded', 'false');
}


// function to filter out completed tasks
function filterCompleted() {

  // retrieve an HTML collection of all notes rendered in the DOM and turn it into an array 
  let notesDisplayed = Array.from(tasksList.children);

  // filter the array and only keep the completed tasks
  let completedTasks = notesDisplayed.filter(el => {

    // check if the checkbox of each task is checked
    let checkbox = el.querySelector("input[type='checkbox']");
    return checkbox.checked;

  });

  // if filter btn is checked, loop through completed tasks and hide them
  if (filterBtn.checked) {
    completedTasks.forEach(note => note.classList.add("hidden"));
  } else {
    completedTasks.forEach(note => note.classList.remove("hidden"));
  }
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

// when add new note button is clicked, the form opens up
newNoteBtn.addEventListener("click", showNoteForm); 

// when filter completed button is clicked, the tasks are filtered
filterBtn.addEventListener("click", filterCompleted);




// OLI'S HACK - TO UNDERSTAND AND EXPAND





// // this is not a complete list of focusable elements!
// let focusableEls = `a[href], button:not([disabled]), input:not([disabled], textarea:not([disabled], [tabindex]`;

// // focusout events "bubble" from children
// // so this fires when focus leaves _any_ child of the form
// // so we need a little logic to know when focus leaves the form
// // @TODO: make it work the other way
// // i.e. when using shift-tab to move focus backwards
// form.addEventListener("focusout", (event) => {
//   let nextFocusedEl = event.relatedTarget;
//   let focusHasLeft = !form.contains(nextFocusedEl);
//   if (focusHasLeft) {
//     let firstFocusableEl = form.querySelector(focusableEls);
//     firstFocusableEl.focus();
//   }
// });











/*-------------------------------------------*\
  discarded - still interesting - code
\*-------------------------------------------*/


/* longer procedure to generate html elements of the note */

  // const noteControls = document.createElement("div");
  // noteControls.classList.add("tasks__note-controls");

  // const noteCheck = document.createElement("input");
  // noteCheck.setAttribute("type", "checkbox");
  // noteCheck.classList.add("btn", "btn-control", "tasks__note-check");
  // noteCheck.setAttribute("aria-label", "Click this button to check task as completed");

  // const noteDelete = document.createElement("button");
  // noteDelete.setAttribute("type", "button");
  // noteDelete.classList.add("btn", "btn-control", "tasks__note-delete");
  // noteDelete.setAttribute("aria-label", "Click this button to delete task");
  // noteDelete.textContent = "X";


  // noteControls.append(noteCheck, noteDelete);
  // note.append(noteControls);