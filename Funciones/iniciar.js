
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
}