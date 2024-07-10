import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {
    private listaContas: Array<Conta> = new Array<Conta>()
    numero: number = 0

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            buscaConta.visualizar();
        } else {
            console.log('\nA Conta numero: ' + numero + ' não foi encontrada');
        }

    }
    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }

    }
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("\nA conta número: " + conta.numero + " foi criada com sucesso!");

    }
    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta != null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log('\nA conta numero: ' + conta.numero + ' foi atualizaado com sucesso!');
        } else {
            console.log('\nA conta de numero: ' + conta.numero + 'nao foi encontrada!');
        }

    }
    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);//INDEXoF PRA ENCONTRAR O INDICE, o 1 é pra excluir um unico elemento  
            console.log("\nA conta numero: " + numero + "foi apagada com sucesso!");
        } else {
            console.log("\nA conta numero: " + numero + "nao foi encontrada!")
        }

    }
    sacar(numero: number, valor: number): void {
    }

    depositar(numero: number, valor: number): void {

    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {

    }

    //Métodos Auxiliares

    //Gerar número de conta 

    public gerarNumero(): number {
        return ++this.numero;
    }
    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero)
                return conta;
        }
        return null;
    }

}