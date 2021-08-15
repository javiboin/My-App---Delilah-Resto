const users = require('./models/usuarios');
const orders = require('./models/pedidos');
const products = require('./models/productos');
const IDs = require('./models/usuarios');

/* ------------------ CONSTRUCTORES ------------------ */

function User(id, user, completeName, email, phone, mainAddress, altAddress, password) {
  this.id = Number(id);
  this.user = String(user);
  this.completeName = String(completeName);
  this.email = String(email);
  this.phone = Number(phone);
  this.mainAddress = String(mainAddress);
  this.altAddress = String(altAddress);
  this.password = String(password);
};

function Order(id, state, products, formaPago, price){
  this.id = Number(id);
  this.state = String(state),
  this.products = products,
  this.formaPago = String(formaPago)
  this.price = Number(price);
};

function Product(id, name, price, pic){
  this.id = Number(id);
  this.name = String(name),
  this.price = Number(price);
  this.pic = String(pic);
};

/* ----------------------------------------------------- */
/* ------------------ FUNCIONES DATOS ------------------ */
/* ----------------------------------------------------- */


function filterUsers(id){
  const datosFiltrados = users.filter(usuario => usuario.id == Number(id));
  return datosFiltrados;
};

function Test (id){
  console.log(id);
  console.log("tarea terminada");
};

function userID(id) {
  return users.filter(user => user.id == id);
};

/* ---------------- FUNCIONES USUARIOS ----------------- */
function listUsers(){
  return(users);
};

function crearUser(userObject) {
  const id = users[users.length -1].id +1;

  users.push({
    id: id,
    nickname: userObject.nickname,
    completeName: userObject.completeName,
    email: userObject.email,
    phone: userObject.phone,
    mainAddress: userObject.mainAddress,
    altAddress: userObject.altAddress,
    password: userObject.password
  });
  return 'User created';
};

const searchIndexUser = (idUser) => {
  return users.findIndex(x => x.id == idUser);
};

function modificarUser(idUser, userObject){
  userObject = {
    id: parseInt(idUser),
    nickname: userObject.nickname,
    completeName: userObject.completeName,
    email: userObject.email,
    phone: userObject.phone,
    mainAddress: userObject.mainAddress,
    altAddress: userObject.altAddress,
    password: userObject.password
  };

  users[searchIndexUser(idUser)] = userObject;

  return 'User updated';
};

function borrarUser(idr){
  const id = idr;
  return(users); /* provisional */
};

/* ------------------ FUNCIONES PEDIDOS ------------------ */
function filterOrders(id){
  const datosFiltrados = orders.filter(order => order.id == Number(id));
  return datosFiltrados;
};

function orderID(id) {
  return orders.filter(order => order.id == id);
};

function listOrders(){
  return(orders);
};

function crearOrder(orderObject){
  const id = orders[orders.length -1].id +1;

  orders.push({
    id: id,
    state: orderObject.state,
    products: orderObject.products,
    formaPago: orderObject.formaPago,
    price: orderObject.price
  });
  return 'Order created';
};

const searchIndexOrder = (idOrder) => {
  return orders.findIndex(x => x.id == idOrder);
};

function modificarOrder(idOrder, orderObject){
  orderObject = {
    id: parseInt(idOrder),
    state: orderObject.state,
    products: orderObject.products,
    formaPago: orderObject.formaPago,
    price: orderObject.price
  };

  orders[searchIndexOrder(idOrder)] = orderObject;

  return 'User updated';
};

function borrarOrder(id){
  return(orders);
};

/* ------------------ FUNCIONES PRODUCTOS ------------------ */
function filterProducts(id){
  const datosFiltrados = products.filter(product => product.id == Number(id));
  return datosFiltrados;
};

function productID(id) {
  return products.filter(product => product.id == id);
};

function listProducts(){
  return(products);
};

function crearProduct(productObject){
  const id = products[products.length -1].id +1;

  products.push({
    id: id,
    name: productObject.name,
    price: productObject.price,
    pic: productObject.pic,
  });
  return 'Order created';
};

function modificarProduct(id, name, price, pic){
  products[0].id = Number(id);
  products[0].name = String(name),
  products[0].price = Number(price);
  products[0].pic = String(pic);

  return(products);
};

function borrarProduct(id){
  return(products);
};

/* ------------------ EXPORTS ------------------ */
exports.filterUsers = filterUsers;
exports.userID = userID;

exports.listUsers = listUsers;
exports.crearUser = crearUser;
exports.modificarUser = modificarUser;
exports.borrarUser = borrarUser;

exports.filterOrders = filterOrders;
exports.orderID = orderID;

exports.listOrders = listOrders;
exports.crearOrder = crearOrder;
exports.modificarOrder = modificarOrder;
exports.borrarOrder = borrarOrder;

exports.filterProducts = filterProducts;
exports.productID = productID;

exports.listProducts = listProducts;
exports.crearProduct = crearProduct;
exports.modificarProduct = modificarProduct;
exports.borrarProduct = borrarProduct;


exports.Test = Test;