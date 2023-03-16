const currentTab = chrome.tabs.query({ active: true, currentWindow: true })

console.log('current:', currentTab)

chrome.tabs.onActivated.addListener(
    // chrome.scripting.executeScript(null, {file: './foreground.js'}, console.log('injected code'))

    chrome.scripting.executeScript({
        target: { tabId: currentTab },
        files: ["foreground.js"],
    })
    .then(() => console.log("injected script file"))
    
);

// chrome.runtime.onInstalled.addListener(() => {
//     chrome.contextMenus.create({
//         "id": "sampleContextMenu",
//         "title": "Sample Context Menu",
//         "contexts": ["selection"]
//     });
// });

// // This will run when a bookmark is created.
// chrome.bookmarks.onCreated.addListener(() => {
//     console.log('bookmark created');
//     alert("Hello! I am an alert box!!");
// });


// // this is the copy event listener
// window.addEventListener("copy", () => {
//     const selection = document.getSelection();
//     const copied = selection.toString();
//     const whereToGo = document.querySelector(".last-ten");
//     whereToGo.innerText = copied;
//     console.log('copied text:', copied);
//     alert('COPIED TEXT')
// });


// chrome.tabs.onActivated.addListeber(tab => {
//     if (/^http:\/\/www\.google/.test(current_tab)))) {

//      }
//  })