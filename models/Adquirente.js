module.exports = class Adquirente {
    constructor(adquirente, taxas){
        this.adquirente = adquirente;
        this.taxas = taxas;
    }

    valorLiquido(bandeira, tipo, valor){

        // Filtra bandeira solicitada nas taxas do adquirente
        var t = this.taxas.filter(el => {
                return el.bandeira.toLowerCase() == bandeira
        })[0];

        if (t == undefined) {
            throw new Error("Bandeira inválida.");
        } else { 
            return parseFloat((valor * (1 - t[tipo] / 100)).toFixed(2));
        }        
    }
}


