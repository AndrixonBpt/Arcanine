import { iniciar} from "./Funciones/iniciar.js";
import { personaje } from "./Funciones/personajes.js";





const arcanineFirma = `
    _________________________$$$$$_________________________
    ________________________$$$$$$$________________________
    _______________________$$$$$$$$$_______________________
    _______________________$$$$$$$$$_______________________
    ________________________$$$$$$$________________________
    _________________________$$$$$_________________________
    _________________________$$$$$_________________________
    _________________________$$$$$_________________________
    _________________________$$$$$_________________________
    _________________________$$$$$_________________________
    _________________________$$$$$_________________________
    _______________$$$_______$$$$$_______$$$_______________
    ______________$$$$$______$$$$$______$$$$$______________
    _____________$$$$$$$$$$$$$$$$$$$$$$$$$$$$$_____________
    _____________$$$$$$$$$$$$$$$$$$$$$$$$$$$$$_____________
    _____________$$$$$$$$$$$$$$$$$$$$$$$$$$$$$_____________
    ______________$$$$$_____$$$$$$$_____$$$$$______________
    _______________$$$______$$___$$______$$$_______________
    ________________________$$___$$________________________
    ________________________$$_A_$$________________________
    ________________________$$___$$________________________
    ________________________$$_R_$$________________________
    ________________________$$___$$________________________
    ________________________$$_C_$$________________________
    ________________________$$___$$________________________
    ________________________$$_A_$$________________________
    ________________________$$___$$________________________
    ________________________$$_N_$$________________________
    ________________________$$___$$________________________
    ________________________$$_I_$$________________________
    ________________________$$___$$________________________
    ________________________$$_N_$$________________________
    ________________________$$___$$________________________
    ________________________$$_E_$$________________________
    ________________________$$___$$________________________
    ________________________$$___$$________________________
    ________________________$$___$$________________________
    ________________________$$___$$________________________
    ________________________$$$$$$$________________________
    ________________________$$$$$$$________________________
    ________________________$$$$$$$________________________
    _________________________$$$$$_________________________
    __________________________$$$__________________________
    ___________________________$___________________________`
console.log(arcanineFirma);

iniciar();

let player1
function usuario() {
    let i=1
    player1= prompt("Escribe el nombre de usuario");
     while (i>0 && i<3) {
        let respuestaUser= prompt(
        `Tu nombre de usuario es ${player1} ¿Es correcto? 1
        1. Si 
        2. No`);
              let i = parseInt(respuestaUser); 
           if (i === 1) {
              alert("Bienvenido ;D")
              break
           }
           else if (i === 2) {
              alert("ok");
              player1=prompt("Escribe el nombre de usuario")
           }
           else {
              alert('ingresa un valor correcto 1=si 2=no');
           }
     } 
     return alert(`Tu nombre de usuario es ${player1}`);
  };

usuario();
personaje();

function historia () {
    let hist1 = `Arcanine
    En el Año -2128 a.c el mundo estaba hecho un caos,
    la tierra estaba completamente en ruinas y muchas personas 
    habían perdido la vida a causa de los necrones.
    `

    let hist2 = `Los necrones era un grupo de criaturas del tamaño de una gandola
     y con una espantosa forma de leones, y un cuerpo fornido. . Estas criaturas
    aterrizaron en la tierra hace 220 años atrás cuando cayó un meteorito al cual 
    se le conoce como la base, este meteorito vino en conjunto con la vida 
    extraterrestre`

    let hist3 = `Al principio eran criaturas muy bondadosas y cariñosas,
     pero 20 años después la tierra entera se llenó de estas criaturas 
     que aparentaban ser inofensivas.`
    let hist4 = `Pero el 13 de agosto de 2098 decidieron esclavizar la humanidad entera,
     destruyendo las bases milimitares, asesinando a todos 
     los cuerpos de seguridad mundial y derrocando a los lideres por países. `

     let hist5 = `Su líder Cronos después de esa terrible batalla ha logrado esclavizar 
     la Tierra por más de 200 años y tratado de extinguir la humanidad durante todo su reinado. `

     let hist6 = `¡Pero la humanidad no se ha rendido!`

     let hist7 = `Ha logrado adaptarse a vivir en las oscuras cavernas escondidos de estas terribles criaturas,
      en donde el alimento y el agua escasea con frecuencia,
      a lo largo del tiempo los seres humanos desarrollado habilidades que los hicieron más hábiles para combatir
      con estos terribles seres, ahora sus ojos se adaptaron a la oscuridad y desarrollaron una increíble visión nocturna.`

     let hist8 = `Aparte de ello desarrollaron la agilidad para escalar paredes 
     y montañas tan rápida como los insectos y han logrado conseguir una fuerza sobre humana.
    Pero en sus intentos por destruir a los necrones ha fallado. Han perdido incontables vidas
    y hasta la actualidad no han logrado matar a ningún necron.`
    let hist9 = `${player1} un viajero de 235 años ha entrenado durante 58 años en la caverna unkown,
     dentro se ha preparado, físicamente con el plan de destruir a los necrones.  
    ACTUALIDAD`
    alert(hist9)
}
historia()

// Batalla1 
