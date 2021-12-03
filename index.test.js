/*** Testing checkTaskOff() ***/


// comment out everything from checkTaskOff() on line 76(before addition to code it was line 72) in app.js apart from [return e;] 

test("checkTaskOff() 01 - checkTaskOff should receive an object as argument", () => {
  let result = checkTaskOff({});
  let expected = 'object';

  equal(typeof result, expected, `checkTaskOff() should receive an ${expected} as argument, received: ${typeof result}`);
})


// check if the first note contains the completed class after clicking its check button

// test("checkTaskOff() 02 - checkTaskOff should change target parent's class", () => {
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





/*** Testing taskDelete() ***/


// test('test should return true if the first task is deleted from list', () => {

//     let task = document.querySelectorAll(".tasks__note")[0];
//     let deleteButton = task.lastElementChild.lastElementChild;

//     deleteButton.click();

//     let noteExists = document.body.contains(task);

//     equal(!noteExists, true);
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





/*** Testing addNote() ***/



