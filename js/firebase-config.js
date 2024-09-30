// Configuração do Firebase (substitua pelos dados do seu projeto)
const firebaseConfig = {
    apiKey: "AIzaSyAYJu4WZVhhljRcNvOJ4RSh4WynZ20kG9Y",
    authDomain: "racha-do-love-a0d04.firebaseapp.com",
    projectId: "racha-do-love-a0d04",
    storageBucket: "racha-do-love-a0d04.appspot.com",
    messagingSenderId: "76936076499",
    appId: "1:76936076499:web:930e848e8c7f97abb3c826"
  };

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

function logout() {
  firebase.auth().signOut().then(() => {
      // Logout bem-sucedido, redirecionar para a página de login
      console.log('Usuário deslogado com sucesso.');
      window.location.href = 'index.html';  // Substitua 'login.html' pelo caminho correto para sua página de login
  }).catch((error) => {
      // Tratar erros, se ocorrerem
      console.error('Erro ao deslogar:', error);
  })
};
