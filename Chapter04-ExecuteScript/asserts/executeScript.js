const colors = ['red', 'blue'];

const hotsearchItem = document.getElementsByClassName('hotsearch-item');

for(let i= 0; i<hotsearchItem.length; i++) {
    hotsearchItem[i].addEventListener('click', ()=>{
       chrome.tabs.query({active:true, currentWindow: true}, (tabs)=>{
           chrome.scripting.executeScript({
               target: {tabId: tabs[0].id},
               func: setBackgroundColor,
               args:[colors[i%2]]
           })
       })
    });
}

function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

