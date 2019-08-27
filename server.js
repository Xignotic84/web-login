const express = require('express');
const app = express();
app.set('view engine', 'ejs');

const port = 8080;

app.listen(port, ()=> {
    console.log(`Listening to ${port}`)
});

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('pages/index');
});





app.use((req, res) => {
    res.status(404).render('pages/index');
});
