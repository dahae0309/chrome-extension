const testDiv = document.createElement('div');
testDiv.innerText = 'this is only a test to se eif it shows up in the popup'
const bodyElement = document.querySelector('body');
bodyElement.append(testDiv);



window.addEventListener("copy", () => {
  const selection = document.getSelection();
  const copied = selection.toString();
  const whereToGo = document.querySelector(".last-ten");
  whereToGo.innerText = copied;
});

// window.addEventListener('copy', () => {
//     let selection = document.getSelection();
//     console.log(selection.toString());

// })



