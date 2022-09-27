//Simulador de E-Commerce

//Seleccion del Auto
alert ("Selecciona una marca")
let marca = +(prompt("1-Mercedes 2-Porsche 3-Audi"));


// Modelo y Precio

let precioFinal = 0;

if (marca==1){
    alert ("Elegiste Mercedes")

    let modelo = +(prompt("1-C63 2-AMG 3-Maybach"));

switch (modelo) {
    case 1: {
        alert ("Mercedes C63");
        precioFinal = precioFinal + 160,000;
        break;
    }
    case 2: {
        alert("Mercedes AMG");
        precioFinal = precioFinal + 630,000;
        break;
    }
    case 3: {
        alert("Mercedes Mayback");
        precioFinal = precioFinal + 450,000;
        break;
    }
    default:
        alert("Esta opcion no es valida, porfavor vuelva a intetnar");       
}


}   else if (marca==2) {
    alert ("Elegiste Porsche")
    
    let modelo = +(prompt("1-911 2-GT3 3-Panamera"));

switch (modelo) {
    case 1: {
        alert ("Porsche 911");
        precioFinal = precioFinal + 330,000;
        break;
    }
    case 2: {
        alert("Porsche GT3");
        precioFinal = precioFinal + 430,000;
        break;
    }
    case 3: {
        alert("Porsche Panamera");
        precioFinal = precioFinal + 390,000;
        break;
    }
    default:
        alert("Esta opcion no es valida, porfavor vuelva a intetnar");       
}


}   else if (marca==3) {
    alert ("Elegiste Audi")

    let modelo = +(prompt("1-S5 2-R8 3-Q7"));

    switch (modelo) {
        case 1: {
            alert ("Audi S5");
            precioFinal = precioFinal + 130,000;
            break;
        }
        case 2: {
            alert("Audi R8");
            precioFinal = precioFinal + 460,000;
            break;
        }
        case 3: {
            alert("Audi Q7");
            precioFinal = precioFinal + 150,000;
            break;
        }
        default:
            alert("Esta opcion no es valida, porfavor vuelva a intetnar");    
    }
}

//Precio Final

return precioFinal; 




