//Simulador de E-Commerce

/*eleccion del Auto
alert ("Selecciona una marca")
let marca = +(prompt("1-Mercedes 2-Porsche 3-Audi"));
*/

var cartId = "cart";

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


//Funcion Principal
function Item (marca, modelo, color, precio , img, cant) {
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

var cart = {

    count: 0,
    total: 0,
    items: [],
    getItems: function () {

        return this.items;

    },
    setItems: function (items) {

        this.items = items;
        for (var i = 0; i < this.items.length; i++) {
            var _item = this.items[i];
            this.total += _item.total;
        }
    },
    vaciarItems: function () {

        this.items = [];
        this.total = 0;
        storage.clearCart();
        helpers.emptyView();

    },
    agregarItem: function (item) {

        if (this.containsItem(item.id) === false) {

            this.items.push({
                id: item.id,
                name: item.name,
                price: item.price,
                count: item.count,
                total: item.price * item.count
            });

            storage.saveCart(this.items);


        } else {

            this.updateItem(item);

        }
        this.total += item.price * item.count;
        this.count += item.count;
        helpers.updateView();

    },
}

//Referencias 
var helpers = {

    getHtml: function (id) {

        return document.getElementById(id).innerHTML;

    },
    setHtml: function (id, html) {

        document.getElementById(id).innerHTML = html;
        return true;

    },

    itemData: function (object) {
        var item = {
            name: object.getAttribute('data-name'),
            price: object.getAttribute('data-price'),
            count: count.value,
            total: parseInt(object.getAttribute('data-price')) * parseInt(count.value)
        };
        return item;

    },

    actualizar: function () {
        var items = cart.getItems(),
            template = this.getHtml('cartT'),
            compiled = _.template(template, {
                items: items
            });
        this.setHtml('cartItems', compiled);
        this.updateTotal();
    },


    Total: function () {
        this.setHtml('totalPrice', cart.total + '$');
    }
};




//Funcion de Carrito
var shoppingCart = function() {
    cart = [];
}
// Guardar el Carrito
var localAdapter = {

    saveCart: function (object) {
        var stringified = JSON.stringify(object);
        localStorage.setItem(cartId, stringified);
        return true;
    },

    getCart: function () {
        return JSON.parse(localStorage.getItem(cartId));
    },

    clearCart: function () {
        localStorage.removeItem(cartId);
    }

};
//Eventos 
//Sumar al carrito
document.addEventListener('DOMContentLoaded', function () {

    var products = document.querySelectorAll('.Item');
    [].forEach.call(Item, function (agregarItem) {
        product.addEventListener('click', function (e) {

            var item = helpers.itemData(this.parentNode);
            cart.agregarItem(item);
        });

        });
})