"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = require("../model/pessoa");
let pessoa = new pessoa_1.Pessoa(`Sinara`, `5555555555555555`, new Date(1498, 3, 29), `00000`, `Rua Número 88`, 130, 98);
pessoa.mostraPessoa();
pessoa.falar();
pessoa.falarFrase("ta é paia isso");
pessoa.andar();
pessoa.andarRapido(15);
pessoa.comer();
pessoa.comerPrato("pastel de flango");
let pessoa2 = new pessoa_1.Pessoa(`deyversonn`, `22034062020`, new Date(1999, 9, 18), `993746620000`, `Rua Número 008`, 170, 70);
pessoa.mostraPessoa();
pessoa.falar();
pessoa.falarFrase("vem cá com o vô");
pessoa.comer();
pessoa.comerPrato("cocada");
let pessoa3 = new pessoa_1.Pessoa(`Jonas`, `06449035030`, new Date(1963, 5, 21), `39265286`, `Rua Número 22`, 360, 45);
pessoa.mostraPessoa();
pessoa.falar();
pessoa.falarFrase("peidei numa sacola");
pessoa.comer();
pessoa.comerPrato("haburguao");
//# sourceMappingURL=teste.js.map