function alterarCor() {
const classCor = document.querySelector('.cor');

classCor.classList.toggle('ativo');

}

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
   alterarCor()
})