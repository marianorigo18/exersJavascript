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
class ProductManager{
    constructor(){
        this.products = [];
    }
    addProducts(title, description, price, thumbnail, code, stock){

        if(title == null || description == null || price == null || thumbnail == null || code == null || stock == null){
        return console.log("no se permiten campos vacios");
        }

        const product = {
            title, description, price, thumbnail, code, stock
        }
        
        if(this.products.length === 0){
            product.code = 1
        }else{
            product.code = this.products[this.products.length -1].code + 1
        }
        this.products.push(product)
        // console.log("se almaecno un nuevo producto")
    }
    getProducts(){
        return this.products
    }
}

const product1 = new ProductManager();
product1.addProducts("contactor", "220v", 1500, "contactor.jpg", "moncontri", 15)


const product2 = new ProductManager();
product2.addProducts("contactor", "24v", 1500, "contactor.jpg", "moncontri", 15)

const product3 = new ProductManager();
product3.addProducts("contactor", "24v", 1500, "contactor.jpg", "moncontri", 15)
console.log(product3.getProducts())