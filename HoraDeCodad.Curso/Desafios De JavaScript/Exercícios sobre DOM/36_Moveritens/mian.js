function moverItem(direcao) {
  const lista = document.getElementById("listaMover");
  const items = Array.from(lista.querySelectorAll("li"));
  const itemsSelecionado = lista.querySelector(".selecionado");

  if (!itemsSelecionado) {
    alert("Selecione um item");
    return
  }

  const index = items.indexOf(itemsSelecionado);

  if (direcao === "cima" && index > 0) {
    lista.insertBefore(itemsSelecionado, items[index - 1]);
  } else if (direcao === "baixo" && index < items.length - 1) {
    lista.insertBefore(itemsSelecionado.nextElementSibling, items[index]);
  }
}

function selecionarItem(event) {
  const items = document.querySelectorAll("#listaMover li");

  items.forEach((item) => {
    return item.classList.remove("selecionado");
  });

  event.target.classList.add("selecionado");
}

const itensDaLista = document.querySelectorAll("#listaMover li");

itensDaLista.forEach((item) => item.addEventListener("click", selecionarItem))

const botaoCima = document.querySelector("#moverCima");
const botaoBaixo = document.querySelector("#moverBaixo");

botaoCima.addEventListener("click", ()=> moverItem('cima'));
botaoBaixo.addEventListener("click", ()=> moverItem('baixo'));