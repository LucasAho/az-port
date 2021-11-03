const essayController = require("../controllers/essayController");

function essays_route(app) {
    app.get('/api/blog', essayController.findAll);

}

module.exports = essays_route;