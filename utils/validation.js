module.exports = {
    transacao : (req, error) =>{
        req.assert("Adquirente","É preciso definir um adquirente.").notEmpty();
        req.assert("Valor","É preciso definir um valor válido.").isCurrency();
        req.assert("Bandeira","É preciso definir uma bandeira.").notEmpty();
        req.assert("Tipo","É preciso definir um tipo.").notEmpty();

        let errors = req.validationErrors();
        if (errors){
            errors.forEach(erro => {
                error.push(erro['msg'])
            });
        }

        // Valida valor passado 
        let _valor = req.body.Valor;
        if ( _valor != '' && _valor <= 0) {
            error.push("Valor não pode se igual ou menor que zero.");
        }

        return error.length == 0;
    }
}