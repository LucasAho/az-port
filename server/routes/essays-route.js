const essayController = require("../controllers/essayController");

function essays_route(app) {
    app.get('/api/blog', essayController.findAll);

    app.delete('/api/blog', essayController.deleteAll);

}

module.exports = words_route;