document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
    document.querySelector('main h1').classList.toggle('move-title'); // Adiciona a classe para mover o título
});


document.getElementById("logout_btn").onclick = function () {
    window.location.href = "/index.html";
};

function abrirCartao1() {
    window.location.href = "plano1.html";
  }

function abrirCartao2() {
    window.location.href = "plano2.html";
  }

  function abrirCartao3() {
    window.location.href = "plano3.html";
  }  
  