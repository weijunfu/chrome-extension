const windowId = "ijunfu-window";

chrome.alarms.onAlarm.addListener((alarm)=>{

    chrome.windows.create({
       width: 480,
       height: 320,
       top: 200,
       left: 400,
       type: "popup",
       url: "asserts/popup/index.html"
    });

})
