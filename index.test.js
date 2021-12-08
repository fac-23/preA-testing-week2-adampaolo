/*** Testing addNote() ***/


// addNote 01 - test should return true if length of notes array is increased by 1

// test('addNote 01 - test should return true if length of notes array is increased by 1', () => {

//   // give the note a title
//   noteTitle.value = 'hello';

//   // click noteSubmitBtn button and enter a new note
//   noteSubmitBtn.click();

//   // notes array length should have been increased by 1, it was 0
//   let result = notes.length;

//   let expected = 1;

//   equal(result, expected);


// })



// addnote 02 - test should return true if the form gets reset


// test('addnote 02 - test should return true if the form gets reset', () => {

//   // assign the current value of the title field to the result variable.
//   noteTitle.value = 'some value';

//   // give the title field a value
//   let result = noteTitle.value;

//   // reset the form
//   form.reset();

//   // re-assign the current value of the title field to the result variable.
//   result = noteTitle.value;

//   equal(result === '', true);

// })











/*** Testing taskDelete() ***/

// taskDelete 01 - test should return true if the first task is deleted from list

// test('taskDelete 01 - test should return true if the first task is deleted from list', () => {

//     let task = document.querySelectorAll(".tasks__note")[0];
//     let deleteButton = task.lastElementChild.lastElementChild;

//     deleteButton.click();

//     let noteExists = document.body.contains(task);

//     equal(!noteExists, true);
// })


// taskDelete 02 - taskDelete should only remove one task

// test('taskDelete 02 - taskDelete should only remove one task', () => {

//   // get all displayed tasks
//   let tasks = document.querySelectorAll(".tasks__note");

//   // get first task's delete button
//   let firstTaskDelBtn = tasks[0].lastElementChild.lastElementChild;

//   firstTaskDelBtn.click();

//   // get the tasks after deleting one
//   let result = document.querySelectorAll(".tasks__note");

//   // expected number of tasks after deleting 1
//   let expected = 3;

//   equal(result.length, expected);
// })
















/*** Testing checkTaskOff() ***/


// checkTaskOff 01 - check if the first note contains the completed class after clicking its check button

// test("checkTaskOff() 01 - checkTaskOff should change target parent's class", () => {
//     // select first note
//     const firstNote = document.querySelectorAll(".tasks__note")[0]; 
//     // select first note check button
//     const noteCheckBtn = firstNote.lastElementChild.firstElementChild; 

//     // virtually click the button
//     noteCheckBtn.click();

//     // check if first note contains the completed class
//     let result = firstNote.classList.contains("completed");

//     let expected = true;

//     equal(result, expected, "The note should have the 'completed' class");
// })




// checkTaskOff 02 - check if only one element's class is changed

// test("checkTaskOff() 02 - checkTaskOff should only change the target element's class", () => {

//     // select all notes
//     const notes = Array.from(document.querySelectorAll(".tasks__note")); 

//     // select first note check button
//     const secondNoteCheckBtn = notes[1].lastElementChild.firstElementChild; 

//     // virtually click the button
//     secondNoteCheckBtn.click();

//     // find number of uncompleted notes
//     let result = notes.filter(el => !el.classList.contains("completed"));

//     let expected = 3;

//     equal(result.length, expected);

// })
















/*** Testing filterCompleted() ***/


// filterCompleted() should remove all tasks that have the completed class

// test("filterCompleted() should remove all tasks that have the completed class", () => {

// 		let notes = Array.from(tasksList.children); // selecting all notes, we have 4

// 		checkTaskOffBtns[0].click(); // check task 1 off applying completed class
// 		checkTaskOffBtns[1].click(); // check task 2 off applying completed class

//     filterBtn.click(); // click filter btn

// 		let result = notes.filter(el => !el.classList.contains("completed")).length; // filter out completed tasks and return length of remaining tasks
//     let expected = 2;

// 		equal(result, expected);

// })








