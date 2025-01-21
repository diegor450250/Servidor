import { error } from 'console';
import {Router} from 'express';
const router = Router();

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
    res.send({products});
});

router.get('/:id', (req, res) => {
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
    nuevo.id = products.length() + 1;
    products.push(nuevo);
    res.send({status : 'Completado', message : 'Agregado correctamente'})
});

router.delete('/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let productoIndex = products.findIndex(p => p.id === id )
    if (productoIndex === -1){
        return res.status(400).send({status : 'error', error : 'Producto no encontrado'});
    }
    products.splice(productoIndex, 1);
    res.send({status : 'Completado', message : 'Producto eliminado'})
});

export default router;