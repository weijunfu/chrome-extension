const iconUrl = chrome.runtime.getURL("asserts/icons/128.png");

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.type === 'show_notification') {
        chrome.notifications.create({
            type: 'progress',
            iconUrl: iconUrl,
            title: 'Progress',
            message: 'Task in progress...',
            progress: message.progress,
        });
    }
});

chrome.runtime.onMessageExternal.addListener(function (message, sender, sendResponse) {
    if (message.type === 'update_notification') {
        chrome.notifications.update('progress_notification', {
            progress: message.progress,
        });
    }
});