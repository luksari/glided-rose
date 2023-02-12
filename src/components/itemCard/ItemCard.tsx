import { gildedRoseShop } from '@/model/gildedRose';

import {
  CardDetailsValue,
  CardDetailsWrapper,
  CardHeading,
  CardWrapper,
} from './ItemCard.styles';
import { ItemCardProps } from './ItemCard.types';

export const ItemCard = ({ item }: ItemCardProps) => {
  const isAfterSellIn = gildedRoseShop.isAfterSellIn(item);

  const sellInText = isAfterSellIn ? (
    <>
      Item after sell in date by <span>{-item.sellIn} days</span>
    </>
  ) : (
    <>
      Item will sell in: <span>{item.sellIn} days</span>
    </>
  );

  return (
    <CardWrapper>
      <CardHeading>{item.name}</CardHeading>
      <CardDetailsWrapper>
        <CardDetailsValue>
          Quality: <span>{item.quality}</span>
        </CardDetailsValue>
        <CardDetailsValue>
          {/** Use pluralization i18n engine e.g react-i18next */}
          {sellInText}
        </CardDetailsValue>
      </CardDetailsWrapper>
    </CardWrapper>
  );
};
