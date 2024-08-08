const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está voltando pra casa quando se depara com um anúncio sobre doação de órgãos. Qual seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início teve medo de falar sobre doação de órgãos. "
            },
            {
                texto: "Isso é realmente importante!",
                afirmacao: "Quis saber como ajudar na campanha de conscientização sobre doação de órgãos."
            }
        ]
    },
    {
        enunciado: "No dia seguinte, os alunos de sua escola são convidados a uma palestra de conscientização sobre a importância da doação de órgãos. Seu colega pergunta se você vai também. O que você responde?",
        alternativas: [
            {
                texto: "Sim! Eu quero saber mais sobre o assunto.",
                afirmacao: "Prestou atenção e participou da palestra, aprendendo mais sobre o assunto."
            },
            {
                texto: "Eu vou, mas só pra faltar na aula.",
                afirmacao: "Não se interessou muito pela palestra, mas assistiu mesmo assim."
            }
        ]
    },
    {
        enunciado: "Após a palestra, vocês voltaram para a escola e sua professora propôs que a turma realizasse um debate sobre o tema. Qual o seu posicionamento no debate?",
        alternativas: [
            {
                texto: "Seu grupo foi contra a doação de órgãos.",
                afirmacao: "Independentemente de seu posicionamento, você teve bons argumentos e foi bem no debate,"
            },
            {
                texto: "Seu grupo foi a favor da doação de órgãos.",
                afirmacao: "Independentemente de seu posicionamento, você teve bons argumentos e foi bem no debate,"
            }
        ]
    },
    {
        enunciado: "A sua professora de biologia fala sobre a importância de conversar com a família sobre a autorização da doação de órgãos. Ao chegar em casa, o que você faz?",
        alternativas: [
            {
                texto: "Fala com sua família sobre isso, afinal é algo que precisa ser discutido.",
                afirmacao: "pois não vê problemas em conversar sobre assuntos como esse, mesmo que sejam considerados polêmicos."
            },
            {
                texto: "Não quis tocar no assunto, pois é algo estranho e/ou delicado para se falar.",
                afirmacao: "mesmo tendo dificuldades discutindo assuntos como esse às vezes."
            }
        ]
    },
    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resumindo a história...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
