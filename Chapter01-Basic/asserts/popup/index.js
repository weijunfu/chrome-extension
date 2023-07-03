console.log("Hello World!");

document.getElementById('set').addEventListener('click', ()=>{
   chrome.tabs.query({active:true, currentWindow: true}, (tabs)=>{

       chrome.storage.sync.get({
           bgColor: "red"
       },
           (item)=>{

           chrome.scripting.executeScript({
               target: {tabId: tabs[0].id},
               function: setBackgroundColor,
               args: [item.bgColor]
           })

       });

   })
});


const setBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
}
