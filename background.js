// background.js

//let color = '#3aa757';

//chrome.runtime.onInstalled.addListener(() => {
  //chrome.storage.sync.set({ color });
  //console.log('Default background color set to %cgreen', `color: ${color}`);
//});







chrome.browserAction.onClicked.addListener(function () {
//chrome.app.runtime.onLaunched.addListener(function() {
  var width = 650;
  var left = 200;

  left += window.screenX;

  //window.open(thePage,'windowName','resizable=1,scrollbars=1,fullscreen=0,height=200,width=' + width + '  , left=' + left + ', toolbar=0, menubar=0,status=1');
  //return 0;


    chrome.windows.create({ url: chrome.runtime.getURL("localpage.html"), left:14400/*, state:"fullscreen"*/ });
    //console.log("I did it!");
    //chrome.browserAction.onClicked.removeListener(arguments.callee);

});
