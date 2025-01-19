import express from 'express';

import cartRouter from './Routes/carts.router.js';
import productsRouter from './Routes/products.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
 
app.use('/api/carts', cartRouter);
app.use('/api/products', productsRouter);

const server = app.listen(8080, () => {
    console.log("Escuchando en el puerto 8080")
});
