import {
  CardDetailsValue,
  CardDetailsWrapper,
  CardHeading,
  CardWrapper,
} from './ItemCard.styles';
import { ItemCardProps } from './ItemCard.types';

export const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <CardWrapper>
      <CardHeading>{item.name}</CardHeading>
      <CardDetailsWrapper>
        <CardDetailsValue>
          Quality: <span>{item.quality}</span>
        </CardDetailsValue>
        <CardDetailsValue>Item will sell in {item.sellIn} days</CardDetailsValue>
      </CardDetailsWrapper>
    </CardWrapper>
  );
};
