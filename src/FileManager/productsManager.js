import fs from 'fs';

class productManager {
    
    constructor(){
        this.filePath = './products.json';
    }


    async leerProductos() {
        try {
            const data = await fs.readFile(this.filePath, 'utf-8');
            return JSON.parse(data) || [];
        }catch (error) {
            if (error.code === 'ENOENT') {
                return [];
            } else {
                console.error('Error al leer los productos', error);
                throw error; 
            }
        }
    }

    async agregarProducto(nuevo){
        let products = this.leerProductos();
        nuevo.id = products.length() + 1;
        products.push(nuevo);
        await fs.writeFile(this.filePath, JSON.stringify(products,null,2));
    }

    async borrarProducto(idP){
        let products = this.leerProductos();
        let productoIndex = products.findIndex(p => p.id === parseInt(idP));
        if (productoIndex === -1){
            return console.error('Error producto no encontrado', error)
        }
        products.splice(productoIndex, 1);
        await fs.writeFile(this.filePath, JSON.stringify(products, null, 2));
    }

}

export default productManager;