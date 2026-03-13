const botoesFiltro = document.querySelectorAll('.btn-filtro');
const cardsEcoponto = document.querySelectorAll('.card-ecoponto');
const campoBusca = document.getElementById('campo-busca');
const botoesRota = document.querySelectorAll('.btn-rota');
const btnQuiz = document.getElementById('btn-abrir-quiz');

let filtroAtual = 'todos';

function atualizarCards() {
  const textoBusca = campoBusca.value.toLowerCase();

  cardsEcoponto.forEach(card => {
    const categoriasDoCard = card.getAttribute('data-categorias') || "";
    const passaFiltro = (filtroAtual === 'todos' || categoriasDoCard.includes(filtroAtual));

    const conteudoCard = card.textContent.toLowerCase();
    const passaBusca = conteudoCard.includes(textoBusca);

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

campoBusca.addEventListener('input', atualizarCards);

botoesRota.forEach(botao => {
  botao.addEventListener('click', (evento) => {
    const card = evento.target.closest('.card-ecoponto');
    const lat = card.getAttribute('data-lat');
    const lng = card.getAttribute('data-lng');
    let urlMaps = "";

    if (lat && lng) {
      // Link direto por coordenadas
      urlMaps = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    } else {
      // Busca por texto
      const enderecoTexto = card.querySelector('.endereco').textContent.replace('📍', '').trim();
      const cidadeTexto = card.querySelector('.status').textContent.trim();
      urlMaps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(enderecoTexto + ', ' + cidadeTexto)}`;
    }
    window.open(urlMaps, '_blank');
  });
});

btnQuiz.addEventListener('click', () => {
  window.location.href = 'quiz.html';
});