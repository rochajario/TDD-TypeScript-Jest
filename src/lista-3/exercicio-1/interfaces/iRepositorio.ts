export interface IRepositorio<T>
{
    guarda(item: T):void;
    recupera(id:string):T;
    primeiro():T;
    proximo():T;
}