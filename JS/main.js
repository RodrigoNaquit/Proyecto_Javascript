//Simulador de E-Commerce

/*eleccion del Auto
alert ("Selecciona una marca")
let marca = +(prompt("1-Mercedes 2-Porsche 3-Audi"));
*/

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

const marca = document.querySelector("#marca"),
    modelo = document.querySelector("#modelo"),
    color = document.querySelector("#color"),
    precio = document.querySelector("#precio"),
    img = document.querySelector("#img"),
    btnGuardar = document.querySelector("#btnGuardar");

//Inventario
const inventario = [
    {
        marca:"Mercedes Benz",
        modelo:"C63 ",
        color: "Blanco",
        precio: "$160,000 ",
        img: "./Media/C63.jpeg ",
        },
    {
        marca:"Mercedes Benz ",
        modelo:"AMG ONE",
        color: "Blanco",
        precio: "$630,000",
        img: "./Media/AMG One.webp",
        },
    {   
        marca:"Mercedes Benz",
        modelo:"Maybach",
        color: "Gris/Negro",
        precio: "$450,000",
        img: "./Media/Maybach.png",
        },
{
        marca:"Porsche",
        modelo:"911",
        color: "Negro",
        precio: "$330,000",
        img: "./Media/911.jpeg",
        },
    {
        marca:"Porsche",
        modelo:"GT3",
        color: "Verde",
        precio: "$430,000",
        img: "./Media/GT3.jpg",
        },
    {   
        marca:"Porsche ",
        modelo:"Panamera",
        color: "Negro",
        precio: "$390,000",
        img: "./Media/Panamera.webp",
        },

{
        marca:"Audi",
        modelo:"S5",
        color: "Blanco",
        precio: "$130,000",
        img: "./Media/S5.webp",
        },
    {
        marca:"Audi",
        modelo:"R8",
        color: "Nardo Gris",
        precio: "$460,000",
        img: "./Media/R8.jpg",
        },
    {   
        marca:"Audi",
        modelo:"Q7",
        color: "Gris",
        precio: "$150,000",
        img: "./Media/Q7.jpg",
        },
    
        
]



/* Modelo y Precio

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
*/


/*Console
console.log (Merc2);
console.log (precioFinal + Tax);
*/

//Funcion Principal
function Auto (marca, modelo, color, precio , img, cant) {
    this.marca=marca;
    this.modelo=modelo;
    this.color=color;
    this.precio=parseFloat(precio);
    if (precio==""){
        this.precio = 1;
    } else {
        this.precio = precio;
    }
    this.img=img;
    this.cant=cant;
}

//Funcion de Carrito
var shoppingCart = (function() {
    cart = [];
}
// Guardar el Carrito

function guardarCarrito(arr,Auto) {
    localStorage.setItem('Carrito', JSON.stringify(cart));
  }
 // Cargar Carrito
 function cargarCarrito(arr,Auto) {
    cart = JSON.parse(localStorage.getItem('carrito'));
  }
  if (localStorage.getItem("carrito") != null) {
    cargarCarrito();
  }

  //Agregar al carrito
  Object.agregarAlCarrito = function(marca, modelo, color, precio , img, cant){
    for(var Auto in cart) {
        if(cart[Auto].modelo= modelo) {
            cart[Auto].cant ++;
            guardarCarrito();
            return;
        }
    }
    var Auto = nuevoAuto(marca, modelo, color, precio , img, cant);
    cart.push(Auto);
    guardarCarrito(); }

//Limpiar Carrito
 obj.clearCart = function() {
    cart = [];
    saveCart();
  }

//Eventos 
//Sumar al carrito
$('.agregar').click(function(event) {
    event.preventDefault();
    var modelo = $(this).data('modelo');
    var precio = Number($(this).data('precio'));
    shoppingCart.addItemToCart(modelo, precio, 1);
    displayCart();
  });


// Clear Cart
$('.clear-cart').click(function() {
    shoppingCart.clearCart();
    displayCart();
  });