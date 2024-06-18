const getStreamName = (request) => {
  console.log(request)
  return request.tab.url.split('/')[-1];
}

chrome.runtime.onInstalled.addListener(() => {
  console.log('installed')
});

chrome.runtime.onMessage.addListener((request, sender, callback) => {
  console.log('hello', sender)
  const streamName = getStreamName(sender);
  if (request.action == "openStream") {

    console.log('LOGGED URL', streamName)
    console.log(`localhost:8008?=streamName=${streamName}`)

    fetch(`localhost:8008?=${streamName}`)
      .then(response => response.text())
      .then(response => callback(response))
      .catch()
  }

  return true;
});


