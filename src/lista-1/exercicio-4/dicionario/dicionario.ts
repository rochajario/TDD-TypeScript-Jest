import { ItemDicionario } from "./item-dicionario";

export class Dicionario<TKey, TValue>
{
    private itens: Array<ItemDicionario<TKey, TValue>>;
    
    constructor() {
        this.itens = new Array<ItemDicionario<TKey, TValue>>();
    }

    public Add(chave:TKey, valor:TValue):void
    {
        this.itens.push(new ItemDicionario(chave, valor));
    }
    
    public RemoveKey(chave:TKey):void
    {
        this.itens = this.itens.filter(i => i.chave != chave);
    }

    public GetKey(chave:TKey):TValue
    {
        return this.itens.filter(i => i.chave == chave)[0].valor;
    }

    public Count():number
    {
        return this.itens.length;
    }
}