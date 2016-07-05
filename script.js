chrome.browserAction.onClicked.addListener(function(activeTab) {
  var newURL = chrome.extension.getURL('eventpage.html');
  chrome.tabs.create({ url: newURL });
}); 
