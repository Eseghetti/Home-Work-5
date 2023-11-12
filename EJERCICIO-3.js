var cantidadDeGatos = 10;
var cantidadDePasos = 4;

for (let m = 1; m <= cantidadDeGatos; m++) {  

    const mycat = "Gato #";
    const catNumber = mycat.concat(m);
    let cat = " ";

    if (m % 2 === 0 ) {
        cat = "🐈‍⬛ ";
    } else{
        cat = "🐈 ";
    }

    let footprint = "";
    for (let n = 1; n <= cantidadDePasos; n++) {
        footprint = footprint.concat("🐾");
    }

    console.log(catNumber + ": " + cat + footprint)

}

