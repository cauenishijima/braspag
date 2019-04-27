var baseDeDados = require('../baseDeDados');

module.exports = (app) => {
    app.get('/mdr', (req, res) => {
        res.setHeader('Content-Type', 'application/json'); 
        res.statusCode = 200;  

        res.json(baseDeDados.getAll);
    });
};