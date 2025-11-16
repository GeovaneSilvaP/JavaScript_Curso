function removerItem(event) {
    
    const itemClicado = event.target;

    itemClicado.remove();

}

const itens = document.querySelectorAll(".item");

for (const item of itens) {
    item.addEventListener('click', removerItem)
}