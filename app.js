const saudacao=document.getElementById('saudacao');
const frase=document.getElementById('frase');
const icone=document.getElementById('icone');

const frasesManha=[
    "O sucesso começa com a decisão de tentar",
    "Tenha um otimo dia"
];
const frasesTarde=[
    "Que sua tarde seja leve e cheias de sorrisos",
    "Continue a nadar"
];
const frasesNoite=[
    "Que sua noite seja tranquila e revigorante.",
    "Uma noite abençoada"
];

function atualizaSaudacao() {
    const hoje=new Date();
    const hora=hoje.getHours();
    let msgSaudacao, imgFundo, imgIcone, frasesDoMomento;
    if (hora >= 5 && hora < 12) {
        msgSaudacao='Bom dia';
        imgFundo="url(fundodia.jpg)";
        imgIcone="bomdia.png";
        frasesDoMomento=frasesManha;
    

    } else if (hora >= 12 && hora <18) {
        msgSaudacao='Boa tarde';
        imgFundo="url(fundotarde.jpg)";
        imgIcone="boatarde.png";
        frasesDoMomento= frasesTarde;
    
    } else {
        msgSaudacao='Boa noite';
        imgFundo="url(fundonoite.jpg)";
        imgIcone="boanoite.png";
        frasesDoMomento=frasesNoite;
    }
    saudacao.textContent= msgSaudacao;
    document.body.style.backgroundImage=imgFundo;
    icone.src=imgIcone;
    const randomIndex=Math.floor(Math.random()* frasesDoMomento.length);
    frase.textContent=frasesDoMomento[randomIndex];
}
atualizaSaudacao();
setInterval(atualizaSaudacao, 8000);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log("Service Worker registrado"))
    .catch(err => console.log("Erro no Service Worker:", err));
}

