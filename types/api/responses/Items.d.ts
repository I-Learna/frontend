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
  tags: string[];
  author: IItemCardAuthor;
}


export interface IItemCardAuthor {
  name: string;
  image: string;
}

export type IItemsFiltersResponse = IItemsFilterCategory[];

export interface IItemsFilterCategory {
  categoryCode: string;
  categoryLabel: string;
  options: IItemsFilterOption[];
}

export interface IItemsFilterOption {
  optionLabel: string;
  optionCode: string;
}
