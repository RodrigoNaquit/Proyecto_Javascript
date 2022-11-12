

//Inventario
const productos = [
    {   
        id:0,
        marca:"Mercedes Benz",
        modelo:"C63 ",
        color: "Blanco",
        precio: 160000,
        img: "./Media/C63.jpeg ",
        },
    {
        id:1,
        marca:"Mercedes Benz ",
        modelo:"AMG ONE",
        color: "Blanco",
        precio: 630000,
        img: "./Media/AMG One.webp",
        },
    {   
        id:2,
        marca:"Mercedes Benz",
        modelo:"Maybach",
        color: "Gris/Negro",
        precio: 450000,
        img: "./Media/Maybach.png",
        },
{
        id:3,
        marca:"Porsche",
        modelo:"911",
        color: "Negro",
        precio: "$330,000",
        img: "./Media/911.jpeg",
        },
    {   
        id:4,
        marca:"Porsche",
        modelo:"GT3",
        color: "Verde",
        precio: "$430,000",
        img: "./Media/GT3.jpg",
        },
    {   
        id:5,
        marca:"Porsche ",
        modelo:"Panamera",
        color: "Negro",
        precio: "$390,000",
        img: "./Media/Panamera.webp",
        },

{       
    id:6,
        marca:"Audi",
        modelo:"S5",
        color: "Blanco",
        precio: "$130,000",
        img: "./Media/S5.webp",
        },
    {   
        id:7,
        marca:"Audi",
        modelo:"R8",
        color: "Nardo Gris",
        precio: "$460,000",
        img: "./Media/R8.jpg",
        },
    {   
        id:8,
        marca:"Audi",
        modelo:"Q7",
        color: "Gris",
        precio: "$150,000",
        img: "./Media/Q7.jpg",
        },
    
        
]

const productosEl = document.querySelector (".conteiner");
const cartItemsEl = document.querySelector(".cart")

function renderProductos(){
    productos.forEach( (producto) => {
        productosEl.innerHTML +=`
            <h2 class="brand">${producto.marca}</h2>
                <div class="Mercedes-Benz">
                    <div>
                        <img src="${producto.img}" alt=${producto.marca} height="300px" width="450px">
                        <h3 class="Item"data-name="${producto.modelo}" data-price="${producto.precio}">${producto.modelo}  </h3>  
                        <button class="add-to-cart-btn" id="btn" value="${producto.id}" onclick="addToCart(${producto.id})" >agregar-al-carrito</button>              
                    </div>
        `

    }) 
}
renderProductos ();
//Carrito Array
let cart = [];

//AGREGAR AL CARRITO
function addToCart(id){
        if(cart.some((producto) => producto.id==id)){
            alert("Producto ya se encuentra en el carrito");
        } else {
    const item = productos.find((producto) => producto.id == id);

    console.log(item, id, productos)

    cart.push(item);
    }
actualizarCart ();
}


//actualizar carrito
function actualizarCart(){
    renderItem();
    precioTotal();
}

//Calcular precio total
function precioTotal () {
 let subtotal = producto.precio;

}
//renderizar items en cart

function renderItem (){
    cart.forEach ((producto) => {
        cartItemsEl.innerHTML += `
            <div class="cart">
                <h1>Cart items</h1>
                <div class="row">
                    <div class="medium-6 columns">
                        <img src="${producto.img}" alt="${producto.modelo} width="100px">
                        <h4> ${producto.marca} ${producto.modelo}</h4>
                    </div>
                    <div class="medium-6 columns">
                         <button class="tiny secondary" id="clear">Clear the cart</button>
                    </div>
                    <div class="medium-6 columns">
                        <button class="tiny disabled" title="Work in progress">Checkout</button>
                    </div>
                </div>
                <div class="total-items"> 0 </div>
                    Total price: <strong id="totalPrice">${productos.precio}</strong>
                </div>
        `
    });
}

registrarEventListeners();

function registrarEventListeners() {
    cartItemsEl.addEventListener("click",addToCart);

    vaciarElCarrito.addEventListener("click", () => {
        productosCart = []; 
        limpiarHTML();
    })

    document.addEventListener("DOMContentLoaded", () => {
        productosCarrito = JSON.parse( localStorage.getItem ("cart")) || [];
        carritoHTML()
    });
}

//Storage
aplicarStorage()
        

function aplicarStorage() {
    localStorage.setItem("cart", JSON.stringify(productosCarrito));
}