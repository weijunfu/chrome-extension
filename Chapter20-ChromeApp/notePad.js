
const openEle = document.getElementById('file');

const saveEle = document.getElementById('saveInput');

const saveBtn = document.getElementById('save');

const contentEle = document.getElementById('content');

let windowInitHeight;
let textInitHeight;

window.onload = () => {
    chrome.windows.getCurrent({}, w => {
        chrome.windows.update(w.id, {focused: true}, ()=>{});

    })

    windowInitHeight = window.innerHeight;
    textInitHeight = contentEle.offsetHeight;
}

window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('resize', ()=>{
        const height = window.innerHeight - windowInitHeight+textInitHeight;

        contentEle.style.height = height +"px";
    })

    openEle.addEventListener('change', () => {
        const file = openEle.files[0];
        console.log('file', file)
        if(null == file) return;

        const reader = new FileReader();
        reader.addEventListener('load', () => {
            contentEle.value = reader.result;
        })
        reader.readAsText(file);
    })
})

saveBtn.addEventListener('click', () =>{

    const text = contentEle.value;

    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(new Blob([text], {type:"text/plain"}));
    a.download = saveEle.value;
    a.click();
})

