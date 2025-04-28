const btn = document.getElementById("btn");

btn.onclick = async () => {
    await chrome.notifications.create("id", {
        type: "basic",
        title: "TITLE",
        message: "MESSAGE",
        iconUrl: "like-emoji-smiley-face-thumbs-up.png"
    })
};