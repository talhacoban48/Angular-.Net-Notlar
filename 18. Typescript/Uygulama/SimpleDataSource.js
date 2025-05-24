"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDataSource = void 0;
var product_1 = require("./product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new product_1.Product(1, "Samsung S5", "Telefon", 10000), new product_1.Product(2, "Samsung S6", "Telefon", 15000), new product_1.Product(3, "Samsung S7", "Telefon", 18000), new product_1.Product(4, "Samsung S8", "Telefon", 22000));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
