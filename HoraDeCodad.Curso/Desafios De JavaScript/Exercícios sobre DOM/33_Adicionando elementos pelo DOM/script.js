function addItems() {
    const novoItem = document.createElement("li");

    novoItem.textContent = "Novo Item";

    document.querySelector(".lista").appendChild(novoItem)
}

const btn = document.getElementById("btn");

btn.addEventListener('click', ()=>{
addItems()
})