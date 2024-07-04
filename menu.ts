import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
export function main() {

    let opcao: number;

    //Novas Instâncias da Classe ContaCorrente (Objetos)
    const cc1: ContaCorrente = new ContaCorrente(3, 1234, 1, "Amanda Magro", 1000000.00, 100000);
    const cc2: ContaCorrente = new ContaCorrente(4, 1234, 1, "João da Silva", 1000.00, 100);
    //Nova Instância da Classe Conta Poupança(objetos)
    const cc3: ContaPoupanca = new ContaPoupanca(5, 1234, 1, "Marcella Sanches", 60000, 18);

    cc1.visualizar();
    cc2.visualizar();
    cc3.visualizar();

    console.log(`\n Saque de R$ 25.000,00 na conta CC1: ${cc1.sacar(25000)}`);
    cc1.visualizar();

    console.log(`\n Saque de R$ 1.500,00 na conta CC2: ${cc2.sacar(1500)}`);
    cc2.visualizar();
    
    console.log(`\nSaque de R$ 1500,55 na conta CC3: ${cc3.sacar(1500.55)}`)
    cc3.visualizar();




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

                break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");

                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");

                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                break;
            case 6:
                console.log("\n\nSaque\n\n");

                break;
            case 7:
                console.log("\n\nDepósito\n\n");

                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

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

main();