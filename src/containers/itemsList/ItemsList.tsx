import { useCallback, useState } from 'react';

import { ItemCard } from '@/components/itemCard/ItemCard';
import { gildedRoseShop, Item } from '@/model/gildedRose';

import { ItemsListContainer, ItemsListWrapper } from './ItemsList.styles';

export const ItemsList = () => {
  const [items, setItems] = useState<Item[]>(gildedRoseShop.items);

  const updateItems = useCallback(() => {
    const updatedItems = gildedRoseShop.updateQuality();
    setItems(updatedItems);
  }, []);

  return (
    <ItemsListWrapper>
      <div>
        <button onClick={updateItems}>Update items</button>
      </div>
      <ItemsListContainer>
        {items.map((item, idx) => (
          <ItemCard key={`${item.name}+${idx}`} item={item} />
        ))}
      </ItemsListContainer>
    </ItemsListWrapper>
  );
};
