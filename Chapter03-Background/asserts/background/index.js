chrome.action.disable();

chrome.tabs.onUpdated.addListener((tabId, info, tab) => {
    if('complete' == info.status) {
        console.log(tab.url);

        if(tab.url.indexOf('youtube') != -1) {
            console.log('enable');

            chrome.action.enable(tabId);
        } else {
            console.log('disable')

            chrome.action.disable(tabId);
        }

    }
})