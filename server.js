require('dotenv').config();
require('./server/db-conn');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('./client/az-react/build/'));

const words_route = require("./server/routes/words-route");
words_route(app);

app.get('/*', (req,res) => {
    res.sendFile('index.html', { root: __dirname + "/client/az-react/build/" });
});

const {PORT} = process.env;
app.listen(PORT, () => console.log(`Broadcasting from port ${PORT}`));