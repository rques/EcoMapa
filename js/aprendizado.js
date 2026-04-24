// Função para expandir e retrair o conteúdo dos cards informativos
function toggleCard(cardElement) {
    // Verifica se o card atual já está ativo
    const isActive = cardElement.classList.contains('active');

    // Remove a classe 'active' de todos os cards (opcional: se quiser que só um fique aberto por vez)
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => card.classList.remove('active'));

    // Se o card clicado não estava ativo, ele abre agora
    if (!isActive) {
        cardElement.classList.add('active');
    }
}

// Redirecionamento para a página do Quiz
document.querySelector('.btn-quiz').addEventListener('click', function() {
    // Substitua 'quiz.html' pelo link real da sua página de jogo
    window.location.href = 'quiz.html'; 
});