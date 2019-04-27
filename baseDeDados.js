var Adquirente = require('./models/Adquirente');
var Taxas = require('./models/Taxas');

let adquirenteA = new Adquirente('Adquirente A',  [   
    new Taxas('Visa', 2.25, 2.00),
    new Taxas('Master', 2.35, 1.98)
]);

let adquirenteB = new Adquirente('Adquirente B',  [   
    new Taxas('Visa', 2.50, 2.08),
    new Taxas('Master', 2.65, 1.75)
]);

let adquirenteC = new Adquirente('Adquirente C',  [   
    new Taxas('Visa', 2.75, 2.16),
    new Taxas('Master', 3.10, 1.58)
]);

let mapAdquirentes = new Map().set("A", adquirenteA).set("B", adquirenteB).set("C", adquirenteC);

module.exports.find = (adquirente) => mapAdquirentes.get(adquirente);
module.exports.getAll = [...mapAdquirentes.values()];
