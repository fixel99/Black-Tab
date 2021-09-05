// background.js

//let color = '#3aa757';

//chrome.runtime.onInstalled.addListener(() => {
  //chrome.storage.sync.set({ color });
  //console.log('Default background color set to %cgreen', `color: ${color}`);
//});


chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.create({ url: chrome.runtime.getURL("localpage.html") });
    console.log("I did it!")
});

var full = false;

document.body.addEventListener('click', function(){
  if(full==false){
    document.getElementById("mask").requestFullscreen()
    full = true;
  }
  else{
    document.exitFullscreen();
    full = false;
  }

})
