import { ProductService } from "./ProductService";
import { Product } from "./product";


let result:any;
let _productService = new ProductService();

result = _productService.getProduct();
result = _productService.getById(2);


let _product = new Product();
_product.name = "iphone 14 pro max 512gb";
_product.fiyat = 100000;
_productService.saveProduct(_product);
result = _productService.getById(2);


_productService.deleteProduct(result);
result = _productService.getProduct();


let _product2 = new Product()
_product2.id = 3;
_product2.name = "iphone 13 pro 128gb";
_product2.fiyat = 60000;
_productService.saveProduct(_product2);

result = _productService.getProduct();


console.log(result);

