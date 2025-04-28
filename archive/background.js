const ALARM_NAME = 'default-alarm'

async function createAlarm() {
    const alarm = await chrome.alarms.get(ALARM_NAME)
    
    if(alarm) {
        chrome.alarms.create(ALARM_NAME, {
            delayInMinutes: 5,
            periodInMinutes: 5
        })
    }
}

createAlarm();

chrome.alarms.onAlarm.addListener(
    await chrome.notifications.create({
        type: 'basic',
        title: 'TITLE',
        message: 'MESSAGE',
        iconUrl: 'like-emoji-smiley-face-thumbs-up.png'
    })
);