import React, { FC } from "react";

interface ItemsListProps {
  items: any[];
  renderItem: (item: any) => React.ReactNode;
  className?: string;
  grid?: boolean;
}

const ItemsList: FC<ItemsListProps> = (props) => {
  return <div>{props.items.map(props.renderItem)}</div>;
};

export default ItemsList;
