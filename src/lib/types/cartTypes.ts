export type cartItem = {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
  inStock:string;
};
export type cartItemProps = {
  productInfo: cartItem;
};

export type cartInputs = {
  couponCode:number,
  address:string;
}
