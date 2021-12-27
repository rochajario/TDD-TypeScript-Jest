import { Lista } from "../exercicio-5/lista";

export class ListaOrdenada extends Lista<string>
{
    constructor() {
        super();
    }

    public override insert(item: string): void 
    {
        super.insert(item);
        this.selectionSort();
    }

    public merge(lista: ListaOrdenada):void
    {
        for(let i=0; i< lista.size(); i++)
        {
            this.insert(lista.get(i));
        }
    }

    private selectionSort():void
    {
        for ( let i=0; i < this._array.length-1; i++ )
        {
            let min = i;
            for ( let j = i+1; j < this._array.length; j++ )
            {
                if ( this._array[j] < this._array[min] )
                {
                    min = j; 
                } 
            }

            let temp = this._array[i];
            this._array[i] = this._array[min];
            this._array[min] = temp; 
        }
    }
}