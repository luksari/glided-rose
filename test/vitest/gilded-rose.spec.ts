import { describe, expect, it } from 'vitest';

import { GlidedRoseShop, Item } from '@/model/glidedRose';

describe('Gilded Rose', () => {
  it('Regular item quality never less than 0 after update', () => {
    const storeItems = [new Item('Regular item', 5, 0)];
    const expectedResult = [new Item('Regular item', 4, 0)];
    const gildedRose = new GlidedRoseShop(storeItems);
    const items = gildedRose.updateQuality();

    expect(items).toStrictEqual(expectedResult);
  });

  it('If sellIn date passes quality should be decreased twice as fast', () => {
    const storeItems = [new Item('Regular item which you may find on some shelf', 0, 6)];
    const expectedResult = [
      new Item('Regular item which you may find on some shelf', -1, 4),
    ];
    const gildedRose = new GlidedRoseShop(storeItems);
    const items = gildedRose.updateQuality();

    expect(items).toStrictEqual(expectedResult);
  });

  it('The quality of an item can never exceed 50', () => {
    const storeItems = [new Item('Aged Brie', 0, 50)];
    const expectedResult = [new Item('Aged Brie', -1, 50)];
    const gildedRose = new GlidedRoseShop(storeItems);
    const items = gildedRose.updateQuality();

    expect(items).toStrictEqual(expectedResult);
  });

  it('The quality of an item can never be negative', () => {
    const storeItems = [new Item('Aged Brie', 1, -1)];
    const expectedResult = [new Item('Aged Brie', 0, 0)];
    const gildedRose = new GlidedRoseShop(storeItems);
    const items = gildedRose.updateQuality();

    expect(items).toStrictEqual(expectedResult);
  });
});

describe('Aged brie', () => {
  it('the quality of an aged brie should increase by 1', () => {
    const storeItems = [new Item('Aged Brie', 1, 5)];
    const expectedResult = [new Item('Aged Brie', 0, 6)];
    const gildedRose = new GlidedRoseShop(storeItems);
    const items = gildedRose.updateQuality();

    expect(items).toStrictEqual(expectedResult);
  });
});

describe('Conjured', () => {
  it('the quality of conjured items should decrease twice as fast', () => {
    const storeItems = [new Item('Conjured Codedazure sword', 10, 20)];
    const expectedResult = [new Item('Conjured Codedazure sword', 9, 18)];
    const gildedRose = new GlidedRoseShop(storeItems);
    const items = gildedRose.updateQuality();

    expect(items).toStrictEqual(expectedResult);
  });
});

describe('Sulfuras', () => {
  it('the quality of Sulfuras never changes', () => {
    const storeItems = [new Item('Sulfuras, Hand of Ragnaros', 50, 45)];
    const expectedResult = [new Item('Sulfuras, Hand of Ragnaros', 50, 45)];
    const gildedRose = new GlidedRoseShop(storeItems);
    const items = gildedRose.updateQuality();

    expect(items).toStrictEqual(expectedResult);
  });
});

describe('Backstage passes', () => {
  it("increases in Quality as it's SellIn value approaches", () => {
    const storeItems = [new Item('Backstage passes to a TAFKAL80ETC concert', 14, 30)];
    const expectedResult = [
      new Item('Backstage passes to a TAFKAL80ETC concert', 13, 31),
    ];
    const gildedRose = new GlidedRoseShop(storeItems);
    const items = gildedRose.updateQuality();

    expect(items).toStrictEqual(expectedResult);
  });

  it('Quality increases by 2 when there are 10 days or less', () => {
    const storeItems = [new Item('Backstage passes to a TAFKAL80ETC concert', 10, 0)];
    const expectedResult = [new Item('Backstage passes to a TAFKAL80ETC concert', 9, 2)];
    const gildedRose = new GlidedRoseShop(storeItems);
    const items = gildedRose.updateQuality();

    expect(items).toStrictEqual(expectedResult);
  });

  it('Quality increases by 3 when there are 5 days or less', () => {
    const storeItems = [new Item('Backstage passes to a TAFKAL80ETC concert', 5, 0)];
    const expectedResult = [new Item('Backstage passes to a TAFKAL80ETC concert', 4, 3)];
    const gildedRose = new GlidedRoseShop(storeItems);
    const items = gildedRose.updateQuality();

    expect(items).toStrictEqual(expectedResult);
  });

  it('Quality drops to 0 after concert', () => {
    const storeItems = [new Item('Backstage passes to a TAFKAL80ETC concert', 0, 30)];
    const expectedResult = [new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0)];
    const gildedRose = new GlidedRoseShop(storeItems);
    const items = gildedRose.updateQuality();

    expect(items).toStrictEqual(expectedResult);
  });
});
