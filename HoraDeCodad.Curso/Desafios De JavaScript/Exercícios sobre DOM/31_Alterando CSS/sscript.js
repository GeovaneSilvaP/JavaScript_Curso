function mudarCor() {
    const paragrafos = document.querySelectorAll('.cor');

    for (const paragrafo of paragrafos) {
        paragrafo.style.color = "red"
    }
}

mudarCor();