const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hi');
    res.sendStatus
})

app.listen(3000, function () {
    console.log('これでrunされてる　on port 3000')
});