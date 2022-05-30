export function personaje (sexo, edad, atributo, color) {
    sexo = prompt(`¿Que tipo de sexo eres?
    1. Masculino
    2. Femenino`);
    switch (sexo) {
        case "1":
        case "m":
        case "masculino":
            sexo = "Masculino";
            break; 
        case "f":
        case "2":
        case "femenino":
            sexo = "femenino";
        default:
            break;
    }
    alert(`Tu sexo es ${sexo} `)

    edad = 0
    while (edad<=1) {
        edad = prompt("¿Cuál es tu edad? (ingrese un numero por favor)")
        let numeEdad=parseInt(edad)
        if (edad>=0) {
            break
        } //debemos de arreglar esta zona 
        else {
            alert("ingresa un número correcto")
            edad = prompt("¿Cuál es tu edad?")
            numeEdad=parseInt(edad)     
        }
    }
    alert(`Tu Edad es ${edad} `)
    atributo = prompt(`
    Escoge un de estos 4 atributos (solo tienes una oportunidad para decidir tu destino):
    1. agua         3. Fuego
    2. tierra       4. rayo`)
    switch (atributo) {
        case "1":
            atributo = "agua";
            color = "azul";
            break;
        case "2":
            atributo = "tierra"
            color = "marron";
            break;
        case "3":
        atributo = "fuego"
        color = "rojo";
        break;
        case "4":
        color = "amarillo";
        atributo = "rayo"
            break;
    
        default:
            break;
    }
    alert(`Has escogido tu destino como dominante del ${atributo} `)
}