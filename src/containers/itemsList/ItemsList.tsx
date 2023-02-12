import { useCallback, useState } from 'react';

import { ItemCard } from '@/components/itemCard/ItemCard';
import { gildedRoseShop, Item } from '@/model/gildedRose';

import {
  Button,
  ButtonWrapper,
  ItemsListContainer,
  ItemsListWrapper,
} from './ItemsList.styles';

export const ItemsList = () => {
  const [items, setItems] = useState<Item[]>(gildedRoseShop.items);

  const updateItems = useCallback(() => {
    const updatedItems = gildedRoseShop.updateQuality();
    setItems(updatedItems);
  }, []);

  return (
    <ItemsListWrapper>
      <ButtonWrapper>
        <Button onClick={updateItems}>Update items</Button>
      </ButtonWrapper>
      <ItemsListContainer>
        {items.map((item, idx) => (
          <ItemCard key={`${item.name}+${idx}`} item={item} />
        ))}
      </ItemsListContainer>
    </ItemsListWrapper>
  );
};
