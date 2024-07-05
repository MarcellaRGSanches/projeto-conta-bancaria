import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";
export function main() {

    //Instancia da Classe ContaController
    let contas: ContaController = new ContaController();
    
    //Variaveis Auxiliares 
    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupança'];

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
                
                console.log("\n\nCriar Conta\n\n" );

                console.log("Digite o numero da agencia");
                agencia = readlinesync.questionInt("");

                console.log("Digite o nome do Titular da Conta");
                titular = readlinesync.question("");

                console.log("Digite o Tipo da Conta");
                tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1;

                console.log("Digite o Saldo da Conta");
                saldo = readlinesync.questionFloat("");


                switch (tipo) {
                    case 1:
                        console.log("Digite o Limite da Conta");
                        limite = readlinesync.questionFloat("");
                        break;

                    case 2:
                        console.log("Digite a Data de Aniversario da Conta");
                        aniversario = readlinesync.questionInt("");
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
                keyPress()
                break;

            case 5:
                console.log("\n\nApagar uma Conta\n\n");
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