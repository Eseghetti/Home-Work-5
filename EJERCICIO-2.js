var cantidadDeGatos = 5;
var cantidadDePasos = 3;

for (let m = 1; m <= cantidadDeGatos; m++) {  

    const mycat = "Gato #";
    const catNumber = mycat.concat(m);
    const cat = "🐈 ";
    let footprint = "";

    for (let n = 1; n <= cantidadDePasos; n++) {
        footprint = footprint.concat("🐾");
    }

    console.log(catNumber + ": " + cat + footprint)
    
}
