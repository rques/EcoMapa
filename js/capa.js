const botoesFiltro = document.querySelectorAll('.btn-filtro');
const cardsEcoponto = document.querySelectorAll('.card-ecoponto');
const campoBusca = document.getElementById('campo-busca');
const botoesRota = document.querySelectorAll('.btn-rota');
const btnQuiz = document.getElementById('btn-abrir-quiz');

let filtroAtual = 'todos';

// 1. SISTEMA DE FILTRO E BUSCA
function atualizarCards() {
  const textoBusca = campoBusca.value.toLowerCase();

  cardsEcoponto.forEach(card => {
    const categoriasDoCard = card.getAttribute('data-categorias');
    const passaFiltro = (filtroAtual === 'todos' || categoriasDoCard.includes(filtroAtual));

    const nomeEcoponto = card.querySelector('.nome-ecoponto').textContent.toLowerCase();
    const passaBusca = nomeEcoponto.includes(textoBusca);

    if (passaFiltro && passaBusca) {
      card.classList.remove('escondido');
    } else {
      card.classList.add('escondido');
    }
  });
}

botoesFiltro.forEach(botao => {
  botao.addEventListener('click', () => {
    botoesFiltro.forEach(b => b.classList.remove('ativo'));
    botao.classList.add('ativo');
    filtroAtual = botao.getAttribute('data-filter');
    atualizarCards();
  });
});

campoBusca.addEventListener('input', () => {
  atualizarCards();
});

// 2. SISTEMA DE ROTAS COM WAZE
botoesRota.forEach(botao => {
  botao.addEventListener('click', (evento) => {
    const card = evento.target.closest('.card-ecoponto');
    const lat = card.getAttribute('data-lat');
    const lng = card.getAttribute('data-lng');
    
    // Abre o link direto do Waze passando latitude e longitude
    const urlWaze = `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`;
    window.open(urlWaze, '_blank');
  });
});

// 3. ABERTURA DO QUIZ
btnQuiz.addEventListener('click', () => {
  window.location.href = 'quiz.html';
});