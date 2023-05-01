
const alarmId = 'ijunfu_alarm';

document.getElementById('head').addEventListener('click', ()=>{
    const now = new Date();
    now.setSeconds(now.getSeconds() + 5);

    chrome.alarms.create(alarmId, {
        when: now.getTime()
    })
})

