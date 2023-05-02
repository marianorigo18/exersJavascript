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