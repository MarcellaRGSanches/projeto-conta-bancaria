import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {
    private listaContas: Array<Conta> = new Array<Conta>()
    numero: number = 0

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta != null){
            buscaConta.visualizar();
        }else {
            console.log('\nA Conta numero: '+ numero + 'não foi encontrada');
        }
        // throw new Error("Method not implemented.");
    }

    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
        // throw new Error("Method not implemented.");
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("\nA conta número: " + conta.numero + "foi criada com sucesso!");
        throw new Error("Method not implemented.");
    }

    atualizar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }

    deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }

    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    //Métodos Auxiliares

    //Gerar número de conta 

    public gerarNumero(): number {
        return ++this.numero;
    }
    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas){
            if(conta.numero === numero)
            return conta;
        }
        return null;
    }

}