const express = require('express');

const app = express();

// callback

app.get('/home', (req, res) => {
    res.send('<a href="/chuyen-muc">Go to category page</a> <br />');
});

app.get('/chuyen-muc', (req, res) => {
    res.send('<a href="/home">Back to Home!</a>')
});

app.get('/chuyen-muc/:name/:age', (req, res) => {
    const name = req.params.name;
    const age = req.params.age;
    
    res.send(postId);
})

app.listen(3002, () => {
    console.log('> Running');
})