document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

document.getElementById("logout_btn").onclick = function() {
    window.location.href = "/index.html";
};

