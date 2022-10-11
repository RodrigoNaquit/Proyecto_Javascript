//Simulador de E-Commerce

//Seleccion del Auto
alert ("Selecciona una marca")
let marca = +(prompt("1-Mercedes 2-Porsche 3-Audi"));

//Constantes
const Merc1 = {type:"Mercedes Benz", model:"C63", color:"Blanco"};
const Merc2 = {type:"Mercedes Benz", model:"AMG One", color:"Blanco"};
const Merc3 = {type:"Mercedes Benz", model:"Maybach", color:"Negro/Gris"};

const Porsche1 = {type:"Porsche", model:"911", color:"Negro"};
const Porsche2 = {type:"Porsche", model:"GT3", color:"Verde"};
const Porsche3 = {type:"Porsche", model:"Panamera", color:"Negro"};

const Audi1 = {type:"Audi", model:"S5", color:"Blanco"};
const Audi2 = {type:"Audi", model:"R8", color:"Nardo Gris"};
const Audi3 = {type:"Audi", model:"Q7", color:"Negro"};

const autos = [Merc1, Merc2, Merc3, Porsche1, Porsche2, Porsche3, Audi1, Audi2, Audi3];



// Modelo y Precio

let precioFinal = 0;

if (marca==1){
    alert ("Elegiste Mercedes Benz")

    let modelo = +(prompt("1-C63 2-AMG 3-Maybach"));

switch (modelo) {
    case 1: {
        alert (Merc1.model);
        precioFinal = precioFinal + 160000;
        break;
    }
    case 2: {
        alert(Merc2.model);
        precioFinal = precioFinal + 630000;
        break;
    }
    case 3: {
        alert(Merc3.model);
        precioFinal = precioFinal + 450000;
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
        alert (Porsche1.model);
        precioFinal = precioFinal + 330000;
        break;
    }
    case 2: {
        alert(Porsche2.model);
        precioFinal = precioFinal + 430000;
        break;
    }
    case 3: {
        alert(Porsche3.model);
        precioFinal = precioFinal + 390000;
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
            alert (Audi1.model);
            precioFinal = precioFinal + 130000;
            break;
        }
        case 2: {
            alert(Audi2.model);
            precioFinal = precioFinal + 460000;
            break;
        }
        case 3: {
            alert(Audi3.model);
            precioFinal = precioFinal + 150000;
            break;
        }
        default:
            alert("Esta opcion no es valida, porfavor vuelva a intetnar");    
    }
}

//Precio Final, Funcion
let Tax= precioFinal*0.30
function precio (precioFinal, Tax) {
    return precioFinal + Tax;
}

//Console
console.log (Merc2);
console.log (precioFinal + Tax);




