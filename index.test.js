// Testing checkTaskOff()

// comment out everything from checkTaskOff() on line 72 in app.js apart from [return e;]  
// test("checkTaskOff() should receive an object as argument", () => {
//   let result = checkTaskOff({});
//   equal(typeof result, 'object', `checkTaskOff() should receive an object as argument, received: ${typeof result}`);
// })


test("checkTaskOff() should change target parent's class", () => {
  const firstNote = document.querySelectorAll(".tasks__note")[0];
  const noteCheckBtn = firstNote.firstElementChild;

  noteCheckBtn.click();

  let noteFinalClasses = Array.from(firstNote.classList);
  let result = noteFinalClasses.includes("completed");
  console.log(result); // true

  equal(result, true, "The note should have the 'completed' class");
})