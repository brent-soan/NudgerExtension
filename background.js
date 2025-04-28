import C from "./constants.js";

chrome.alarms.create("PR", {
    delayInMinutes: 0.05,
    periodInMinutes: 60
});

chrome.alarms.create("SC", {
    delayInMinutes: 15,
    periodInMinutes: 15
});

chrome.alarms.onAlarm.addListener(async (alarm) => {
    console.log(alarm);
    if(alarm.name === "PR") {
        await chrome.notifications.create({
            type: "image",
            title: "Nudger - Purpose Reminder",
            message: "",
            iconUrl: "/images/icon-128.png",
            imageUrl: "/images/PR.jpg"
        });
    } else if(alarm.name === "SC") {
        await chrome.notifications.create("SC", 
        {
            type: "basic",
            title: "Nudger - Status Check",
            message: "Are you wasting your time?",
            iconUrl: "/images/icon-128.png",
            buttons: [{
                title: "☹️ Yes"
            }, {
                title: "🙅 No"
            }]
        });
    }
});

chrome.notifications.onButtonClicked.addListener(async (notifId, btnIdx) => {
    if(btnIdx === 0) {
        console.log("Y");
        chrome.notifications.create({
            type: "image",
            title: "Nudger - Purpose Reminder",
            message: "",
            iconUrl: "/images/icon-128.png",
            imageUrl: "/images/SC.jpg"
        });
    } else if(btnIdx === 1) {
        console.log("N");
    }
    
    chrome.notifications.clear("SC"); 
});