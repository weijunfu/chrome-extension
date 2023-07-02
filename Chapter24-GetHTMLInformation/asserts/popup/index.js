
const content = document.getElementById('content');

document.getElementById('get').addEventListener('click', ()=>{

    console.log('click get');

    chrome.runtime.sendMessage({method: "title", value: document.title}, (resp)=>{
        console.log('click', resp);

        content.value = resp.value;
    })
})
