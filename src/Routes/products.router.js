import {Router} from 'express';
import ProductManager from '../FileManager/productsManager.js';

const router = Router();
const productManager = new ProductManager();

let products = [
    {
        id : 1,
        nombre : '',
        precio : 0,
        description : '',
        codigo : '',
        stock : 0,
        categoria : '',
        status : true,
        imagenes : [
            '',
            '',
            ''
        ]
    },
    {
        id : 2,
        nombre : '',
        precio : 0,
        description : '',
        codigo : '',
        stock : 0,
        categoria : '',
        status : true,
        imagenes : [
            '',
            '',
            ''
        ]
    },
    {
        id : 3,
        nombre : '',
        precio : 0,
        description : '',
        codigo : '',
        stock : 0,
        categoria : '',
        status : true,
        imagenes : [
            '',
            '',
            ''
        ]
    },
    {
        id : 4,
        nombre : '',
        precio : 0,
        description : '',
        codigo : '',
        stock : 0,
        categoria : '',
        status : true,
        imagenes : [
            '',
            '',
            ''
        ]
    }

]

router.get('/', (req, res) => {
    let products = productManager.leerProductos();
    res.send({products});
});

router.get('/:id', (req, res) => {
    let products = productManager.leerProductos();
    const idBuscado = parseInt(req.params.id);
    const producto = products.find(pds => pds.id === idBuscado);
    if (!producto){
       return res.status(404).send({status : 'error', error : 'Producto no encontrado'});
    }
    res.send({producto});
});

router.post('/', (req, res) => {
    let nuevo = req.body;
    if (!nuevo.precio || !nuevo.nombre || !nuevo.description || !nuevo.codigo || !nuevo.stock || !nuevo.categoria || !nuevo.status || nuevo.imagenes.length() === 0 ) {
        return res.status(400).send({status : 'error', error : 'Datos incompletos'})
    }
    productManager.agregarProducto(nuevo);
    res.send({status : 'Completado', message : 'Agregado correctamente'})
});

router.delete('/:id', (req, res) => {
    const idP = req.params.id;
    productManager.borrarProducto(idP);
    res.send({status : 'Completado', message : 'Producto eliminado'})
});

export default router;