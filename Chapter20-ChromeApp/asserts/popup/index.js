
window.onload = () =>{
    const createData = {
        url: "notePad.html",
        type: "popup",
        width: 537,
        height: 420
    };

    chrome.windows.create(createData, () => {

    })
}