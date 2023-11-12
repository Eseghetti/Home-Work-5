var cantidadDeGatos = 10;

for (let index = 1; index <= cantidadDeGatos; index++) { 
    var emoji;
    if (index % 3 === 1) {
        emoji = "😺";
    } else if (index % 3 === 2) {
        emoji = "😸";
    } else {
        emoji = "😹";
    }
    console.log('Gato #' + index + ': ' + emoji)
}