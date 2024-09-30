const signupForm = document.getElementById('signupForm');
const errorMessage = document.getElementById('error-message');

// Função de cadastro de usuários
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Pega os valores dos campos de cadastro
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const posicao = document.querySelector('input[name="posicao"]:checked') ? document.querySelector('input[name="posicao"]:checked').value : null;

    if (!posicao) {
        errorMessage.innerText = 'Selecione uma posição';
        return;
    }

    // Cadastra o usuário com Firebase Authentication
    firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then((userCredential) => {
            // Cadastro bem-sucedido
            const user = userCredential.user;
            console.log('Usuário cadastrado:', user);
            window.location.href = 'home.html'; 
        })
        .catch((error) => {
            // Tratar erros e exibir mensagens
            const errorCode = error.code;
            const errorMessageText = error.message;
            console.error('Erro no cadastro:', errorCode, errorMessageText);
            errorMessage.innerText = 'Erro: ' + errorMessageText;
        });
});