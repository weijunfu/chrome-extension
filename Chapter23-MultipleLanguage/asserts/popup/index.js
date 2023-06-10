window.onload = () => {

    let popupTitle = chrome.i18n.getMessage("popupTitle");

    document.getElementById('title').innerText = popupTitle;
}