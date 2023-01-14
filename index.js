const express = require('express');
const app = express();


// app.use((req, res) => {
//     // console.log(req);
//     // console.log(res);
//     // console.log('you made a request');
//     res.send('you made request successfully')
// })

app.get('/cat', (req, res) => {
    res.send('<h1>meeeoowww</h1>');
})
app.get('/dog', (req, res) => {
    res.send('<h1>woof woof</h1>');
})

app.get('/', (req, res) => {
    res.send('home route');
})
app.get('/user', (req, res) => {
    res.send('<h1>hello from server</h1>');
})
app.get('*', (req, res) => {
    res.send('you are requesting wrong url');
})











app.listen(3000, () => {
    console.log("server running at port 3000");
})