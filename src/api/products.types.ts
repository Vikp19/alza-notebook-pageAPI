
export interface AlzaProductApi {
  id: number;
  img: string;
  name: string;
  spec: string;
  price: string | null;
  cprice: string | null;
  avail: string;
  rating: number;
  url: string;
}

export interface AlzaProductsResponse {
  err: number;
  msg: string | null;
  data: AlzaProductApi[];
  data_cnt?: number;
}

export interface ProductCard {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  oldPrice?: number;
  rating: number;
  availability: string;
  productUrl: string;
}
