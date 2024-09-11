document.addEventListener('DOMContentLoaded', function() {
  // Função para salvar os dados do cadastro no localStorage
  const registrarBtn = document.getElementById('registrar');
  if (registrarBtn) {
      registrarBtn.addEventListener('click', function(event) {
          event.preventDefault(); // Previne o envio do formulário automaticamente

          // Pega os valores dos inputs do cadastro
          const nome = document.getElementById('nome').value;
          const cpf = document.getElementById('cpf').value;
          const dataNasc = document.getElementById('data-nasc').value;
          const emailCadastro = document.getElementById('email').value;
          const senhaCadastro = document.getElementById('senha').value;
          const senhaConfirmacao = document.getElementById('senha-dnv').value;

          // Verifica se todos os campos estão preenchidos
          if (!nome || !cpf || !dataNasc || !emailCadastro || !senhaCadastro || !senhaConfirmacao) {
              alert('Por favor, preencha todos os campos.');
              return;
          }

          // Verifica se as senhas correspondem
          if (senhaCadastro !== senhaConfirmacao) {
              alert('As senhas não correspondem. Tente novamente.');
              return;
          }

          // Cria um objeto com os dados do usuário
          const usuario = {
              nome: nome,
              cpf: cpf,
              dataNasc: dataNasc,
              email: emailCadastro,
              senha: senhaCadastro
          };

          // Armazena os dados no localStorage (convertendo o objeto para string JSON)
          localStorage.setItem('usuario', JSON.stringify(usuario));
          
          // Redireciona o usuário para a página home.html após o registro
          window.location.href = '../html/home.html';
      });
  }

  // Função para validar os dados no login
  const acessarBtn = document.getElementById('acessar');
  if (acessarBtn) {
      acessarBtn.addEventListener('click', function(event) {
          event.preventDefault(); // Previne o envio do formulário automaticamente

          // Pega os valores dos inputs do login
          const emailLogin = document.getElementById('email-login').value;
          const senhaLogin = document.getElementById('senha-login').value;

          // Verifica se os campos estão preenchidos
          if (!emailLogin || !senhaLogin) {
              alert('Por favor, preencha todos os campos.');
              return;
          }

          // Recupera os dados do usuário do localStorage
          const usuarioCadastrado = JSON.parse(localStorage.getItem('usuario'));

          // Verifica se o usuário foi encontrado no localStorage
          if (!usuarioCadastrado) {
              alert('Nenhum usuário cadastrado encontrado!');
              return;
          }

          // Verifica se o email e senha são válidos
          if (usuarioCadastrado.email === emailLogin && usuarioCadastrado.senha === senhaLogin) {
              
              // Redirecionar para a página home.html se o login for bem-sucedido
              window.location.href = '../html/home.html';
          } else {
              alert('Email ou senha incorretos. Tente novamente.');
          }
      });
  }
});





      