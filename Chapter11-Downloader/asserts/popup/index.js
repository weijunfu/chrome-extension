
document.getElementById('down').addEventListener('click', ()=>{
    let url = document.getElementById('icon').src;

    chrome.downloads.download({
        url,
        filename: "ijunfu-icon-64.png",
        saveAs: true
    });
})
