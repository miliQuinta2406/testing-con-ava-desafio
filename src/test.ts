import test from "ava";
import { Product, User } from "./index";

test("Testeo la clase Product", (t) => {
  const product = new Product("Product 1", 10);

  t.is(product.name, "Product 1");
  t.is(product.price, 10);
});
test("Testeo la clase User y sus métodos", (t) => {
  const user = new User("Mili");

  //test del constructor
  t.is(user.name, "Mili");
  t.deepEqual(user.products, []);

  //test del metodo addProduct
  const product =new Product("Product 1", 10);

  user.addProduct(product);

  t.is(user.products.length, 1);
  t.deepEqual(user.products[0], product);
});
