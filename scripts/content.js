console.log('this is the content SCRIPTTTT')
const article = document.querySelector("body");
console.log(article)

// // this is the copy event listener
window.addEventListener("copy", () => {
    const selection = document.getSelection();
    const copied = selection.toString();
    // const whereToGo = document.querySelector("body");
    // whereToGo.innerText = copied;
    console.log('copied text:', copied);
});


