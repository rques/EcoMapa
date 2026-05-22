// BANCO DE DADOS DE PERGUNTAS (Apenas Reciclagem e Sustentabilidade)
// BANCO DE DADOS DE PERGUNTAS (25 Perguntas sobre Reciclagem e Sustentabilidade)
const todasAsPerguntas = [
  // --- As 4 perguntas com imagens ---
  {
    pergunta: "A caixa de pizza engordurada deve ir para qual lixeira?",
    imagem: "../imagens/caixa de pizza.jpg", 
    opcoes: [
      "Lixeira Azul (Papel)",
      "Lixeira Comum/Orgânica",
      "Lixeira Vermelha (Plástico)",
      "Lixeira Verde (Vidro)"
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
      "Armazenar em garrafa PET e levar a um ecoponto",
      "Jogar no vaso sanitário"
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
      "Misturar com o resto do lixo orgânico",
      "Jogar solto no lixo reciclável"
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
      "Apenas se for de embalagem de eletrônicos",
      "Não, deve ser queimado"
    ],
    respostaCorreta: 1,
    explicacao: "Sim! O Isopor é um tipo de plástico (Poliestireno). Desde que esteja limpo e sem restos de comida, ele pode e deve ser reciclado na lixeira vermelha."
  },
  
  // --- Perguntas Gerais ---
  {
    pergunta: "Qual é a forma mais eficiente e simples de iniciar a separação de lixo em casa?",
    imagem: "",
    opcoes: [
      "Ter lixeiras de cinco cores diferentes na cozinha.",
      "Dividir os resíduos apenas entre Secos (recicláveis) e Úmidos (orgânicos/comuns).",
      "Juntar todo o lixo em um saco só e deixar que a cooperativa separe.",
      "Separar apenas o vidro e descartar o resto como lixo comum."
    ],
    respostaCorreta: 1,
    explicacao: "Esta é a regra de ouro que viabiliza a reciclagem doméstica de forma prática e evita a contaminação dos materiais secos."
  },
  {
    pergunta: "O que você deve fazer com caixas de papelão e folhas de papel para facilitar a reciclagem?",
    imagem: "",
    opcoes: [
      "Amassar bem e fazer bolinhas para ocupar menos espaço.",
      "Molhar o papel para que ele desmanche mais fácil.",
      "Rasgar ou dobrar o papel, mas nunca amassar.",
      "Descartar junto com os restos de comida no lixo úmido."
    ],
    respostaCorreta: 2,
    explicacao: "Dobrar ou rasgar ajuda a economizar espaço na lixeira mantendo as fibras do material intactas. Amassar quebra as fibras e prejudica a reciclagem."
  },
  {
    pergunta: "Qual é a melhor prática para higienizar embalagens plásticas antes de colocá-las no lixo reciclável?",
    imagem: "",
    opcoes: [
      "Lavar com água potável da torneira e bastante detergente.",
      "Utilizar água de reúso, como a que sobra da máquina de lavar.",
      "Não higienizar, pois a sujeira ajuda no processo.",
      "Ferver as embalagens antes de descartar."
    ],
    respostaCorreta: 1,
    explicacao: "A água de reúso é perfeita para retirar restos de comida das embalagens sem gastar água limpa e potável desnecessariamente."
  },
  {
    pergunta: "As bandejas de isopor e as cartelas de comprimidos vazias devem ser descartadas em qual tipo de lixo?",
    imagem: "",
    opcoes: [
      "Lixo eletrônico.",
      "Lixo orgânico/comum.",
      "Lixo reciclável (junto com os plásticos).",
      "Não devem ser descartadas, devem ser queimadas no quintal."
    ],
    respostaCorreta: 2,
    explicacao: "O isopor é um tipo de plástico (EPS) e as cartelas vazias são recicláveis, podendo virar matéria-prima de construção civil."
  },
  {
    pergunta: "Qual é a melhor solução doméstica para evitar que restos crus de vegetais e cascas de frutas acabem em um aterro sanitário?",
    imagem: "",
    opcoes: [
      "Bater tudo no liquidificador e jogar na pia.",
      "Fazer compostagem doméstica.",
      "Congelar os restos para sempre no freezer.",
      "Jogar os restos diretamente na rua para os passarinhos."
    ],
    respostaCorreta: 1,
    explicacao: "A composteira transforma essa matéria orgânica em um adubo de altíssima qualidade para plantas, reduzindo o volume de lixo."
  },
  {
    pergunta: "Para onde devem ser levados os medicamentos que passaram do prazo de validade?",
    imagem: "",
    opcoes: [
      "Para o lixo orgânico da casa.",
      "Para o ralo da pia ou vaso sanitário.",
      "Para as farmácias ou postos de saúde.",
      "Para a lixeira de materiais recicláveis."
    ],
    respostaCorreta: 2,
    explicacao: "Esses locais possuem pontos de coleta específicos e garantem a incineração correta dos resíduos químicos sem contaminar a água."
  },
  {
    pergunta: "Onde fraldas descartáveis, borra de café e guardanapos engordurados devem ser colocados?",
    imagem: "",
    opcoes: [
      "No lixo reciclável.",
      "Na composteira com minhocas.",
      "No lixo comum/úmido.",
      "Junto com os vidros."
    ],
    respostaCorreta: 2,
    explicacao: "Esses itens são classificados como rejeitos ou matéria orgânica úmida que não possuem viabilidade de reciclagem limpa."
  },
  {
    pergunta: "O que é Logística Reversa no contexto de eletrônicos, pilhas e baterias?",
    imagem: "",
    opcoes: [
      "A obrigação de fabricantes de recolher e dar destino correto aos produtos pós-consumo.",
      "O processo de inverter o caminhão de lixo para recolher materiais.",
      "O hábito de reutilizar a mesma pilha várias vezes recarregando-a no sol.",
      "Entregar o lixo para o vizinho reciclar."
    ],
    respostaCorreta: 0,
    explicacao: "A lei obriga quem produz materiais complexos e pesados a ter canais para recebê-los de volta e reciclá-los com segurança."
  },
  {
    pergunta: "Se o seu bairro não é atendido por coleta seletiva oficial, qual é a melhor atitude?",
    imagem: "",
    opcoes: [
      "Desistir de separar o lixo e jogar tudo no aterro comum.",
      "Deixar o lixo reciclável acumulando na rua até alguém recolher.",
      "Utilizar apps como o Cataki para se conectar com catadores ou buscar um PEV.",
      "Queimar os materiais recicláveis para não gerar volume."
    ],
    respostaCorreta: 2,
    explicacao: "A tecnologia e os Pontos de Entrega Voluntária (PEVs) são as melhores pontes entre quem separa o lixo e quem trabalha com a reciclagem."
  },
  {
    pergunta: "A caixa externa de papelão do tubo de pasta de dente deve ser tratada como:",
    imagem: "",
    opcoes: [
      "Lixo orgânico, por estar no banheiro.",
      "Lixo eletrônico.",
      "Lixo reciclável, devendo ir junto com papéis e plásticos secos.",
      "Rejeito contaminado que não tem conserto."
    ],
    respostaCorreta: 2,
    explicacao: "O papelão limpo da caixa é perfeitamente reaproveitável, independentemente de ser um item de higiene que fica no banheiro."
  },
  {
    pergunta: "Qual é o principal impacto ambiental do lixo orgânico comum no aterro sanitário?",
    imagem: "",
    opcoes: [
      "O enriquecimento rápido da terra ao redor do aterro.",
      "A emissão do gás metano durante a decomposição, que agrava o efeito estufa.",
      "A melhoria da camada de ozônio devido aos processos químicos do chorume.",
      "O resfriamento da temperatura ambiente da cidade."
    ],
    respostaCorreta: 1,
    explicacao: "O apodrecimento sem oxigênio do lixo orgânico sob montanhas de sacos plásticos gera grandes volumes de metano, um gás nocivo."
  },
  {
    pergunta: "Como devemos proceder com as caixinhas de leite e suco tipo 'Tetra Pak'?",
    imagem: "",
    opcoes: [
      "Devem ser jogadas no lixo comum, pois não reciclam.",
      "Devem ser higienizadas e colocadas no lixo reciclável (seco).",
      "Devem ser enterradas no jardim para servirem de adubo.",
      "Podem ser picotadas e jogadas no vaso sanitário."
    ],
    respostaCorreta: 1,
    explicacao: "As caixinhas Tetra Pak são compostas de papel, plástico e alumínio, todos materiais altamente recicláveis após estarem limpos."
  },
  {
    pergunta: "Um frasco de vidro de molho de tomate acabou. Você lavou ele. E agora?",
    imagem: "",
    opcoes: [
      "Vai para o lixo comum pois conteve alimento.",
      "Vai para o lixo reciclável, de preferência sem a tampa de metal.",
      "Deve ser quebrado antes de ir para a reciclagem.",
      "Guarde infinitamente no armário até descobrir um uso."
    ],
    respostaCorreta: 1,
    explicacao: "O vidro é 100% reciclável infinitas vezes. Ao separar a tampa de metal, você facilita e agiliza a triagem na cooperativa."
  },

  // --- Novas perguntas adicionadas ---
  {
    pergunta: "Qual é a ordem correta dos famosos '3 Rs' da sustentabilidade?",
    imagem: "",
    opcoes: [
      "Reciclar, Reutilizar e Reduzir.",
      "Reduzir, Reutilizar e Reciclar.",
      "Reutilizar, Reciclar e Reduzir.",
      "Reciclar, Renovar e Recriar."
    ],
    respostaCorreta: 1,
    explicacao: "Primeiro devemos Reduzir o consumo, depois Reutilizar o que for possível, e só então Reciclar o que sobrar como última etapa."
  },
  {
    pergunta: "Na padronização internacional de cores da coleta seletiva, o que a lixeira amarela recebe?",
    imagem: "",
    opcoes: [
      "Papel e Papelão.",
      "Vidro.",
      "Metal.",
      "Plástico."
    ],
    respostaCorreta: 2,
    explicacao: "A lixeira amarela é destinada a metais, como latas de alumínio, tampinhas de garrafa e lacres."
  },
  {
    pergunta: "O papel alumínio usado para cobrir alimentos na cozinha pode ser reciclado?",
    imagem: "",
    opcoes: [
      "Sim, desde que esteja razoavelmente limpo e sem excesso de comida.",
      "Não, pois o alumínio perde suas propriedades ao entrar em contato com o calor.",
      "Não, deve ir para o lixo orgânico.",
      "Sim, mas deve ir para a lixeira azul (papel)."
    ],
    respostaCorreta: 0,
    explicacao: "O papel alumínio é reciclável (lixeira amarela). Basta retirar o excesso de alimentos antes do descarte."
  },
  {
    pergunta: "Por que o lixo eletrônico (celulares, cabos, placas) não pode ir para o lixo comum?",
    imagem: "",
    opcoes: [
      "Porque eles explodem facilmente em contato com outros materiais.",
      "Porque contêm metais pesados tóxicos que contaminam o solo e a água.",
      "Porque o plástico dos eletrônicos atrai pragas urbanas.",
      "Porque ocupam muito espaço nos caminhões de lixo."
    ],
    respostaCorreta: 1,
    explicacao: "Componentes eletrônicos possuem chumbo, mercúrio e cádmio. Se descartados incorretamente, causam sérios danos à saúde e ao meio ambiente."
  },
  {
    pergunta: "Aproximadamente, quanto tempo o plástico comum pode levar para se decompor na natureza?",
    imagem: "",
    opcoes: [
      "De 1 a 5 anos.",
      "Cerca de 50 anos.",
      "Mais de 400 anos.",
      "Ele não se decompõe, apenas evapora com o calor."
    ],
    respostaCorreta: 2,
    explicacao: "A maioria dos plásticos leva centenas de anos para se decompor, fragmentando-se em microplásticos que continuam poluindo o planeta."
  },
  {
    pergunta: "O que significa o termo 'Upcycling' na sustentabilidade?",
    imagem: "",
    opcoes: [
      "Acelerar a decomposição de matéria orgânica com produtos químicos.",
      "Transformar materiais descartados em novos produtos de maior valor e qualidade.",
      "Enviar lixo para o espaço sideral.",
      "Queimar plásticos para gerar energia elétrica."
    ],
    respostaCorreta: 1,
    explicacao: "O Upcycling (ou reutilização criativa) dá um novo propósito muito melhor a um material que iria para o lixo, sem precisar degradá-lo."
  },
  {
    pergunta: "Qual destes itens NÃO deve ser colocado em uma composteira doméstica com minhocas?",
    imagem: "",
    opcoes: [
      "Cascas de banana e maçã.",
      "Borra de café.",
      "Carnes, laticínios e alimentos com muito óleo/sal.",
      "Folhas secas de árvores."
    ],
    respostaCorreta: 2,
    explicacao: "Restos de carne, queijo e alimentos temperados apodrecem, atraem ratos/moscas e alteram o pH, podendo matar as minhocas da composteira."
  },
  {
    pergunta: "Qual atitude do dia a dia mais ajuda a reduzir a 'pegada de carbono' pessoal?",
    imagem: "",
    opcoes: [
      "Lavar o carro todos os dias com mangueira.",
      "Priorizar o transporte público, bicicleta ou caminhada em vez de carro particular.",
      "Deixar os aparelhos eletrônicos em stand-by o dia todo.",
      "Comprar roupas novas toda semana."
    ],
    respostaCorreta: 1,
    explicacao: "A queima de combustíveis fósseis por veículos é uma das maiores fontes de emissão de CO2. Optar por transportes alternativos reduz significativamente esse impacto."
  }
];

// VARIÁVEIS DE CONTROLE DO JOGO
let perguntasSelecionadas = [];
let perguntaAtualIndex = 0;
let pontuacao = 0;
const MAX_PERGUNTAS = 10; // Limite de perguntas por partida

// CAPTURA DOS ELEMENTOS DO HTML
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

// FUNÇÃO PARA EMBARALHAR ARRAY (Sorteio Aleatório - Algoritmo Fisher-Yates)
function embaralharArray(array) {
  let arrayEmbaralhado = [...array];
  for (let i = arrayEmbaralhado.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayEmbaralhado[i], arrayEmbaralhado[j]] = [arrayEmbaralhado[j], arrayEmbaralhado[i]];
  }
  return arrayEmbaralhado;
}

// INICIA O QUIZ E SORTEIA AS 10 PERGUNTAS
function iniciarQuiz() {
  perguntaAtualIndex = 0;
  pontuacao = 0;
  
  // Embaralha todas as perguntas e pega apenas as 10 primeiras
  perguntasSelecionadas = embaralharArray(todasAsPerguntas).slice(0, MAX_PERGUNTAS);
  
  telaInicio.classList.add('escondido');
  telaResultado.classList.add('escondido');
  telaPergunta.classList.remove('escondido');
  carregarPergunta();
}

function carregarPergunta() {
  feedbackContainer.classList.add('escondido');
  
  const perguntaAtual = perguntasSelecionadas[perguntaAtualIndex];
  textoPergunta.textContent = perguntaAtual.pergunta;
  
  // Atualiza o contador e mostra a pontuação atual em tempo real
  contadorPergunta.textContent = `Pergunta ${perguntaAtualIndex + 1} de ${perguntasSelecionadas.length} | Pontos: ${pontuacao}`;
  
  // Lida com a imagem (se existir mostra, se não, oculta)
  if (perguntaAtual.imagem && perguntaAtual.imagem !== "") {
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
  const perguntaAtual = perguntasSelecionadas[perguntaAtualIndex];
  const botoes = document.querySelectorAll('.btn-opcao');
  
  // Desativa todos os botões após a escolha
  botoes.forEach(b => b.disabled = true);
  
  feedbackContainer.classList.remove('acerto', 'erro');
  
  if (indiceEscolhido === perguntaAtual.respostaCorreta) {
    botaoClicado.classList.add('correta');
    pontuacao++; // Adiciona ponto
    
    // Atualiza o placar imediatamente após o acerto
    contadorPergunta.textContent = `Pergunta ${perguntaAtualIndex + 1} de ${perguntasSelecionadas.length} | Pontos: ${pontuacao}`;
    
    feedbackTitulo.textContent = "🎉 Correto!";
    feedbackContainer.classList.add('acerto');
  } else {
    botaoClicado.classList.add('errada');
    // Mostra qual era a certa
    botoes[perguntaAtual.respostaCorreta].classList.add('correta');
    
    feedbackTitulo.textContent = "❌ Incorreto!";
    feedbackContainer.classList.add('erro');
  }
  
  feedbackExplicacao.textContent = perguntaAtual.explicacao;
  feedbackContainer.classList.remove('escondido');
}

function avancarPergunta() {
  perguntaAtualIndex++;
  if (perguntaAtualIndex < perguntasSelecionadas.length) {
    carregarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  telaPergunta.classList.add('escondido');
  telaResultado.classList.remove('escondido');
  
  document.getElementById('pontuacao-final').textContent = pontuacao;
  document.getElementById('total-perguntas').textContent = perguntasSelecionadas.length;
  
  const mensagem = document.getElementById('mensagem-resultado');
  const icone = document.getElementById('icone-resultado');
  
  // Feedbacks baseados na pontuação (Base de 10 perguntas)
  if (pontuacao === MAX_PERGUNTAS) {
    icone.textContent = "🌟";
    mensagem.textContent = "Gabaritou! Você é um verdadeiro mestre da sustentabilidade.";
  } else if (pontuacao >= 7) {
    icone.textContent = "👏";
    mensagem.textContent = "Excelente! Você tem um ótimo conhecimento sobre o assunto.";
  } else if (pontuacao >= 5) {
    icone.textContent = "👍";
    mensagem.textContent = "Foi na média! Que tal jogar de novo para fixar os conceitos que faltaram?";
  } else {
    icone.textContent = "🌱";
    mensagem.textContent = "Sempre é tempo de aprender! Leia as dicas e tente novamente.";
  }
}

// EVENTOS DE CLIQUE
btnComecar.addEventListener('click', iniciarQuiz);
btnProxima.addEventListener('click', avancarPergunta);
btnReiniciar.addEventListener('click', iniciarQuiz);