const express = require('express')
const app = express()
app.use(express.static('public'))
const path = require('path')

console.log(path.dirname)

app.get('/', function (req, res) {
    res.sendFile('./view/index.html', { root: __dirname })
})

app.get('/whyAlivio', function (req, res) {
    res.sendFile('./view/whyalivio.html', { root: __dirname })
})

app.get('/solutions', function (req, res) {
    res.sendFile('./view/solutions.html', { root: __dirname })
})

app.get('*', (req, res) => {
    if (res.status(404)) {
        res.sendFile('./view/error.html', { root: __dirname })
    }
})

app.listen(3000, () => {
    console.log('listening at: localhost: 3000')
})

