
export type TranslatedString = Record<'en' | 'es' | 'pt', string>;

export interface Product {
  id: number;
  name: TranslatedString;
  description: TranslatedString;
  category: TranslatedString;
  price: number;
  currency: string;
  imageUrl: string;
  stock: number;
  rating: number;
  reviews: number;
  features: TranslatedString[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

export interface ShippingInfo {
  fullName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  shippingInfo: ShippingInfo;
  total: number;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
}
