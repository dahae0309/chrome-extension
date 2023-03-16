const testDiv = document.createElement('div');
testDiv.innerText = 'Sorry! We are working on it.....   -Alejandro&Das-'
const bodyElement = document.querySelector('body');
bodyElement.append(testDiv);

let buttonValue;

chrome.storage.local.get("copied", function (data) {
  // const arr = [];
    if (typeof data.copied == "undefined") {
        // That's kind of bad
        console.log('errrrrrror')
    } else {
        const lastValue = document.querySelector('#button1')
        console.log('value,', lastValue.textContent)
        console.log(`this is the data we copied ${data.copied}`)
        const dataFromContent = data.copied;
        const toButton = document.getElementById("button1");
        toButton.innerText = dataFromContent;
        const toButton2 = document.getElementById("button2");
        toButton2.innerText = lastValue.textContent;
  };
});



// window.addEventListener("copy", () => {
//   const selection = document.getSelection();
//   const copied = selection.toString();
//   const whereToGo = document.querySelector(".last-ten");
//   whereToGo.innerText = copied;
// });

// window.addEventListener('copy', () => {
//     let selection = document.getSelection();
//     console.log(selection.toString());

// })



