"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductService_1 = require("./ProductService");
var product_1 = require("./product");
var result;
var _productService = new ProductService_1.ProductService();
result = _productService.getProduct();
result = _productService.getById(2);
var _product = new product_1.Product();
_product.name = "iphone 14 pro max 512gb";
_product.fiyat = 100000;
_productService.saveProduct(_product);
result = _productService.getById(2);
_productService.deleteProduct(result);
result = _productService.getProduct();
var _product2 = new product_1.Product();
_product2.id = 3;
_product2.name = "iphone 13 pro 128gb";
_product2.fiyat = 60000;
_productService.saveProduct(_product2);
result = _productService.getProduct();
console.log(result);
