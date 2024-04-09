export type Product = {
  uuid: string;
  name: string;
  price: number;
  description: string;
  imageURL: string;
  quantity: number;
};

export type CartItem = {
  product: Product;
  quantity: number;
};
