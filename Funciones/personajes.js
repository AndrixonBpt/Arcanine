export function personaje (atributo, color, poderEspecial) {

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
    if (atributo==="agua") {
        poderEspecial= "Rio congelante"
    }
    else if (atributo==="tierra") {
        poderEspecial= "Magnitud colosal"
    }
    else if (atributo==="fuego") {
        poderEspecial= "Llamas de la muerte"
    }
    else if (atributo==="rayo") {
        poderEspecial="Destello Veloz"
    }
    const resultado={poderEspecial}
    alert(`Has escogido tu destino como dominante del ${atributo} `)
    return resultado.poderEspecial;
}


