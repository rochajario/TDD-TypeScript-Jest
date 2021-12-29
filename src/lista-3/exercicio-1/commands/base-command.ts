export abstract class BaseCommand
{
    public Executar():void
    {
        try
        {
            this.invocarComandoInterno();
        }
        catch
        {
            return;
        }
    }

    protected abstract invocarComandoInterno():void;
}