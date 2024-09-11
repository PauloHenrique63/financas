document.addEventListener('DOMContentLoaded', function() {
    // Função para salvar os dados do cadastro no localStorage
    const registrarBtn = document.getElementById('registrar');
    if (registrarBtn) {
        registrarBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o envio do formulário automaticamente
  
            // Pega os valores dos inputs do cadastro
            const nome = document.getElementById('nome').value;
            const dataNasc = document.getElementById('data-nasc').value;
            const emailCadastro = document.getElementById('email').value;
            const senhaCadastro = document.getElementById('senha').value;
  
            // Verifica se todos os campos estão preenchidos
            if (!nome || !dataNasc || !emailCadastro || !senhaCadastro) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
  
            // Função para gerar um número de cartão aleatório de 16 dígitos formatado com pontos
            function gerarNumeroCartao() {
                let numeroCartao = '';
                for (let i = 0; i < 16; i++) {
                    numeroCartao += Math.floor(Math.random() * 10);

                    // Adiciona um ponto após cada grupo de 4 dígitos, exceto no final
                    if ((i + 1) % 4 === 0 && i !== 15) {
                        numeroCartao += '.';
                    }
                }
                return numeroCartao;
            }
  
            // Gera o número do cartão
            const numeroCartao = gerarNumeroCartao();
  
            // Cria um objeto com os dados do usuário, incluindo o número do cartão
            const usuario = {
                nome: nome,
                dataNasc: dataNasc,
                email: emailCadastro,
                senha: senhaCadastro,
                numeroCartao: numeroCartao // Adiciona o número do cartão ao objeto
            };
  
            // Armazena os dados no localStorage (convertendo o objeto para string JSON)
            localStorage.setItem('usuario', JSON.stringify(usuario));
            
            // Redireciona o usuário para a página "cartao.html" após o registro
            window.location.href = '../html/cartao.html';
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
  
    // Função para exibir os dados na página cartao.html
    function carregarDadosCartao() {
        const usuario = JSON.parse(localStorage.getItem('usuario'));
        
        if (usuario) {
            document.querySelector('.nome').textContent = `Nome: ${usuario.nome}`;
            document.querySelector('.email').textContent = `Email: ${usuario.email}`;
            document.querySelector('.numero-cartao').textContent = `N.cartão: ${usuario.numeroCartao}`;
        }
    }

    // Verifica se está na página cartao.html para carregar os dados
    if (window.location.pathname.includes('cartao.html')) {
        carregarDadosCartao();
    }
});


  
  
  
  
  
        