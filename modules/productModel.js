const products = require("../data/products.json");
const { ranId, writeDataToFile } = require("../utils/utils.js");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === id);
    resolve(product);
  });
}

function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = { id: ranId(7), ...product };
    products.push(newProduct);
    writeDataToFile("./data/products.json", products);

    resolve(newProduct);
  });
}

function update(id, productData) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((p) => p.id === id);
    products[index] = { id, ...productData };
    writeDataToFile("./data/products.json", products);
    resolve(products[index]);
  });
}

function remove(id) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((p) => p.id === id);
    const rmdProduct = products.splice(index, 1);
    resolve(rmdProduct);
  });
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
