
document.getElementById('speech').addEventListener('click', ()=>{
    const lang = document.getElementById('lang').value;
    const rate = document.getElementById('rate').value;
    const content = document.getElementById('content').value;

    let option = {};

    option['lang'] = lang;
    option['rate'] = parseFloat(rate);

    chrome.tts.speak(content, option);
})
