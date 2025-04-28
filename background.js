import C from "./constants.js";

// Purpose reminder
setInterval(async () => {
    await chrome.notifications.create({
        type: "image",
        title: "Nudger - Purpose Reminder",
        message: "",
        iconUrl: "/images/icon-128.png",
        imageUrl: "/images/PR.jpg"
    });
}, C.PR_INTERVAL);

// Status check
setInterval(async () => {
    await chrome.notifications.create({
        type: "basic",
        title: "Nudger - Status Check",
        message: "Are you wasting your time?",
        iconUrl: "/images/icon-128.png",
        buttons: [{
            title: "✅ Yes"
        }, {
            title: "❌ No"
        }]
    });
}, C.TEST_INTERVAL);

