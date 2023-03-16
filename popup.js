const testDiv = document.createElement('div');
testDiv.innerText = 'Sorry! We are working on it.....   -Alejandro&Das-'
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



