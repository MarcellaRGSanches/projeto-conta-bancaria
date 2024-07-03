import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from "./src/model/Conta";
export function main() {

    let opcao: number;

    //Objetos da classe conta
    const c1: Conta = new Conta(1, 1234, 1, "Julia Castro", 800000.00);
    const c2: Conta = new Conta(2, 1234, 2, "Marcella Sanches", 600000.00);

    //Visualizando os dados da conta 1 e 2 
    c1.visualizar();
    c2.visualizar();
    
    //visualizando saldo da conta 1 
    console.log(`\nO saldo da conta 01 é: ${c1.saldo}`);
    
    //alterando o saldo da conta 2 
    c2.saldo = 900000.00
    
    //visualizando o saldo da conta 2 
    console.log(`\nO saldo da conta 02 é: ${c2.saldo}`);
    
    //Saquee deposito nas contas 
    console.log(`\nSacar tantos reais da Conta c1: ${c1.sacar(500000.20)}`);
    console.log(`\nDepositar 300000.00 reais da Conta c2: ${c2.depositar(300000.25)}`);
    c1.visualizar();
    c2.visualizar();
    
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
            console.log(colors.bg.black, colors.fg.magentastrong,"\nMBank, o seu dinheiro com a gente!",colors.reset);
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
    console.log(colors.bg.black, colors.fg.magenta,"\n*****************************************************");
    console.log("Projeto Desenvolvido por: Marcella R.G. Sanches");
    console.log("Generation Brasil - marcella.sanches@genstudents.org ou rochaamarcellaaa@gmail.com");
    console.log("https://github.com/MarcellaRGSanches");
    console.log("*****************************************************",colors.reset);
}

main();