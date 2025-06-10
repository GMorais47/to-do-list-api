export class AppError extends Error {
    public status: number;

    constructor(mensagem: string, status = 400) {
        super(mensagem);
        this.status = status
    }
}