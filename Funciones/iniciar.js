
export function iniciar() {
   let i = 0;
   do {
      let aceptar = prompt('Bienvenid@ a Arcanine una historia llena de aventuras asombrosas. ¿Deseas inciar un nuevo juego? y/n');
      if (aceptar == "y") {
         i += 1;
         alert("Bienvenido a Arcanine");
      }
      else if (aceptar == "si") {
         i += 1;
         alert("Bienvenido a Arcanine");
      }
      else if (aceptar == "Y") {
         i += 1;
         alert("Bienvenido a Arcanine");
      }
      else if (aceptar == "no") {
         i += 1;
         alert("lamentamos que no quieras jugar, puedes hacerlo más tarde, nos vemos");
      }
      else if (aceptar == "n") {
         i += 1;
         alert("lamentamos que no quieras jugar, puedes hacerlo más tarde, nos vemos");
      }
      else if (aceptar == "N") {
         i += 1;
         alert("lamentamos que no quieras jugar, puedes hacerlo más tarde, nos vemos");
      }
      else {
         i = 0;
         alert("no ingresaste un valor correcto intenta de nuevo");
      }
   } while (i < 1);
};



export function usuario() {

  let i=1
  var player1= prompt("Escribe el nombre de usuario");
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