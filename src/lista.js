export let lista = [];

export function hozzaad(szam){
    if (szam < 0){
        console.log("Hiba, a szám kisebb mint nulla!");
    } else {
        lista.push(szam);
    } 
}

export function atlag(){
    let osszeg = 0;
    for (let i = 0; i < lista.length; i++){
        osszeg += lista[i];
    }
    return osszeg / lista.length;
}

