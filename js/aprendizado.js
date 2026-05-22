// Função para expandir e retrair o conteúdo de TODOS os cards ao mesmo tempo
function toggleCard() {
    const allCards = document.querySelectorAll('.card');
    
    // Alterna a classe 'active' em todos os cards simultaneamente
    allCards.forEach(card => card.classList.toggle('active'));
}

// Redirecionamento para a página do Quiz
document.querySelector('.btn-quiz').addEventListener('click', function() {
    // Substitua 'quiz.html' pelo link real da sua página de jogo (se houver)
    window.location.href = 'quiz.html'; 
});