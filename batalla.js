
//ataques de usuario
function numeroAzar(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

let poderDeAtaqueuser = numeroAzar(5, 10)
function ataquesUser(puñodeFuerza) {
    puñodeFuerza= -Math.abs(2*poderDeAtaqueuser)
    return puñodeFuerza    
}
function ataquesUser2(patadaRapida) {
    patadaRapida= -Math.abs(1.5*poderDeAtaqueuser)
    return patadaRapida   
}
function ataquesUser3(cabezazo) {
    cabezazo = poderDeAtaqueuser*0.4
    cabezazo = cabezazo + (poderDeAtaqueuser*0.4)
    cabezazo = -Math.abs(cabezazo + (poderDeAtaqueuser*0.3))
    return cabezazo 
}
function ataquesUser4(destelloVeloz, max=5, min=2) {
    let random = Math.random(min, max);
    destelloVeloz = -Math.abs(parseInt(random * poderDeAtaqueuser)*4)
    if (destelloVeloz===0){
        destelloVeloz="fail"
    }
    else{
        destelloVeloz=destelloVeloz
    }
    return destelloVeloz 
}
// fin de ataques de usuario
// fin de ataque computer
let poderDeAtaqueCom = 10
function ataquesCom(garraLarga) {
    garraLarga= -Math.abs(2*poderDeAtaqueCom);
    return console.log(garraLarga)     
}
function ataquesCom2(coletazo) {
    coletazo= -Math.abs(1.5*poderDeAtaqueCom)
    return console.log(coletazo)     
}
function ataquesCom3(rafaga) {
    rafaga = poderDeAtaqueCom*0.4
    rafaga = rafaga + (poderDeAtaqueCom*0.4)
    rafaga = -Math.abs(rafaga + (poderDeAtaqueCom*0.3))
    return console.log(rafaga)  
}
function ataquesCom4(destelloVeloz, max=5, min=2) {
    let random = Math.random(min, max);
    destelloVeloz = -Math.abs(parseInt(random * poderDeAtaqueCom)*4)
    if (destelloVeloz===0){
        destelloVeloz="fail"
    }
    else{
        destelloVeloz=destelloVeloz
    }
    return console.log(destelloVeloz)     
}

//  fin de ataque Computer

// Defensa
const personajeUser = {
    vida: 100,
    defensa: 50,
    atributo: "rayo",
    poderDeAtaqueuser: 5, 
    ataquesUser(){},
}
const personajeUser2 = {
    vida: 100,
    defensa: 50,
    atributo: "rayo",
    poderDeAtaqueuser: 10
    
    }
const personajecom1 = {
    vida: 100,
    defensa: 50,
    atributo: "rayo",
    poderDeAtaqueCom: 15
}
const personajecom2 = {
    vida: 100,
    defensa: 50,
    atributo: "rayo",
    poderDeAtaqueCom: 5
}

personajeUser.ataquesUser()
function batallaComAUser1(){
    let vidaTotal = personajeUser.defensa + personajeUser.vida;
    let ataque = ataquesUser();
    let resultado = ataque + vidaTotal
    return console.log(resultado)
}  
batallaComAUser1();
    