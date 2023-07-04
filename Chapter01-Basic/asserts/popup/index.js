
const iconUrl = chrome.runtime.getURL("asserts/icons/128.png");

document.getElementById('text').addEventListener('click', ()=>{
   let options = {
       type: "basic",
       title: "Primary Title",
       message: "Primary message to display",
       iconUrl: iconUrl
   } ;

   chrome.notifications.create(options);
});

document.getElementById('image').addEventListener('click', ()=>{
    let options = {
        type: "image",
        title: "Primary Title",
        message: "Primary message to display",
        iconUrl: iconUrl,
        imageUrl: iconUrl
    } ;

    chrome.notifications.create(options);
});

document.getElementById('list').addEventListener('click', ()=>{
    let options = {
        type: "list",
        title: "Primary Title",
        message: "Primary message to display",
        iconUrl: iconUrl,
        items: [
            {title:"Item 1", message:"This is a item1."},
            {title:"Item 2", message:"This is a item2."},
            {title:"Item 3", message:"This is a item3."},
            {title:"Item 4", message:"This is a item4."}
        ]
    } ;

    chrome.notifications.create(options);
});

document.getElementById('progress').addEventListener('click', ()=>{
    chrome.runtime.sendMessage({ type: 'show_notification', progress: 0 });

    var progress = 0;
    var interval = setInterval(function () {
        progress += 10;
        chrome.runtime.sendMessage({ type: 'update_notification', progress: progress });

        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 1000);
});

