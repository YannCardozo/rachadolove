       // Referência ao formulário
        const profileForm = document.getElementById('profileForm');

        // Carregar dados do usuário logado
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // Preenche os campos com as informações do usuário
                document.getElementById('nome').value = user.displayName || 'Usuário sem nome';
                document.getElementById('email').value = user.email;
            } else {
                // Se o usuário não estiver logado, redireciona para a página de login
                window.location.href = 'index.html';
            }
        });

        // Função de atualização de senha
        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Captura a nova senha
            const novaSenha = document.getElementById('senha').value;

            // Verifica se o usuário está autenticado
            const user = firebase.auth().currentUser;

            if (user) {
                // Atualizar a senha do usuário
                user.updatePassword(novaSenha).then(() => {
                    alert('Senha atualizada com sucesso!');
                    // Limpa o campo de senha
                    document.getElementById('senha').value = '';
                }).catch((error) => {
                    console.error('Erro ao atualizar a senha:', error);
                    alert('Erro ao atualizar a senha. Tente novamente.');
                });
            } else {
                // Usuário não autenticado
                alert('Usuário não está autenticado.');
                window.location.href = 'index.html';
            }
        });