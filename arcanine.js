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
        `Tu nombre de usuario es ${player1} ¿Es correcto?
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
let ataqueEspecial = personaje();


function historia(){
   alert(`ARCANINE`)
   alert(`En el Año -2128 a.c el mundo estaba hecho un caos, la tierra estaba completamente en ruinas y muchas personas habían perdido la vida a causa de los necrones.`)
   alert(`Los necrones era un grupo de criaturas de 4 mts de altura con una espantosa forma de leones, y un cuerpo fornido. . Estas criaturas aterrizaron en la tierra hace 220 años atrás cuando cayó un meteorito al cual se le conoce como la base, este meteorito vino en conjunto con la vida extraterrestre.`)
   alert(`Al principio eran criaturas muy bondadosas ayudaron a surgir la humanidad, pero 20 años después la tierra se enfrentó al ataque de estas criaturas que aparentaban ser inofensivas.`)
   alert(`Pero el 13 de agosto de 2098 decidieron esclavizar la humanidad entera, destruyendo las bases milimitares, asesinando a todos los cuerpos de seguridad mundial y derrocando a los lideres por países. `)
   alert(`Su líder Cronos después de esa terrible batalla ha logrado esclavizar la Tierra por más de 200 años y tratado de extinguir la humanidad durante todo su reinado. `)
   alert(`Pero la humanidad no se ha rendido...`)
   alert(`Han logrado adaptarse a vivir en las oscuras cavernas escondidos de estas terribles criaturas, en donde el alimento y el agua escasea con frecuencia, a lo largo del tiempo los seres humanos desarrollado habilidades que los hicieron más hábiles para combatir con estos terribles seres, ahora sus ojos se adaptaron a la oscuridad y desarrollaron una increíble visión nocturna.`)
   alert(`Aparte de ello desarrollaron la agilidad para escalar paredes y montañas y han logrado conseguir una fuerza sobre humana. Pero en sus intentos por destruir a los necrones han fallado. Han perdido incontables vidas y hasta la actualidad no han logrado matar a ningún necron.`)
   alert(`${player1} un viajero de 220 años ha entrenado durante 58 años en la caverna unkown, dentro se ha preparado, físicamente con el plan de destruir a los necrones.`)
   alert(`ACTUALIDAD`)
   alert(`${player1} entrenando en la cueva `)
   alert(`????:  ${player1}  ¿aún estás entrenando? llevas 10 horas en esta cueva`)

   let question = prompt(`¿qué deseas hacer?(Solo debes colocar 1 o 2)
   1. Seguir entrenando
   2.atender a la voz misteriosa`)
   question=parseInt(question)
   if (question<2){
   alert(`puff, plosh. (rompió una roca)`)
   alert (`${player1}!!!!!!!!!!!`)
   alert (`${player1}: ahhh!!! ☹ Tremendo susto me has dado Iris.`)
   alert (`Iris: Te estoy llamando desde hace media hora y no respondes!!! Solo entrenar, entrenar y entrenar, no te cansas!!`)
   alert(`${player1}: Iris… cansarme no es una opción en este mundo, debo de seguir entrenando para poder derrotarlos, ¡todo lo que hemos perdido es a causa de los necrones!`)
   alert(`Iris: Tienes razón pero no sobrevivirás a una batalla si no te alimentas y duermes. En fin somos humanos…`)
   }
   else {
   alert (`${player1}: ¿iris?`)
   alert (`Iris: Solo entrenar, entrenar y entrenar ¿no te cansas?`)
   alert(`${player1}: Iris… cansarme no es una opción en este mundo, debo de seguir entrenando para poder derrotarlos, ¡todo lo que hemos perdido es a causa de los necrones!`)
   alert(`Iris: Tienes razón pero no sobrevivirás a una batalla si no te alimentas y duermes. En fin somos humanos…`)
   }
   alert(`***TEMBLOR EN LA CUEVA***`)
   alert(`Iris: ah!!!! `)
   alert(`${player1}: ¡Que pasa!`)
   alert(`***SONIDO DE NAVE ATERRIZANDO***`)
   alert(`Iris esta corriendo hacia  ${player1}`)
   alert(`${player1}: Estan aquí!!! Escondete`)
   alert(`Iris: ¿Donde?`)
   alert(`${player1} mueve una roca y aparece un hoyo.`)
   alert(`${player1}: aquí Iris, yo me quedaré aquí ese e camino te llevará a la otra salida de la cueva unkown.`)
   alert(`Iris: No!!! Ven conmigo ${player1}`)
   alert( `${player1}: ¡Corre Iris!`)
   alert(`${player1} la empuja en la cueva y cierra de nuevo con la piedra.`)
   alert(`Iris llorando puede ver un pequeño endidura para ver a su amigo ${player1} protegerla sabiendo que pronto morirá`)
   alert(`¡RUGIDO!`)
   alert(`Los Necrones se acercan a ${player1}`)
   alert(`${player1}: ¡vengan!`)
}
   historia()

//ataques de usuario
function numeroAzar(min, max) {
   return Math.floor(Math.random() * (max - min)) + min;
 }

let poderDeAtaqueuser = numeroAzar(5, 10)
function ataquesUser(puñodeFuerza) {
   puñodeFuerza= -Math.abs(2*poderDeAtaqueuser)
   return parseInt(puñodeFuerza)    
}
function ataquesUser2(patadaRapida) {
   patadaRapida= -Math.abs(1.5*poderDeAtaqueuser)
   return parseInt(patadaRapida)  
}
function ataquesUser3(cabezazo) {
   cabezazo = poderDeAtaqueuser*0.4
   cabezazo = cabezazo + (poderDeAtaqueuser*0.4)
   cabezazo = -Math.abs(cabezazo + (poderDeAtaqueuser*0.3))
   return parseInt(cabezazo)
}
function ataquesUser4(ataqueEspecial, max=30, min=20) {
   let random = Math.random(min, max);
   ataqueEspecial = -Math.abs(parseInt(random * poderDeAtaqueuser)*20)
   if (ataqueEspecial===0){
      ataqueEspecial=0
   }
   else{
      ataqueEspecial=ataqueEspecial
   }
   return parseInt(ataqueEspecial)
}
// fin de ataques de usuario
// fin de ataque computer
let poderDeAtaqueCom = numeroAzar(5, 10)
function ataquesCom(garraLarga) {
   garraLarga= -Math.abs(2*poderDeAtaqueCom);
   return garraLarga
}
function ataquesCom2(coletazo) {
   coletazo= parseInt(-Math.abs(1.5*poderDeAtaqueCom))
   return coletazo    
}
function ataquesCom3(rafaga) {
   rafaga = poderDeAtaqueCom*0.4
   rafaga = rafaga + (poderDeAtaqueCom*0.4)
   rafaga = -Math.abs(rafaga + (poderDeAtaqueCom*0.3))
   return parseInt(rafaga)
}
function ataquesCom4(ataqueEspecial, max=5, min=2) {
   let random = Math.random(min, max);
   ataqueEspecial = -Math.abs(parseInt(random * poderDeAtaqueCom)*4)
   if (ataqueEspecial===0){
      ataqueEspecial=0
   }
   else{
      ataqueEspecial=ataqueEspecial
   }
   return ataqueEspecial    
}

//  fin de ataque Computer

// Defensa
const personajeUser1 = {
   vida: 100,
   defensa: 50,
   atributo: "normal",
}
const personajeUser2 = {
   vida: 300,
   defensa: 300,
   atributo: "rayo",
   }
const personajeCom1 = {
   vida: 100,
   defensa: 200,
   atributo: "fuego",
}
const personajeCom2 = {
   vida: 200,
   defensa: 150,
   atributo: "fuego",
}
// Almacen de vida de los personajes
let personaje1VidaTotal = personajeUser1.vida + personajeUser1.defensa;
let personaje2VidaTotal = personajeUser2.vida + personajeUser2.defensa;
let computadora1VidaTotal = personajeCom1.vida + personajeCom1.defensa;
let computadora2VidaTotal = personajeCom2.vida + personajeCom2.defensa;
//Fin del almacen de vida de los personajes

// batallas
function batallaComAUser1(){
   let ataque1 = ataquesCom();
   personaje1VidaTotal = ataque1 + personaje1VidaTotal
   personaje2VidaTotal = ataque1 + personaje2VidaTotal
   return personaje1VidaTotal, personaje2VidaTotal, ataque1
}
function batallaComAUser2(){
   let ataque2 = ataquesCom2();
   personaje1VidaTotal = ataque2 + personaje1VidaTotal
   personaje2VidaTotal = ataque2 + personaje2VidaTotal
   return personaje1VidaTotal, personaje2VidaTotal, ataque2
}  
function batallaComAUser3(){
   let ataque3 = ataquesCom3();
   personaje1VidaTotal = ataque3 + personaje1VidaTotal
   personaje2VidaTotal = ataque3 + personaje2VidaTotal
   return personaje1VidaTotal, personaje2VidaTotal, ataque3
}  
function batallaComAUser4(){
   let ataque4 = ataquesCom4();
   personaje1VidaTotal = ataque4 + personaje1VidaTotal  
   personaje2VidaTotal = ataque4 + personaje2VidaTotal
   return personaje1VidaTotal, personaje2VidaTotal, ataque4
}  
function batallaUserACom1(){
   let ataque1 = ataquesUser();
   computadora1VidaTotal = ataque1 + computadora1VidaTotal
   computadora2VidaTotal = ataque1 + computadora2VidaTotal
   return computadora1VidaTotal, computadora2VidaTotal, ataque1
}
function batallaUserACom2(){
   let ataque2 = ataquesUser2();
   computadora1VidaTotal = ataque2 + computadora1VidaTotal
   computadora2VidaTotal = ataque2 + computadora2VidaTotal
   return computadora1VidaTotal, computadora2VidaTotal, ataque2
}  
function batallaUserACom3(){
   let ataque3 = ataquesUser3();
   computadora1VidaTotal = ataque3 + computadora1VidaTotal
   computadora2VidaTotal = ataque3 + computadora2VidaTotal
   return computadora1VidaTotal, computadora2VidaTotal, ataque3
}  
function batallaUserACom4(){
   let ataque4 = ataquesUser4();
   computadora1VidaTotal = ataque4 + computadora1VidaTotal
   computadora2VidaTotal = ataque4 + computadora2VidaTotal
   return computadora1VidaTotal, computadora2VidaTotal, ataque4
}  

function turnoUser(){
   
   let poderAtq
   let turnoUsuario = prompt(`Turno de ${player1} escoge un opción (número)
   1. Puño de fuerza
   2. Patada Rapida
   3. Cabezazo`)
   let i=1
   do 
   if (turnoUsuario==="1") {
       poderAtq=batallaUserACom1();
       alert(`tu ataque fue puño de fuerza daño: ${poderAtq}`)
       alert(`vida de Necron: ${computadora1VidaTotal}`);
       break
   }
   else if (turnoUsuario==="2"){
       poderAtq=batallaUserACom2();
       alert(`tu ataque fue Patada Rapida daño: ${poderAtq}`)
       alert(`vida del Necron: ${computadora1VidaTotal}`);
       break
   }
   else if (turnoUsuario==="3"){
       poderAtq=batallaUserACom3();
       alert(`tu ataque fue Cabezazo daño: ${poderAtq}`)
       alert(`vida del Necron: ${computadora1VidaTotal}`);
       break
   }
   else {
       alert("Por favor escribe un valor correcto")
       turnoUsuario = prompt(`Turno de ${player1} escoge un opción (número)
       1. Puño de fuerza
       2. Patada Rapida
       3. Cabezazo`)
   } while (i>0) {       
   }
   return computadora1VidaTotal
}


function turnoCom() {
   poderDeAtaqueCom = numeroAzar(10, 15)
   let poderatq
   let i = numeroAzar(1, 5);
   if (i===1){ 
       poderatq = batallaComAUser1()
       alert(`Necron uso garra larga daño ${poderatq}`)
       alert(`vida de ${player1}: ${personaje1VidaTotal}`)
   }
   else if (i===2){
       poderatq = batallaComAUser2()
       alert(`Necron uso coletazo daño ${poderatq}`)
       alert(`vida de ${player1}: ${personaje1VidaTotal}`)
   }
   else if (i===3){
       poderatq = batallaComAUser3()
       alert(`Necron uso coletazo daño ${poderatq}`)
       alert(`vida de ${player1}: ${personaje1VidaTotal}`)
   }
   else if (i===4){
       poderatq = batallaComAUser4()
       alert(`Necron uso ejecución en conjunto daño ${poderatq}`)
       alert(`vida de ${player1}: ${personaje1VidaTotal}`)
   }
   else {
       alert("fail")
   }
   return personaje1VidaTotal
}


function batalla(){
   turnoUser()
   computadora1VidaTotal
   turnoCom()
   personaje1VidaTotal 
   
   let i=0
   do {
       if (computadora1VidaTotal<=0) {
           alert(`${player1} Gana`)
           i=1
           break;
       }
       else if(personaje1VidaTotal<=0){
           alert("Necron Gana ")
           i=1
           break;
       }
       else if (personaje1VidaTotal>0) {
           turnoUser()
           computadora1VidaTotal;
           turnoCom()
           personaje1VidaTotal;
           
       }
       else if(computadora1VidaTotal>0) {
           turnoUser()
           computadora1VidaTotal;
           turnoCom()
           personaje1VidaTotal;
       }
       else{
           alert("algo falló dentro del juego")
           break;
       }
       
   } while (i<=0){
   }
}

batalla()




function historia1(){
   alert(`${player1}  ha perdido el brazo derecho y su ojo y  cae desmayado en el suelo`)
   alert(`Iris(llorando) Porque!!! `)
   alert(`Necron: Destruyanle la cabeza de esa manera este humano no saldrá de nuevo`)
   alert(`Necron camino a pisarle la cabeza. `)
   alert(`Segundos después necron se de cuenta que ${player1} no está. `)
   alert(`Escucha un ruido en el techo y sube su mirada`)
   alert(`${player1}  está en el aire con un aura dorada`)
   alert(`su brazo perdido Le reaparece en forma de rayo dorado y sus ojos se vuelven totalmente dorados `)
   alert(`El necron intenta golpearlo y los otros necrones intentan dispararle `)
}
historia1()



 function turnoUser2(){
   
   let poderAtq
   let turnoUsuario = prompt(`Turno de ${player1} escoge un opción (número)
   1. Puño de fuerza
   2. Patada Rapida
   3. Cabezazo
   4. ${ataqueEspecial} `)
   let i=1
   do 
   if (turnoUsuario==="1") {
       poderAtq=batallaUserACom1();
       alert(`tu ataque fue puño de fuerza daño: ${poderAtq}`)
       alert(`vida de Necron: ${computadora2VidaTotal}`);
       break
   }
   else if (turnoUsuario==="2"){
       poderAtq=batallaUserACom2();
       alert(`tu ataque fue Patada Rapida daño: ${poderAtq}`)
       alert(`vida del Necron: ${computadora2VidaTotal}`);
       break
   }
   else if (turnoUsuario==="3"){
       poderAtq=batallaUserACom3();
       alert(`tu ataque fue Cabezazo daño: ${poderAtq}`)
       alert(`vida del Necron: ${computadora2VidaTotal}`);
       break
   }
   else if (turnoUsuario==="4"){
       poderAtq=batallaUserACom4();
       alert(`tu ataque fue ${ataqueEspecial} Veloz daño: ${poderAtq}`)
       alert(`vida del Necron: ${computadora2VidaTotal}`);
       break
   }
   else {
       alert("Por favor escribe un valor correcto")
       turnoUsuario = prompt(`Turno de ${player1} escoge un opción (número)
       1. Puño de fuerza
       2. Patada Rapida
       3. Cabezazo
       4. ${ataqueEspecial} `)
   } while (i>0) {       
   }
   return computadora2VidaTotal
} 


function turnoCom2() {
   poderDeAtaqueCom = numeroAzar(10, 15)
   let poderatq
   let i = numeroAzar(1, 5);
   if (i===1){ 
       poderatq = batallaComAUser1()
       alert(`Necron uso garra larga daño ${poderatq}`)
       alert(`vida de ${player1}: ${personaje2VidaTotal}`)
   }
   else if (i===2){
       poderatq = batallaComAUser2()
       alert(`Necron uso coletazo daño ${poderatq}`)
       alert(`vida de ${player1}: ${personaje2VidaTotal}`)
   }
   else if (i===3){
       poderatq = batallaComAUser3()
       alert(`Necron uso coletazo daño ${poderatq}`)
       alert(`vida de ${player1}: ${personaje2VidaTotal}`)
   }
   else if (i===4){
       poderatq = batallaComAUser4()
       alert(`Necron uso ejecución en conjunto daño ${poderatq}`)
       alert(`vida de ${player1}: ${personaje2VidaTotal}`)
   }
   else {
       alert("fail")
   }
   return personaje2VidaTotal
}

function batalla2(){
   turnoUser2()
   computadora2VidaTotal
   turnoCom2()
   personaje2VidaTotal 
   
   let i=0
   do {
       if (computadora2VidaTotal<=0) {
           alert(`${player1} Gana`)
           i=1
           break;
       }
       else if(personaje2VidaTotal<=0){
           alert("Necron Gana ")
           i=1
           break;
       }
       else if (personaje2VidaTotal>0) {
           turnoUser2()
           computadora2VidaTotal;
           turnoCom2()
           personaje2VidaTotal;
           
       }
       else if(computadora2VidaTotal>0) {
           turnoUser2()
           computadora2VidaTotal;
           turnoCom2()
           personaje2VidaTotal;
       }
       else{
           alert("algo falló dentro del juego")
           break;
       }
       
   } while (i<=0){
   }
}

batalla2()


function historia2(){
   alert(`${player1}  destruyó todos los necrones en la cueva… pero se desmaya inmediatamente y su brazo derecho de rayos desaparece y cae arrodillado y se desmaya…`)
   alert(`CONTINUARÁ….. `)
}
historia2()
