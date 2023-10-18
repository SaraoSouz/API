import { PessoaFisica } from "./modelo/src/model/PessoaFisica";
import { PessoaJuridica } from "./modelo/src/model/PessoaJuridica";

const p1 = new PessoaFisica (`mauro`, `999.999.00-00`);
const p2 = new PessoaJuridica (`monuneno`, `998839.5092`);

p1.setNome(`Mancos-menes`);
p1.setCpf(`339.4599`);
console.log(`Nome: ${p1.getNome()}`);
console.log(`Cpf: ${p1.getCpf()}`);
console.log(`Documento Identificador: ${p1.documentoIdentificador()}`);

console.log("\n");

p2.setNome(`Mauro`);
p2.setCnpj(`00000000000000`);
console.log(`Nome: ${p2.getNome()}`);
console.log(`Taxa de Comissão: ${p2.getCnpj()}`);
console.log(`Documento Identificador: ${p2.documentoIdentificador()}`);