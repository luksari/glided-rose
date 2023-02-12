import { ItemCardProps } from './ItemCard.types';

export const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <div>
      <div>
        <span>{item.name}</span>
      </div>
      <div>Quality: {item.quality}</div>
      <div>Item will sell in {item.sellIn} days</div>
    </div>
  );
};
