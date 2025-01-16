export interface IGetItemsRequest {
  search: string;
  sortBy: string;
  paginateFrom: number;
  paginateTo: number;
  filters: IGetItemsFilter[];
}

export interface IGetItemsFilter {
  category: string;
  filters: string[];
}
