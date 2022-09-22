let palavraDoDia = "navio"

function checarLetra(letraDigitada) {
    let existeLetra = palavraDoDia.indexOf(letraDigitada);
    if (existeLetra != -1) {
        console.log('Verde')
    } else {
        console.log('Vermelho')
    }
}
function execute() {
    let element = document.getElementById('tentativa');
    let children = element.children;
    let palaravra = [];
    let existeLetra = palavraDoDia.indexOf()
    for (let i = 0; i < children.length; i++) {
        let child = children[i];
        palaravra.push(child.value);
        console.log(palaravra)
    }
    // console.log(palaravra.join(""));
    checarLetra(palaravra.join(""))

}