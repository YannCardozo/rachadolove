// Referência ao formulário
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

// Função de login com Firebase Auth
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Pega os valores dos campos de email e senha
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Autentica o usuário com o Firebase
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Login bem-sucedido
            const user = userCredential.user;
            console.log('Usuário logado:', user);
            window.location.href = 'home.html'; // Redirecionar após login
        })
        .catch((error) => {
            // Exibe mensagens de erro
            const errorCode = error.code;
            const errorMessageText = error.message;
            console.error('Erro no login:', errorCode, errorMessageText);
            errorMessage.innerText = 'Erro: ' + errorMessageText;
        });
});

