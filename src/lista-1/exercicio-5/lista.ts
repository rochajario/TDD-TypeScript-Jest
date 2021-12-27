import { OutOfBoundException } from "./exceptions/out-of-bound-exception";

export class Lista<T>
{
    protected _array: T[];
    constructor() 
    {
        this._array = new Array<T>(0);
    }

    public insert(item:T):void
    {

        if(this._array.length == 0)
        {
            this._array[0] = item;
            return;
        }

        const arrayTemp = new Array<T>(this._array.length);
        for(let i=0; i< this._array.length; i++)
        {
            arrayTemp[i] = this._array[i];  
        }

        arrayTemp.push(item);
        this._array = arrayTemp;
    }

    public size()
    {
        return this._array.length;
    }

    public get(index:number):T
    {
        if(index <0 || index > this._array.length)
        {
            throw new OutOfBoundException("Índice inexistente");
        }

        return this._array[index];
    }

}