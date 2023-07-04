const iconUrl = chrome.runtime.getURL("asserts/icons/128.png");

let options = {
    type: 'progress',
    iconUrl: iconUrl,
    title: 'Progress',
    message: 'Task in progress...',
    progress: 0,
}

let notificationsId = 'ijunfu-notification';

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.type === 'show_notification') {

        options.progress = message.progress

        chrome.notifications.create(notificationsId, options,(res)=>{
            console.log('res create', res)
        });
    } else if(message.type === 'update_notification') {
        options.progress = message.progress

        chrome.notifications.update(notificationsId, options, res => console.log(res));
    }
});