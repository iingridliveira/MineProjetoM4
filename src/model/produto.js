class produto {
    constructor(nome, tipo, potencia, tempo,dias,taxa){
        this.nome= nome;
        this.tipo=tipo
        this.potencia=potencia
        this.tempo= tempo
        this.dias= dias
        this.taxa= taxa
        this.consumo = 0
        this.gasto = 0
    }
}
export {produto}