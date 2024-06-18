var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Stream Popper',
  description: 'Runs on port 8008, send a GET with ?=streamName to open a stream',
  script: require('path').join(__dirname, 'src/app.js'),
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096',
  ],
  wait: 2,
  grow: .5,
  maxRetries: 3
  //, workingDirectory: '...'
  //, allowServiceLogon: true
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', () => svc.start());

svc.install();