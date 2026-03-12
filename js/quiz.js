const perguntas = [
  {
    pergunta: "A caixa de pizza engordurada deve ir para qual lixeira?",
    // Basta colocar o caminho da foto aqui. Se não tiver foto, deixe vazio: ""
    imagem: "../imagens/caixa de pizza.jpg", 
    opcoes: [
      "Lixeira Azul (Papel)",
      "Lixeira Comum/Orgânica",
      "Lixeira Vermelha (Plástico)"
    ],
    respostaCorreta: 1,
    explicacao: "A gordura contamina o papel, tornando a reciclagem impossível. Por isso, a parte suja da caixa de pizza deve ir para o lixo comum!"
  },
  {
    pergunta: "Qual é a forma correta de descartar óleo de cozinha usado?",
    imagem: "../imagens/panela de oleo.jpg", 
    opcoes: [
      "Jogar no ralo da pia com água quente",
      "Colocar em um saco plástico no lixo comum",
      "Armazenar em garrafa PET e levar a um ecoponto"
    ],
    respostaCorreta: 2,
    explicacao: "Jogar óleo na pia entope os encanamentos e polui milhares de litros de água. O certo é guardar em uma PET e levar ao ponto de coleta!"
  },
  {
    pergunta: "O que fazer com um copo de vidro que quebrou em casa?",
    imagem: "../imagens/copo quebrado.jpg",
    opcoes: [
      "Enrolar em jornal/papelão e colocar na lixeira comum",
      "Jogar direto na lixeira verde (Vidro)",
      "Misturar com o resto do lixo"
    ],
    respostaCorreta: 0,
    explicacao: "Para proteger os coletores de lixo de cortes, você deve enrolar o vidro quebrado em jornal ou colocar dentro de uma caixa de papelão ou garrafa PET cortada."
  },
  {
    pergunta: "O Isopor (EPS) é reciclável?",
    imagem: "../imagens/isopor.webp",
    opcoes: [
      "Não, é lixo orgânico",
      "Sim, deve ir para a lixeira vermelha (Plástico)",
      "Apenas se for de embalagem de eletrônicos"
    ],
    respostaCorreta: 1,
    explicacao: "Sim! O Isopor é um tipo de plástico (Poliestireno). Desde que esteja limpo e sem restos de comida, ele pode e deve ser reciclado na lixeira vermelha."
  }
];

let perguntaAtualIndex = 0;
let pontuacao = 0;

const telaInicio = document.getElementById('tela-inicio');
const telaPergunta = document.getElementById('tela-pergunta');
const telaResultado = document.getElementById('tela-resultado');

const textoPergunta = document.getElementById('texto-pergunta');
const imagemPergunta = document.getElementById('imagem-pergunta');
const opcoesContainer = document.getElementById('opcoes-container');
const contadorPergunta = document.getElementById('contador-pergunta');

const feedbackContainer = document.getElementById('feedback-container');
const feedbackTitulo = document.getElementById('feedback-titulo');
const feedbackExplicacao = document.getElementById('feedback-explicacao');

const btnComecar = document.getElementById('btn-comecar');
const btnProxima = document.getElementById('btn-proxima');
const btnReiniciar = document.getElementById('btn-reiniciar');

function iniciarQuiz() {
  perguntaAtualIndex = 0;
  pontuacao = 0;
  telaInicio.classList.add('escondido');
  telaResultado.classList.add('escondido');
  telaPergunta.classList.remove('escondido');
  carregarPergunta();
}

function carregarPergunta() {
  feedbackContainer.classList.add('escondido');
  
  const perguntaAtual = perguntas[perguntaAtualIndex];
  textoPergunta.textContent = perguntaAtual.pergunta;
  contadorPergunta.textContent = `Pergunta ${perguntaAtualIndex + 1} de ${perguntas.length}`;
  
  if (perguntaAtual.imagem !== "") {
    imagemPergunta.src = perguntaAtual.imagem;
    imagemPergunta.classList.remove('escondido');
  } else {
    imagemPergunta.classList.add('escondido');
  }
  
  opcoesContainer.innerHTML = '';
  
  perguntaAtual.opcoes.forEach((opcao, index) => {
    const botao = document.createElement('button');
    botao.textContent = opcao;
    botao.classList.add('btn-opcao');
    
    botao.addEventListener('click', () => verificarResposta(index, botao));
    opcoesContainer.appendChild(botao);
  });
}

function verificarResposta(indiceEscolhido, botaoClicado) {
  const perguntaAtual = perguntas[perguntaAtualIndex];
  const botoes = document.querySelectorAll('.btn-opcao');
  
  botoes.forEach(b => b.disabled = true);
  
  feedbackContainer.classList.remove('acerto', 'erro');
  
  if (indiceEscolhido === perguntaAtual.respostaCorreta) {
    botaoClicado.classList.add('correta');
    pontuacao++;
    
    feedbackTitulo.textContent = "🎉 Correto!";
    feedbackContainer.classList.add('acerto');
  } else {
    botaoClicado.classList.add('errada');
    botoes[perguntaAtual.respostaCorreta].classList.add('correta');
    
    feedbackTitulo.textContent = "❌ Incorreto!";
    feedbackContainer.classList.add('erro');
  }
  
  feedbackExplicacao.textContent = perguntaAtual.explicacao;
  feedbackContainer.classList.remove('escondido');
}

function avancarPergunta() {
  perguntaAtualIndex++;
  if (perguntaAtualIndex < perguntas.length) {
    carregarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  telaPergunta.classList.add('escondido');
  telaResultado.classList.remove('escondido');
  
  document.getElementById('pontuacao-final').textContent = pontuacao;
  document.getElementById('total-perguntas').textContent = perguntas.length;
  
  const mensagem = document.getElementById('mensagem-resultado');
  const icone = document.getElementById('icone-resultado');
  
  if (pontuacao === perguntas.length) {
    icone.textContent = "🌟";
    mensagem.textContent = "Perfeito! Você arrasou e sabe tudo sobre descarte correto.";
  } else if (pontuacao >= perguntas.length / 2) {
    icone.textContent = "👏";
    mensagem.textContent = "Muito bem! Faltou pouco para ser um especialista. Continue aprendendo!";
  } else {
    icone.textContent = "🌱";
    mensagem.textContent = "Sempre é tempo de aprender! Leia as dicas do EcoMapa e tente novamente.";
  }
}

btnComecar.addEventListener('click', iniciarQuiz);
btnProxima.addEventListener('click', avancarPergunta);
btnReiniciar.addEventListener('click', iniciarQuiz);