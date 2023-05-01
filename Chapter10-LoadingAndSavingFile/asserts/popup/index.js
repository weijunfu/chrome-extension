
const greeting = document.getElementById('greeting');

const loadingEle = document.getElementById('loading');

loadingEle.addEventListener('change', ()=>{
    let file = loadingEle.files[0];

    if(null == file) return;

    const reader = new FileReader();
    reader.onload = () => {
        greeting.innerText = reader.result;
    }

    reader.readAsText(file);
})

document.getElementById("saving")
    .addEventListener('click', ()=>{
       let greeting = "Welcome to you!";

       let url = window.URL.createObjectURL(new Blob([greeting]));

       let a = document.createElement('a');
       a.download = "greeting.txt";
       a.href = url;

       a.click();
    });

