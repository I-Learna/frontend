export interface IGetItemsResponse {
  totalItems: number;
  items: IItem[];
}

export interface IItem {
  id: string;
  title: string;
  duration: string;
  durationDesc: string;
  image: string;
  rating: number;
  price: string;
  oldPrice: string;
  description: string;
}
