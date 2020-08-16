export interface Order {
  id: number;
  buyer: string;
  items: {
    id: number;
    description: string;
    unit: number;
    unitPrice: number;
    discount: number;
  }[];
  promoCode: string;
  totalPrice: number;
  buyerMessage: string;
  remarks: string;
  createdAt: Date;
  updatedAt: Date;
}
