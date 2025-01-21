import {Router} from 'express';
const router = Router();

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
    let nuevo = {};
    nuevo.id = carts.length + 1;
    nuevo.products = [];
    carts.push(nuevo);
    resp.send({status: "Completado", message : "Creado con exito"});
})

router.post("/:cid/products/:pid", (req, resp) => {
    let index = carts.findIndex(a => a.id === parseInt(req.params.cid));
    if (index === -1)
    {
        return resp.status(404).send({status : "error", error : "carrito no encontrado"});
    }
    let IndexProducto = carts[index].products.findIndex(a => a.productId === parseInt(req.params.pid))
    if (IndexProducto === -1){
        let nuevo = {};
        nuevo.productId = parseInt(req.params.pid);
        nuevo.cantidad = 1;
        carts[index].products.push(nuevo);
    }else {
        carts[index].products[IndexProducto].cantidad += 1;
    }
    resp.send({status : "Agregado", message : "Agregado con exito"})
})

router.get("/:cid", (req, resp) => {
    const cartBuscado = carts.find(a => a.id === parseInt(req.params.cid));
    if (!cartBuscado)
    {
        return resp.status(404).send({status : "error", error : "carrito no encontrado"});
    }
    const productos = cartBuscado.products;
    resp.send({productos});
    
})

export default router;