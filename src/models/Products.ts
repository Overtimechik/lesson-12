import products from "./../data/products.json";
import { Storages } from "./Storage";

export type TProducts = {
  product_name: string;
  seller_name: string;
  quantity: number;
  price: number;
  delivery_id: number;
  id: number;
};
export class Products extends Storages {
  constructor() {
    super();
    products.forEach((item) => {
      this.setProducts(item.id, item);
    });
  }
}
