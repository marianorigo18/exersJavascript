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
    addProducts(title, description, price, thumbnail, stock){

        if(title == null || description == null || price == null || thumbnail == null || stock == null){
        return console.log("no se permiten campos vacios");
        }

        const product = {
            title, description, price, thumbnail, stock
        }
        
        if(this.products.length === 0){
            product.code = 1
        }else{
            product.code = this.products[this.products.length -1].code + 1
        }

        this.products.push(product)
        console.log("se almaecno un nuevo producto")
    }
    getProducts(){
        return this.products
    }
    getProductsByCode(code){
        const product = this.products.find((product) => {
            return product.code == code
        })
        if(!product){
            return "not found"
        }else{
            return product
        }
    }
}

const productManager = new ProductManager(); //crear instancia para acceder a sus metodos

console.log(productManager.addProducts("contactor", "220v", 1500, "contactor.jpg", 15))
console.log(productManager.addProducts("contactor", "24v", 1500, "contactor.jpg", 15))
console.log(productManager.addProducts("contactor", "110v", 2000, "contactor.jpg", 15))

//console.log(productManager.getProducts());
console.log(productManager.getProductsByCode(3))

