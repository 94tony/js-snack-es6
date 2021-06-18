/*
var biciArray = [
    {
        nome: 'bmw',
        peso: 20,
        
    },
    {
        nome: 'mnx',
        peso: 30,
        
    },
    {
        nome: 'bmx',
        peso: 40,
        
    }
];
var lastOldBici;  // qui metterò l'oggetto studente
var lastAgeOldBici = 0; // qui metterò solo l'età dello studente più anziano mai visto
for (var x = 0; x < biciArray.length; x++) {
    var thisAge = biciArray[x].peso;
    if (thisAge > lastAgeOldBici) {
        lastOldBici = biciArray[x];
        lastAgeOldBici = thisAge;

    }


}

console.log (lastOldBici)

*/

var biciArray = [
    {
        nome: 'bmw',
        peso: 20,
        
    },
    {
        nome: 'mnx',
        peso: 30,
        
    },
    {
        nome: 'bmx',
        peso: 40,
        
    }
];
let lastOldBici;  // qui metterò l'oggetto studente
let lastAgeOldBici = 0; // qui metterò solo l'età dello studente più anziano mai visto

for (let x = 0; x < biciArray.length; x++) {

    const { peso } = biciArray[x];
    
    if (peso < lastAgeOldBici) {
        lastOldBici = biciArray[x];
        lastAgeOldBici = peso;
    }

}


const {  peso } = lastOldBici;

console.log(`la bici più leggera
 è ${nome} ${cognome}`)





