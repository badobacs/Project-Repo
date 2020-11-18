let gomb = document.querySelector("#menetido");

function calculateMenetido() {
    let oda = document.querySelector("#odaut").value;
    let vissza = document.querySelector("#visszaut").value;
    let percek = Math.abs(vissza - oda);
    return percek;
}

function menetidoPercben() {
    let perc = calculateMenetido();
    if (perc === 0) {
        alert("Ugyanott vagy te idióta!");
    } else {
        alert(`A menetidő: ${perc} perc`);
    }
}

gomb.addEventListener("click", menetidoPercben);