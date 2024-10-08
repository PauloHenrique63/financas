document.addEventListener('DOMContentLoaded', function () {
    // Função para salvar os dados do cadastro no localStorage
    const registrarBtn = document.getElementById('registrar');
    if (registrarBtn) {
        registrarBtn.addEventListener('click', function (event) {
            event.preventDefault(); // Previne o envio do formulário automaticamente

            // Pega os valores dos inputs do cadastro
            const nome = document.getElementById('nome').value;
            const dataNasc = document.getElementById('data-nasc').value;
            const emailCadastro = document.getElementById('email').value;
            const senhaCadastro = document.getElementById('senha').value;
            const profissao = document.getElementById('profissao').value; // Obtém a profissão

            // Verifica se todos os campos estão preenchidos
            if (!nome || !dataNasc || !emailCadastro || !senhaCadastro || !profissao) {
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

            // Cria um objeto com os dados do usuário, incluindo o número do cartão e a profissão
            const usuario = {
                nome: nome,
                dataNasc: dataNasc,
                email: emailCadastro,
                senha: senhaCadastro,
                profissao: profissao, // Adiciona a profissão ao objeto
                numeroCartao: numeroCartao // Adiciona o número do cartão ao objeto
            };

            // Armazena os dados no localStorage (convertendo o objeto para string JSON)
            localStorage.setItem('usuario', JSON.stringify(usuario));

            // Redireciona o usuário para a página "cartao.html" após o registro
            window.location.href = '../html/home.html';
        });
    }

    // Função para validar os dados no login
    const acessarBtn = document.getElementById('acessar');
    if (acessarBtn) {
        acessarBtn.addEventListener('click', function (event) {
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
            // Atualiza os campos da tabela de dados na cartao.html
            const nomeElemento = document.querySelector('.dados .info .nome');
            const emailElemento = document.querySelector('.dados .info .email');
            const numeroCartaoElemento = document.querySelector('.dados .info .numero-cartao');

            // Verifica se os elementos existem antes de tentar preencher
            if (nomeElemento) nomeElemento.textContent = `Nome: ${usuario.nome}`;
            if (emailElemento) emailElemento.textContent = `Email: ${usuario.email}`;
            if (numeroCartaoElemento) numeroCartaoElemento.textContent = `N.cartão: ${usuario.numeroCartao}`;
        }
    }

    // Função para exibir nome e profissão na sidebar (cartao.html)
    function carregarDadosSidebar() {
        const usuario = JSON.parse(localStorage.getItem('usuario'));
        if (usuario) {
            const nomeElemento = document.querySelector('.item-description.nome');
            const profissaoElemento = document.querySelector('.item-description.profissao');

            if (nomeElemento) {
                nomeElemento.textContent = `${usuario.nome}`; // Exibe o nome
            }
            if (profissaoElemento) {
                profissaoElemento.textContent = `${usuario.profissao}`; // Exibe a profissão
            }
            // Exibe a profissão
        }
    }

    // Verifica se está na página cartao.html para carregar os dados
    if (window.location.pathname.includes('cartao.html') ||
    window.location.pathname.includes('plano1.html') ||
    window.location.pathname.includes('plano2.html') ||
    window.location.pathname.includes('plano3.html')) {
        
    carregarDadosCartao();
    carregarDadosSidebar();
}


    // Verifica se está em uma das páginas especificadas para carregar os dados na sidebar
    if (['home.html', 'seguros.html', 'cursos.html' , 'plano1.html' , 'plano2.html', 'plano3.html'].some(page => window.location.pathname.includes(page))) {
        carregarDadosSidebar();
    }
});

function toggleContent(index) {
    var campoTexto = document.getElementById("campo-texto-" + index);
    
    // Alterna entre adicionar ou remover a classe "show"
    if (campoTexto.classList.contains("show")) {
        campoTexto.classList.remove("show");
    } else {
        campoTexto.classList.add("show");
    }
}

// Verifica se está na página plano2.html para adicionar o evento de clique nas setas
if (window.location.pathname.includes('plano1.html') || 
    window.location.pathname.includes('plano2.html') || 
    window.location.pathname.includes('plano3.html')) {

    var setas = document.querySelectorAll('.abertura i');

    // Adiciona o evento de clique para cada seta
    setas.forEach((seta, index) => {
        seta.addEventListener('click', function() {
            toggleContent(index + 1); // Chama a função com o número correspondente
        });
    });
}


document.getElementById("apoliceButton").addEventListener("click", function() {
    window.open("https://drive.google.com/file/d/12VLRMmRJc6vLDRzUF_GpigzYswGI5qgM/view?usp=drivesdk", "_blank");
});










