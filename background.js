// Initialize alarms
chrome.alarms.create("PR", {
    delayInMinutes: 60,
    periodInMinutes: 60
});

chrome.alarms.create("SC", {
    delayInMinutes: 15,
    periodInMinutes: 15
});

// Events
// Create notification when an alarm triggers
chrome.alarms.onAlarm.addListener((alarm) => {
    console.log(alarm);
    if(alarm.name === "PR") {
        chrome.notifications.create({
            type: "image",
            title: "Nudger - Purpose Reminder",
            message: "",
            iconUrl: "/images/icon-128.png",
            imageUrl: "/images/PR.jpg"
        });
    } else if(alarm.name === "SC") {
        chrome.notifications.create("SC", 
        {
            type: "basic",
            title: "Nudger - Status Check",
            message: "Are you wasting your time?",
            iconUrl: "/images/icon-128.png",
            buttons: [{
                title: "☹️ Yes"
            }, {
                title: "🙅 No"
            }],
            requireInteraction: true
        });
    }
});

// Triggered when the user clicks on a notification button
chrome.notifications.onButtonClicked.addListener((notifId, btnIdx) => {
    if(notifId === "SC") { 
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
    }
    
    chrome.notifications.clear("SC"); 
});