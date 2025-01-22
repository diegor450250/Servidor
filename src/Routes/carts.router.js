import {Router} from 'express';
import CartManager from '../FileManager/cartManager.js';

const router = Router();
const cartManager = new CartManager();

let carts = [
    {
        id: 1,
        products : [
            {
                productId : 1,
                cantidad : 1,
            },
            {
                productId : 2,
                cantidad : 1                
            }
        ]   
    }
]

router.post("/", (req, resp) => {
    cartManager.crearCarrito();
    resp.send({status: "Completado", message : "Creado con exito"});
})

router.post("/:cid/products/:pid", (req, resp) => {
    const idC = req.params.cid;
    const idP = req.params.pid;
    cartManager.agregarProducto(idP, idC);
    resp.send({status : "Agregado", message : "Agregado con exito"})
})

router.get("/:cid", (req, resp) => {
    const carritos = cartManager.leerCarritos();
    const cartBuscado = carritos.find(a => a.id === parseInt(req.params.cid));
    if (!cartBuscado)
    {
        return resp.status(404).send({status : "error", error : "carrito no encontrado"});
    }
    const productos = cartBuscado.products;
    resp.send({productos});
    
})

export default router;