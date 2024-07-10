import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";
export function main() {

    //Instancia da Classe ContaController
    let contas: ContaController = new ContaController();

    //conta corrente 
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, "Marcella Sanches", 150000, 15000));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, "Joaozinho da vila", 10000, 1000));
    //CONTA POUPANÇA
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 1234, 2, "Geana Almeida", 1500000, 150000));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 1234, 2, "Jean Lima", 1000000, 100000));


    //Variaveis Auxiliares 
    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupanca'];

    while (true) {
        console.log(colors.bg.black, colors.fg.magenta,
            "******************************************************");
        console.log("                                                     ");
        console.log("                      MBANK                          ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.bg.black, colors.fg.magentastrong, "\nMBank, o seu dinheiro com a gente!", colors.reset);
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:

                console.log("\n\nCriar Conta\n\n");

                console.log("Digite o numero da agencia: ");
                agencia = readlinesync.questionInt("");

                console.log("Digite o nome do Titular da Conta: ");
                titular = readlinesync.question("");

                console.log("Digite o Tipo da Conta: ");
                tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1;

                console.log("Digite o Saldo da Conta: ");
                saldo = readlinesync.questionFloat("");


                switch (tipo) {
                    case 1:
                        console.log("Digite o Limite da Conta");
                        limite = readlinesync.questionFloat("");
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                        break;

                    case 2:
                        console.log("Digite a Data de Aniversario da Conta");
                        aniversario = readlinesync.questionInt("");
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                        break;
                }
                keyPress()
                break;

            case 2:
                console.log("\n\nListar todas as Contas\n\n");
                contas.listarTodas();
                keyPress()
                break;

            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");

                console.log("Digite o numero da conta: ");
                numero = readlinesync.questionInt("");
                contas.procurarPorNumero(numero);
                keyPress()
                break;

            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");

                console.log("\nDigite o numero da conta: ");
                numero = readlinesync.questionInt("");

                let conta = contas.buscarNoArray(numero); //vai procurar se a conta existe 

                if (conta) {
                    console.log("Digite o numero da agencia: ");
                    agencia = readlinesync.questionInt("");

                    console.log("Digite o nome do titular da conta: ");
                    titular = readlinesync.question("");

                    tipo = conta.tipo;

                    console.log("Digite o saldo da conta (R$): ");
                    saldo = readlinesync.questionInt("");

                    switch (tipo) {
                        case 1:
                            console.log("Digite o limite da conta (R$): ");
                            limite = readlinesync.questionFloat(" ");
                            contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                            break;
                        case 2:
                            console.log("Digite o dia do aniversario da conta poupanca: ");
                            aniversario = readlinesync.questionInt(" ");
                            contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
                            break;
                    }
                } else {
                    console.log("\nA conta nao foi encontrada!")
                }
                keyPress()
                break;

            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                console.log("Digite o numero da conta: ");
                numero = readlinesync.questionInt(" ");
                contas.deletar(numero);

                keyPress()
                break;

            case 6:
                console.log("\n\nSaque\n\n");

                keyPress()
                break;

            case 7:
                console.log("\n\nDepósito\n\n");
                keyPress()
                break;

            case 8:
                console.log("\n\nTransferência entre Contas\n\n");
                keyPress()
                break;

            default:
                console.log("\nOpção Inválida!\n");
                keyPress()
                break;
        }
    }

}
export function sobre(): void {
    console.log(colors.bg.black, colors.fg.magenta, "\n*****************************************************");
    console.log("Projeto Desenvolvido por: Marcella R.G. Sanches");
    console.log("Generation Brasil - marcella.sanches@genstudents.org ou rochaamarcellaaa@gmail.com");
    console.log("https://github.com/MarcellaRGSanches");
    console.log("*****************************************************", colors.reset);
}
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}
main();