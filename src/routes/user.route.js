const express = require('express');
const router = express.Router();
const functions = require('../controllers/user.controller');
const middlewareUser = require('../middlewares/user.middleware');

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

/**
 * @swagger
 * /users:
 *  get:
 *    tags:
 *    - "Usuarios" 
 *    summary: "Listado de todos los usuarios"
 *    description: Devuelve todos los usuarios dados de alta en nuestra app
 *    responses:
 *      200:
 *        description: Success
 *      404:
 *        description: Not found
 */


router.get("/", (req, res) => {
  functions.listValues()
  .then((result) => {
    res.status(200).send({
      status: 200,
      message: "Data find Successfully",
      data: result
    });
  })
  .catch(error => {
    res.status(404).send({
      message: "Unable to find data",
      errors: error,
      status: 404
    });
  });
});

router.post("/", middlewareUser.searchUser , (req, res) => {
  functions.createUser(req)
  .then(() => {
    res.status(200).send({
      status: 200,
      message: "Data Save Successfully",
    });
  })
  .catch(error => {
    res.status(400).send({
      message: "Unable to insert data",
      errors: error,
      status: 400
    });
  });
});

// is current user
router.put("/:id",(req, res) => {
  functions.updateUser(req)
  .then(() => {
    res.status(200).send({
      status: 200,
      message: "Data Update Successfully",
    });
  })
  .catch(error => {
    res.status(400).send({
      message: "Unable to Update data",
      errors: error,
      status: 400
    });
  });
});

// en update agregar si el email o el usuario existe, o no dejar cambiar el nombre de usuario
// llas nuevas apps permiten el cambiio, xq no hacerlo...

// is current user
router.delete("/:id", (req, res) => {
  functions.deleteUser(req)
  .then(() => {
    res.status(200).send({
      status: 200,
      message: "Data Delete Successfully",
    });
  })
  .catch(error => {
    res.status(400).send({
      message: "Unable to Delete data",
      errors: error,
      status: 400
    });
  });
});

router.get("/:id", (req, res) => {
  functions.listUserById(req)
  .then((result) => {
    res.status(200).send({
      status: 200,
      message: "Data find Successfully",
      data: result
    });
  })
  .catch(error => {
    res.status(400).send({
      message: "Unable to find data",
      errors: error,
      status: 400
    });
  });
});

/**
 * @swagger
 * /users:
 *  post:
 *    tags:
 *    - "Usuarios"
 *    summary: "Agrega Usuario"
 *    description: Guarda un nuevo usuario en nuestra app
 *    parameters:
 *    - name: nickname
 *      description: Nombre de Usuario 
 *      in: formData
 *      required: true
 *      type: string
 *    - name: completeName
 *      description: Nombre del propietario de la cuenta 
 *      in: formData
 *      required: true
 *      type: string
 *    - name: email
 *      description: Correo electronico de Usuario 
 *      in: formData
 *      required: true
 *      type: string
 *    - name: phone
 *      description: Numero de telefono de Usuario 
 *      in: formData
 *      required: true
 *      type: integer
 *    - name: address
 *      description: Domicilio de Usuario 
 *      in: formData
 *      required: true
 *      type: string
 *    - name: password
 *      description: Contraseña de Usuario 
 *      in: formData
 *      required: true
 *      type: string
 *    responses:
 *      200:
 *        description: Success
 *      404:
 *        description: Not found
 */

/**
 * @swagger
 * /users/{id}:
 *  put:
 *    tags:
 *    - "Usuarios"
 *    summary: "Modifica por ID"
 *    description: "Se realiza la modificación en uno o mas campos de un usuario"
 *    parameters:
 *    - name: id
 *      description: Id de Usuario
 *      in: path
 *      required: true
 *      type: integer
 *    - name: idUser_Session
 *      description: ID de usuario que realiza el cambio 
 *      in: formData
 *      required: true
 *      type: integer
 *    - name: nickname
 *      description: Nombre de Usuario 
 *      in: formData
 *      required: false
 *      type: string
 *    - name: completeName
 *      description: Nombre del propietario de la cuenta 
 *      in: formData
 *      required: false
 *      type: string
 *    - name: email
 *      description: Correo electronico de Usuario 
 *      in: formData
 *      required: false
 *      type: string
 *    - name: phone
 *      description: Numero de telefono de Usuario 
 *      in: formData
 *      required: false
 *      type: integer
 *    - name: address
 *      description: Domicilio de Usuario 
 *      in: formData
 *      required: false
 *      type: string
 *    - name: password
 *      description: Contraseña de Usuario 
 *      in: formData
 *      required: false
 *      type: string
 *    responses:
 *      200:
 *        description: Success
 *      401:
 *        description: Unauthorized
 *      404:
 *        description: Not found
 */


/**
 * @swagger
 * /users/{id}:
 *  get:
 *    tags:
 *    - "Usuarios"
 *    summary: "Ver info por ID"
 *    description: Todos los datos de un usuario
 *    parameters:
 *    - name: id
 *      description: Id de Usuario
 *      in: path
 *      required: true
 *      type: integer
 *    responses:
 *      200:
 *        description: Success
 *      404:
 *        description: Not found
 */

/**
 * @swagger
 * /users/{id}:
 *  delete:
 *    tags:
 *    - "Usuarios"
 *    summary: "Elimina por ID"
 *    description: "Se elimina un usuario en nuestra base de datos"
 *    parameters:
 *    - name: id
 *      description: Id de Usuario
 *      in: path
 *      required: true
 *      type: integer
 *    - name: idUser_Session
 *      description: ID de usuario que realiza el cambio 
 *      in: formData
 *      required: true
 *      type: integer
 *    responses:
 *      200:
 *        description: Success
 *      401:
 *        description: Unauthorized
 *      404:
 *        description: Not found
 */

module.exports = router;