import { Product } from "./product.model";

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 10.99 },
];

const loadedProducts = products.map((prod) => {
  return new Product(prod.title, prod.price);
});

const p1 = new Product("A Book", 12.99);

console.log(p1.getInformation());
