// Função de logout
function logout() {
    firebase.auth().signOut().then(() => {
        // Logout bem-sucedido, redirecionar para a página de login
        console.log('Usuário deslogado com sucesso.');
        window.location.href = 'index.html';  // Substitua 'login.html' pelo caminho correto para sua página de login
    }).catch((error) => {
        // Tratar erros, se ocorrerem
        console.error('Erro ao deslogar:', error);
    });
}
