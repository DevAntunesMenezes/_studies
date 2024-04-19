// Obtém a referência ao elemento de entrada (checkbox) com ID 'chk'
const chk = document.getElementById('chk');

// Adiciona um evento de escuta (listener) para o evento 'change' no checkbox 'chk'
chk.addEventListener('change', () => {
    // Quando o estado do checkbox muda, alterna a classe 'dark' no elemento 'body'
    // Isso adiciona a classe 'dark' ao body se ela não estiver presente,
    // ou remove a classe 'dark' do body se ela já estiver presente
    document.body.classList.toggle('dark');
});
