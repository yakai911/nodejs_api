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
    const newProduct = { id: ranId(5), ...product };
    products.push(newProduct);
    writeDataToFile("./data/products.json", products);

    resolve(newProduct);
  });
}

module.exports = {
  findAll,
  findById,
  create,
};