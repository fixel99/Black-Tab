chrome.action.onClicked.addListener(() => {
  chrome.windows.create({
    url: chrome.runtime.getURL("localpage.html"),
    type: "popup",
    width: 1500,
    height: 1000
  }, (newWin) => {
    // Delay move until Chrome/OS is ready
    setTimeout(() => {
      chrome.windows.update(newWin.id, {
        left: 2800, // Just into the second monitor
        top: 400
      }, () => {
        if (chrome.runtime.lastError) {
          console.error("Move failed:", chrome.runtime.lastError.message);
        } else {
          console.log("Window moved successfully.");
        }
      });
    }, 1); // tiny delay to ensure the window is ready
  });
});