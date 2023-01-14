const { application } = require('express');
const express = require('express');
const app= express();


app.get('/', (req, res) => {
    res.send('ROOT PATH');
})

app.get('/r/:subredit/comment/:user', (req, res) => {
    console.log(req.params);
    const { subredit } = req.params;
    res.send(`<h1>this is ${subredit} subredit</h1>`);
})

app.get('/search', (req, res) => {
    console.log(req.query);
    res.send('trying to search');
})

app.listen(8000, () => {
    console.log('server starts listening');
})