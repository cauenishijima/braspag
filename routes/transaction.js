var baseDeDados = require('../baseDeDados');

module.exports = (app) => {
    app.post('/transaction', (req, res) => {        
        let error = [];

        // Valida dados enviados
        if (!app.utils.validation.transacao(req, error)) {
            // Retorna lista de erros encontrados
            res.status(400).json({error}); 
            return;   
        }

        // Padroniza informações enviadas
        let _bandeira = req.body.Bandeira.toLowerCase();
        let _tipo = req.body.Tipo.toLowerCase();
        let _adquirente = req.body.Adquirente.toUpperCase();
        let _valor = req.body.Valor;
    
        // Pega objeto adquirente informado
        let adquirente =  baseDeDados.find(_adquirente);
        if (adquirente == null) {
            error.push("O adquirente não foi localizado.");
            res.status(400).json({error});
            return;   
        }

        // Calcula valor líquido        
        let valorLiquido = adquirente.valorLiquido(_bandeira, _tipo, _valor);

        // Resposta
        res.status(200).json({"ValorLiquido" : valorLiquido});
    });
};