export abstract class BaseComponenteData
{
    private _valor:number;

    constructor(valor:number) 
    {
        this._valor = this.ValidaParametroData(valor);
    }

    public valor():number
    {
        return this._valor;
    }

    protected abstract ValidaParametroData(valor:number):number;
}