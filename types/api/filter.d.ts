export interface IFilterCategory {
  categoryCode: string;
  categoryLabel: string;
  options: IFilterOption[];
}

export interface IFilterOption {
  optionLabel: string;
  optionCode: string;
}
