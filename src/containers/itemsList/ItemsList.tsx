import { useCallback, useState } from 'react';

import { ItemCard } from '@/components/itemCard/ItemCard';
import { glidedRoseShop, Item } from '@/model/glidedRose';

export const ItemsList = () => {
  const [items, setItems] = useState<Item[]>(glidedRoseShop.items);

  const updateItems = useCallback(() => {
    const updatedItems = glidedRoseShop.updateQuality();
    setItems(updatedItems);
  }, []);

  return (
    <div>
      <div>
        <button onClick={updateItems}>Update items</button>
      </div>
      <ul>
        {items.map((item, idx) => (
          <ItemCard key={`${item.name}+${idx}`} item={item} />
        ))}
      </ul>
    </div>
  );
};
