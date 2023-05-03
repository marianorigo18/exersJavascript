/*
CREAR CLASE
realizar una clase "ProductManager" que 
gestione un conjunto de productos.
debe crearse desde su constructor el 
elemento products, el cual sera un arreglo
vacia.


Consignas:
cada producto que se gestione debe contar 
con esta propiedades:
-   title
-   description
-   price
-   thumbnail
-   code(codigo del producto)
-   stock(cantidad de piezas disponibles)


Metodo addProduct:
debe contar con un metodo "addProduct"
el cual agrega un producto al arreglo 
de productos inicial.
-   validar que no se repita el campo "code"
-   que todos los campos sean obligatorios 
-   al agregarse debe crearse un id autoincrementable


Metodo getProducts:
debe contar con metodo "getProducts" el cual debe
devolver el arreglo con todos los productos creados 
hasta el momento


Metodo getProducsById:
debe contar con un metodo "getProductsById" el
cual debe buscar el arreglo el producto que coincida 
con el id 
-   En caso de no coinsidir con un idn mostrar en 
consola un arror "Not Found"     
*/
console.log("hello")
class ProductManager{
    constructor(){
        this.products = [];
    }
    addProducts(title, description, price, thumbnail, code, stock){
        if(title == "" || description == "" || price == "" || thumbnail == "" || code == "" || stock == ""){
        console.log("no se permiten campos vacios");
        }
        const product = {
            title, description, price, thumbnail, code, stock
        }
        if(this.products.length === 0){
            product.id = 1
        }else{
            product.id = this.products[this.products.length-1].id + 1
        }
        this.products.push(product)
    }
    getProducts(){
        return this.products
    }
    getProductsById(id){
        const result = this.products.find(prod => prod.id === id)
        console.log(result)
    }
}

const product1 = new ProductManager();
const product2 = new ProductManager();
const product3 = new ProductManager();
product1.addProducts("contactor", "220v", 1500, "contactor.jpg", "moncontri", 15)
product2.addProducts("contactor", "110v", 1500, "contactor.jpg", "moncontri")
product3.addProducts("contactor", "110v", 1500, "contactor.jpg", "moncontri")
console.log(product3.getProducts())