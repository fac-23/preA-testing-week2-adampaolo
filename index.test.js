/*** Testing checkTaskOff() ***/

// comment out everything from checkTaskOff() on line 76(before addition to code it was line 72) in app.js apart from [return e;]  
// test("checkTaskOff() should receive an object as argument", () => {
//   let result = checkTaskOff({});
//   equal(typeof result, 'object', `checkTaskOff() should receive an object as argument, received: ${typeof result}`);
// })


test("checkTaskOff() should change target parent's class", () => {
    const firstNote = document.querySelectorAll(".tasks__note")[0];
    const noteCheckBtn = firstNote.lastElementChild.firstElementChild;

    noteCheckBtn.click();

    let noteFinalClasses = Array.from(firstNote.classList);
    let result = noteFinalClasses.includes("completed");
    // console.log(result); // true

    equal(result, true, "The note should have the 'completed' class");
})




/*** Testing taskDelete() ***/


// test('test should return true if the first task is deleted from list', () => {

//     let task = document.querySelectorAll(".tasks__note")[0];
//     let deleteButton = task.lastElementChild.lastElementChild;

//     deleteButton.click();

//     let noteExists = document.body.contains(task);

//     equal(!noteExists, true);
// })