
window.onload = () => {
    chrome.storage.sync.get({
        bgColor: "red"
    },
        (item)=>{
        document.getElementById('select_color').value = item.bgColor
    })
}

document.getElementById('save').addEventListener('click', ()=>{
   let color = document.getElementById('select_color').value;

   chrome.storage.sync.set({
       bgColor: color
   });
});