/* ---------------- AJUSTES SERVIDOR ---------------- */
const moment = require('moment');
const express = require('express');
const app = express();
const router = express.Router();
const port = 3001;
const host = 'http://localhost'
const url = `${host}:${port}`;

app.use(router);

const data = require('./data');
const { json } = require('express');

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

/* ------------------------------------------- */
/* -------------- SWAGGER ------------ */
/* ------------------------------------------- */

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Delilah Restó API',
      version: '0.1.0'
    }
  },
  apis: ['./server.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/* ------------------------------------------- */
/* -------------- FUNCIONALIDADES ------------ */
/* ------------------------------------------- */

/* CUENTA NUEVA ALTA DE USUARIO */
/* INGRESAR CON USUARIO Y CONTRASEÑA */
/* GENERAR UN CARRITO DE COMPRAS CON EL USUARIO REGISTRADO */
/* INSTANCIAR OBJETO PEDIDO */
/* EDITAR ESTADO DEL OBJETO PEDIDO DESDE EL ADMIN */
/* LISTAR OBJETOS POR ESTADO */



/* ------------------------------------------- */
/* ---------------- ENDPOINTS ---------------- */
/* ------------------------------------------- */

router.get('/filterUsers', function (req, res){
  res.send(data.filterUsers(1));
});

/* ---------------- USUARIOS ---------------- */

router.get('/users', function (req, res){
  res.json(data.listUsers());
});

router.post('/users', function (req, res){
  res.json(data.crearUser());
});

router.put('/users', function (req, res){
  res.json(data.modificarUser(2, "JAVIBOIN", "Javier de los Angeles","javi3000@gmail.com", 542964123256, "Garibaldi 203",null,1234));
});

router.delete('/users', function (req, res){
  res.json(data.borrarUser());
});

/* ---------------- PEDIDOS ---------------- */

router.get('/orders', function (req, res){
  res.json(data.listOrders());
});

router.post('/orders', function (req, res){
  res.json(data.crearOrder());
});

router.put('/orders', function (req, res){
  res.json(data.modificarOrder(1,"Confirmado",[2,3],400));
});

router.delete('/orders', function (req, res){
  res.json(data.borrarOrder());
});

/* ---------------- PRODUCTOS ---------------- */

router.get('/products', function (req, res){
  res.json(data.listProducts());
});

router.post('/products', function (req, res){
  res.json(data.crearProduct());
});

router.put('/products', function (req, res){
  res.json(data.modificarProduct(1,"Bife con Cebolla", 250, "pic"));
});

router.delete('/products', function (req, res){
  res.json(data.borrarProduct());
});


router.use(function(req, res, next) {
  const respuesta = `404 Not Found ${moment().format('DD-MM-YYYY, hh:mm:ss a')} ${req.method} ${req.url} path: ${req.path} ${req.statusCode} ${req.statusMessage}}`;
  
  res.json(respuesta);
  console.log(respuesta);

  next();
});

app.listen(port, () => console.log(`Listen on ${url}`));

