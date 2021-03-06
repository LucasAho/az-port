require('dotenv').config();
require('./server/db-conn');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static("./client/az-react/build"));

const words_route = require("./server/routes/words-route");
const essays_route = require("./server/routes/essays-route");
words_route(app);
essays_route(app);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'az-react', 'build', "index.html"));
});


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Broadcasting from port ${PORT}`));