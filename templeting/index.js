const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/random', (req, res) => {
    const randomnum = Math.floor(Math.random() * 100);
    res.render('random',{randomnum});
})
const todos = ["go to gym", "buy groceries", 'learn react', 'watch web series'];

app.get("/todos", (req, res) => {
    res.render('todos', { todos });
})
app.listen(8000, () => {
    console.log('server starts listening');
})