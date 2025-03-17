document.getElementById("start-stop").addEventListener("click", function () {
    chrome.runtime.sendMessage({ action: "toggleTimer" });
    const timer = document.getElementById("timer");
    if (timer.classList.contains("running")) {
        timer.classList.remove("running");
    } else {
        timer.classList.add("running");
    }
});

document.getElementById("reset").addEventListener("click", function () {
    chrome.runtime.sendMessage({ action: "resetTimer" });
    const timer = document.getElementById("timer");
    timer.classList.remove("running");
});

chrome.runtime.onMessage.addListener(function (message) {
    if (message.action === "updateTimer") {
        document.getElementById("timer").innerText = message.time;
    }
});
