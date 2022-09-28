const palavraDoDia = "navio"

function execute() {
    tentaviva1()
    tentaviva2()
    tentaviva3()
    tentaviva4()
    tentaviva5()
}

function tentaviva1() {
    let element = document.getElementById('tentativa1').children;
    for (let i = 0; i < element.length; i++) {
        let child = element[i];
        child.style.backgroundColor = checarLetra(child.value, i);
        console.log(`Letra: ${child.value}, Posição: ${i}`)
        child.style.color = "black";
    }
}

function tentaviva2() {
    let element = document.getElementById('tentativa2').children;
    for (let i = 0; i < element.length; i++) {
        let child = element[i];
        child.style.backgroundColor = checarLetra(child.value, i);
        console.log(`Letra: ${child.value}, Posição: ${i}`)
        child.style.color = "black";
    }
}
function tentaviva3() {
    let element = document.getElementById('tentativa3').children;
    for (let i = 0; i < element.length; i++) {
        let child = element[i];
        child.style.backgroundColor = checarLetra(child.value, i);
        console.log(`Letra: ${child.value}, Posição: ${i}`)
        child.style.color = "black";
    }
}
function tentaviva4() {
    let element = document.getElementById('tentativa4').children;
    for (let i = 0; i < element.length; i++) {
        let child = element[i];
        child.style.backgroundColor = checarLetra(child.value, i);
        console.log(`Letra: ${child.value}, Posição: ${i}`)
        child.style.color = "black";
    }
}
function tentaviva5() {
    let element = document.getElementById('tentativa5').children;
    for (let i = 0; i < element.length; i++) {
        let child = element[i];
        child.style.backgroundColor = checarLetra(child.value, i);
        console.log(`Letra: ${child.value}, Posição: ${i}`)
        child.style.color = "black";
    }
}

function checarLetra(letraDigitada, indice) {

    let exiteLetra = palavraDoDia.toUpperCase().indexOf(letraDigitada.toUpperCase());
    if (exiteLetra != -1 && exiteLetra == indice) {
        return "green"
    } else if (exiteLetra != -1) {
        return "yellow"
    } else {
        return "red"
    }
}