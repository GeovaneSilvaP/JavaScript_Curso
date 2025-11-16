function filtarLista() {
  const filtro = document.getElementById("filtro").value.toUpperCase();

  const lista = document.getElementById("listaDeItems");

  const itens = lista.getElementsByTagName('li');

  for (let i = 0; i < itens.length; i++) {
    const item = itens[i]

    const texto = item.textContent || item.innerText;

    item.style.display = texto.toUpperCase().includes(filtro) ? "" : "none";
    
  }
}

const inputFiltro = document.getElementById("filtro");

inputFiltro.addEventListener('keyup', () =>{
    filtarLista()
})