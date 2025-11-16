function abrirModal() {
  document.querySelector("#myModal").style.display = "block";
}

function fecharModal() {
  document.querySelector("#myModal").style.display = "none";
}

const abrir = document.querySelector("#abrir");
const fechar = document.querySelector(".close");

abrir.addEventListener('click', abrirModal);
fechar.addEventListener('click', fecharModal);

window.addEventListener('click', (e) =>{
    if (e.target === document.querySelector("#myModal")) {
        fecharModal();
    }
})