let mensagem = document.querySelector("#mensagem");
const msg = [
    "Amarrando as sapatilhas...",
    "Colocando o capacete...",
    "Aquecendo pneus...",
    "Enchendo o tanque...",
    "Calibrando os pneus...",
    "Verificando a pressão do óleo...",
    "Ajustando a suspensão...",
    "Testando a direção...",
    "Ligando o motor...",
    "Revendo a estratégia de pit stop...",
    "Checando os freios...",
    "Alinhando as rodas...",
    "Colocando o macacão de corrida...",
    "Subindo no carro...",
    "Radio Check...",
    "Checando a telemetria...",
    "Verificando o combustível..."

]
let indexMensagem = 0;

setInterval(() => {
    mensagem.textContent = msg[indexMensagem];

    indexMensagem++;

    if (indexMensagem >= msg.length) {
        indexMensagem = 0;
    }
}, 2500);
