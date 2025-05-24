import { Product } from "./product";


export class SimpleDataSource {
    private products: Array<Product>;
    constructor() {
        this.products = new Array<Product> (
            new Product(1, "Samsung S5", "Telefon", 10000),
            new Product(2, "Samsung S6", "Telefon", 15000),
            new Product(3, "Samsung S7", "Telefon", 18000),
            new Product(4, "Samsung S8", "Telefon", 22000),
        );
    }

    getProducts(): Product[] {
        return this.products;
    }
}