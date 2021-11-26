// Variable
const form = document.querySelector(".note__form");
const noteTitle = document.querySelector("#note__title");
const noteBody = document.querySelector("#note__body");
const noteSubmitBtn = document.querySelector("#note__btn--submit");
const noteCloseBtn = document.querySelector("#note__btn--close");
const tasksList = document.querySelector(".tasks__list");
let notes = [];



// Functions

function addNote() {
  const titleText = noteTitle.value;
  const bodyText = noteBody.value;

  notes.push({
    'noteId': notes.length,
    'noteTitle': titleText,
    'noteBody': bodyText,
    'completed': false
  })

  console.log(titleText);


  let note = document.createElement('li');
  note.classList.add('tasks__note');
  note.id = notes.length;

  let noteCheck = document.createElement('input');
  noteCheck.type = 'checkbox';
  noteCheck.id = 'tasks__note-check';
  noteCheck.name = 'tasks__note-check';
  noteCheck.value = 'notecheck';
  note.prepend(noteCheck);

  let noteH2 = document.createElement('h2');
  noteH2.classList.add('tasks__note-title');
  noteH2.textContent = titleText;
  note.append(noteH2);

  let noteContent = document.createElement('div');
  noteContent.classList.add("tasks__note-body");
  noteContent.textContent = bodyText;
  note.append(noteContent);


  tasksList.append(note);
}



// Event listeners

noteSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addNote();
});


