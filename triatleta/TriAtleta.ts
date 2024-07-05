import { Ciclista } from "./Ciclista";
import { Corredor } from "./Corredor";
import { Nadador } from "./Nadador";
import { Pessoa } from "./Pessoa";

export class Triatleta extends Pessoa implements Corredor, Nadador, Ciclista{
    constructor(nome: string){
        super(nome);
    }
    pedalar(): void {
      console.log('Atleta pedalando...');
    }
    nadar(): void {
        console.log('Atleta nadando...');
    }
    correr(): void {
        console.log('Atleta correndo...');
    }
    aquecer(): void {
        console.log('Atleta aquecendo...');
    }

}