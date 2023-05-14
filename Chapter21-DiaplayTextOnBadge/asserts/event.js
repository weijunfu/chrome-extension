
let alarm = false;

chrome.action.onClicked.addListener(()=>{
    if(!alarm) {
        setAlarm();
        alarm = true;
    } else {
        clearAlarm();
        alarm = false;
    }
})

const text = ["ok", "ng"];
const color = ["green", "red"];

let index= 0;

chrome.alarms.onAlarm.addListener(()=>{
    chrome.action.setBadgeText({text: text[index]}, ()=>{});

    chrome.action.setBadgeBackgroundColor({color: color[index]}, ()=>{});

    index = (index==0)?1:0;

    setAlarm();
})

const idAlarm = "ijunfu_alarm";

const setAlarm = () => {
    let dt = new Date();
    dt.setSeconds(dt.getSeconds() + 1);

    chrome.alarms.create(idAlarm, {when: dt.getTime()});
}

const clearAlarm = () => {
    chrome.alarms.clear(idAlarm);
}
