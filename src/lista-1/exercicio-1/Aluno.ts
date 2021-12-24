export class Aluno
{
    private readonly MEDIA_PONDERADA_PROVA:number = 2.5;
    private readonly MEDIA_PONDERADA_TRABALHO:number = 2.5;

    constructor(
        private _nome:string, 
        private _matricula:string,
        private _notasProva: Array<number>,
        private _notaTrabalho: number) {};

    public get nome():string{
        return this._nome;
    }

    public get matricula():string{
        return this._matricula;
    }

    public get media():number
    {
        return (this.getMediaProvas() + this.getMediaTrabalho())/((this._notasProva.length * this.MEDIA_PONDERADA_PROVA) + this.MEDIA_PONDERADA_TRABALHO);
    }

    public get final():number
    {
        if(this.media > 6)
        {
            return 0;
        }
        return  Math.abs(this.media - 10);
    }

    private getMediaProvas():number
    {
        let somaNotasProva:number = 0;
        this._notasProva.forEach(x => {
            somaNotasProva += (x * 2.5);
        });

        return somaNotasProva;
    }
    
    private getMediaTrabalho():number
    {
        return this._notaTrabalho * 2;
    }
}