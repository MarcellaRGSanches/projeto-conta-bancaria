export class Conta {
    // Definir os atibrutos da classe (caracteristicas) 
    private _numero: number;         //sempre que for uma caracteristica privada tem que colcoar o underline na frente 
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    // o constructor vai recerber todos os atibutos da classe, mas quando for usa-lo vai usar o nome da propria classe

    //Definimos o metodo construtor, responsavel por criar os objetos da clase 
    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
        this._numero = numero;
        this._agencia = agencia;
        this._tipo = tipo;
        this._titular = titular;
        this._saldo = saldo;          //o this é usado pra identificar os atributos
    }
    public get numero(): number {
        return this._numero;
    }
    public get agencia(): number {
        return this._agencia;
    }
    public get tipo(): number {
        return this._tipo;
    }
    public get titular(): string {
        return this._titular;
    }
    public get saldo(): number {
        return this._saldo;
    }
    public set numero(value: number) {
        this._numero = value;
    }
    public set agencia(value: number) {
        this._agencia = value;
    }
    public set tipo(value: number) {
        this._tipo = value;
    }
    public set titular(value: string) {
        this._titular = value;
    }
    public set saldo(value: number) {
        this._saldo = value;
    }

    //Metodo sacar dinheiro da conta ***************
    public sacar(valor: number): boolean {
        if (this._saldo < valor) {
            console.log("Saldo é insufieciente!")
            return false;
        }
        this._saldo = this._saldo - valor;
        return true;
    }

    //Metodo depositar********************

    public depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }
    //metodo para visualizar todos os dados do objeto*****
    public visualizar(): void {

        let tipo: string = "";
        switch (this._tipo) {
            case 1:
                tipo = "Conta Corrente";
                break;
            case 2:
                tipo = "Conta Poupanca";
                break;
        }

        console.log("*************************************");
        console.log("          DADOS DA CONTA             ");
        console.log("*************************************");
        console.log(` Numero da conta: ${this._numero}`);
        console.log(` Numero da agencia: ${this._agencia}`);
        console.log(` Tipo da conta: ${tipo}`);
        console.log(` Titular da conta: ${this._titular}`);
        console.log(` Saldo da conta: ${this._saldo.toFixed(2)}`);

    }

}

