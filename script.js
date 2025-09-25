const conselhos = [
    "acredite em si msm",
    "o primeiro passo e o mais importante",
    "a persistencia realiza o impossivel",
    "aprenda algo novo hoje",
    "seja gentils com todos ",
    "jesus te ama"
];

const conselhoTexto = document.getElementById('conselhoTexto');
const novoConselhoBtn = document.getElementById('novoConselhoBtn');

function gerarConselho() {
    //bug intencional
    const indice = Math.floor(math.random() * (conselhoTexto.length + 1));
    conselhoTexto.textContent = conselhos[indice];

}

novoConselhoBtn.addEventListCenter('click', gerarConselho);