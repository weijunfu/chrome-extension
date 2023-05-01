
document.getElementById('head').addEventListener('click', ()=>{
   chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
       chrome.scripting.executeScript({
           target: { tabId: tabs[0].id },
           func: greeting
       })
   })
});


function greeting() {
    chrome.runtime.sendMessage({
        key: "greeting",
        msg: "Welcome to you!"
    })
}