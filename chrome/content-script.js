chrome.action.onClicked.addListener(() => {
    console.log('hello') 
    alert('Hello, World!'); 
    chrome.runtime.sendMessage({
        action: "openStream"
    }, function (response) {
        debugger;
        if (response != undefined && response != "") {
            callback(response);
        }
        else {
            debugger;
            callback(null);
        }
    });
});