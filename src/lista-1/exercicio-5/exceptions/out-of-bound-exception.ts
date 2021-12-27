export class OutOfBoundException extends Error
{
    constructor(errorMessage:string) {
        super(`Out Of Bound Exception: ${errorMessage}`);
    }
}