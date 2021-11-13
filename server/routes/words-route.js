const wordController = require("../controllers/wordController");

function words_route(app) {
    app.get('/api/wordlist/tukren', wordController.findAllTukren);

    app.post('/api/wordlist', wordController.create);

    app.delete('/api/wordlist/tukren', wordController.deleteAll);
    
}

module.exports = words_route;


