
const keyEle = document.getElementById('key');
const valueEle = document.getElementById('value');

document.getElementById('set').addEventListener('click', () => {

    let data = {};
    data[keyEle.value] = valueEle.value;

    chrome.storage.local.set(data, ()=>{
       console.log("Value is set to:", JSON.stringify(data));
    });
});

document.getElementById('get').addEventListener('click', () =>{

    let key = keyEle.value;

    if(key == undefined) {
        alert('Not Exist!')
        return;
    }

    chrome.storage.local.get([key], (response)=>{
        console.log("Value currently is " + response[key]);
    })
});

document.getElementById('delete').addEventListener('click', () => {
   chrome.storage.local.remove(keyEle.value, ()=>{
      console.log("Value with key " + keyEle.value + " has been removed.");
   });
});

document.getElementById('getAll').addEventListener('click', () => {
    chrome.storage.local.get(null, (data)=> {
        console.log(data);
    })
})

document.getElementById('clear').addEventListener('click', () => {
    chrome.storage.local.clear(()=>{
        console.log('Local storage cleared.');
    })
})