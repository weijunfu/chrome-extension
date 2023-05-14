
window.onload = () => {
    chrome.tabs.create(
        { url: "imagePaste.html" },
        tab => {}
        )
}
