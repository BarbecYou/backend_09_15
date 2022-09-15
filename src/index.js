import * as lista from '/src/lista.js';

document.getElementById("gomb").addEventListener('click', szamHozzaad);

function szamHozzaad(){
    lista.hozzaad(parseInt(document.getElementById("bevitel").value));
    document.getElementById('output').innerHTML = lista.atlag();
}
