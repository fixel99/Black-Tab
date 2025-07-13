// background.js

chrome.action.onClicked.addListener(function () {

  var width = 16500;
  var left = 1000;

  left += window.screenX;

  chrome.windows.create({ url: chrome.runtime.getURL("localpage.html")/*, left:14400/*, state:"fullscreen"*/ });

});
