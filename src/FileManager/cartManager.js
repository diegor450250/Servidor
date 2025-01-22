import fs from 'fs';

class CartManager {

    constructor(){
        this.filePath = './carts.json';
    }
    
    async crearCarrito() {
        try {
            let carts = await this.leerCarritos();
            let nuevo = {};
            nuevo.id = carts.lenght + 1;
            nuevo.products = [];
            carts.push(nuevo);
            await fs.writeFile(this.filePath, JSON.stringify(carts,null,2));
        }catch (error) {
            console.error('Error al crear nuevo carrito', error)
            throw error;
        }
    }
    
    async leerCarritos() {
        try {
            const data = await fs.readFile(this.filePath, 'utf-8');
            return JSON.parse(data) || [];
        }catch (error) {
            if (error.code === 'ENOENT') {
                return [];
            } else {
                console.error('Error al leer los carritos:', error);
                throw error; 
            }
        }
    }

    async agregarProducto(idP, idC) {
        try {
            let carts = await this.leerCarritos();
            if (!carts[idC]){
                return console.error('Error al buscar el carrito', error);
            }
            let index = carts[idC].products.findIndex(p => p.id === parseInt(idP))
            if (IndexProducto === -1){
                let nuevo = {};
                nuevo.productId = parseInt(req.params.pid);
                nuevo.cantidad = 1;
                carts[index].products.push(nuevo);
            }else {
                carts[idC].products[index].cantidad += 1;
            }
            await fs.writeFile(this.filePath, JSON.stringify(carts,null,2));
        }catch (error) {
            console.error('Error al agregar el producto', error);
            throw error;
        }       
    }

}

export default CartManager;
