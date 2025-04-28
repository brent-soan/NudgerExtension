import C from "./constants.js";

setInterval(async () => {
    await chrome.notifications.create({
        type: "image",
        title: "Nudger - Purpose Reminder",
        message: "",
        iconUrl: "/images/icon-128.png",
        imageUrl: "/images/PR.jpg"
    });
}, C.PR_INTERVAL);

setInterval(async () => {
    await chrome.notifications.create(C.SC_NOTIF_ID, 
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
}, C.SC_INTERVAL);

// Events
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
    
    chrome.notifications.clear(C.SC_NOTIF_ID); 
});