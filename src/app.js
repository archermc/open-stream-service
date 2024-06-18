const express = require('express');
var EventLogger = require('node-windows').EventLogger;

var log = new EventLogger('Stream Popper');

const app = express()
const port = 8008

app.get('/', (req, res) => {
    const { streamName } = req.query
    const { streamQuality } = req.query

    const { exec, execFile } = require('child_process');
    var streamCommand = `streamlink twitch.tv/${streamName} ${streamQuality} --twitch-low-latency`

    exec(streamCommand, {'shell':'powershell.exe'}, (_, stdout, stderr)=> {
        if (stdout) console.log(stdout)
        if (stderr) console.error(stderr)
        // if (error) log.error(error)
        // if (stdout) log.info(stdout)
        // if (stderr) log.error(stderr)
    })

    execFile("C:\\Program Files\\Chatterino\\chatterino.exe", ["-c", streamName], (error, stdout, stderr) => {
        // if (error) log.error(error)
        // if (stdout) log.info(stdout)
        // if (stderr) log.error(stderr)
    })

    res.send("Opened, thank you!")
})

app.listen(port, () => {
    console.log(`Stream opener listening on port ${port}`)
})