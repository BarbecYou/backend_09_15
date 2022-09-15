import {lista, hozzaad, atlag} from './lista.js';

for (let i = 0; i < 10; i++){
    hozzaad(i);
    atlag();
    console.log(lista + " Átlag: " + atlag());
};

