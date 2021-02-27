const http = require("http");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  removeProduct,
} = require("./controllers/productController");

const server = http.createServer((req, res) => {
  console.log(req.url, typeof req.url);
  if (req.url === "/api/products" && req.method === "GET") {
    getProducts(req, res);
  } else if (req.url.match(/\/api\/products\/\w+/)) {
    const id = req.url.split("/")[3];

    switch (req.method) {
      case "GET":
        getProduct(req, res, id);
        break;
      case "PUT":
        updateProduct(req, res, id);
        break;
      case "DELETE":
        removeProduct(req, res, id);
        break;
    }
  } else if ((req.url = "/api/products" && req.method === "POST")) {
    createProduct(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "routes not found" }));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () =>
  console.log(`server is running on http://localhost:${PORT}`)
);
