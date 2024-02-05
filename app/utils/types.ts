export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
};

export type CartItem = {
  product: Product;
  quantity: number;
};
