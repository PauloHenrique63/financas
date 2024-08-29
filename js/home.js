document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
    document.querySelector('main h1').classList.toggle('move-title'); // Adiciona a classe para mover o título
});


document.getElementById("logout_btn").onclick = function () {
    window.location.href = "/index.html";
};

