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



// alternative
// function szamol(){
//     var a = document.getElementById('le').value;
//     var b = document.getElementById('fel').value;
//   var c = Math.abs(b - a);
//   if ( c == 0 ) {
//         alert('Hiba: Azonos megállókat választott ki!');
//     }
//     else 
//         {
//         alert('Menetidő: '+c+' perc!');
//     }
//   }