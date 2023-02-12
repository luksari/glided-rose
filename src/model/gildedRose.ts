export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRoseShop {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }
  public isSulfuras = (item: Item) => item.name === 'Sulfuras, Hand of Ragnaros';
  public isAgedBrie = (item: Item) => item.name === 'Aged Brie';
  public isBackstagePasses = (item: Item) =>
    item.name === 'Backstage passes to a TAFKAL80ETC concert';
  public isConjured = (item: Item) => item.name.includes('Conjured');

  public isNormalItem = (item: Item) =>
    !this.isAgedBrie(item) &&
    !this.isBackstagePasses(item) &&
    !this.isSulfuras(item) &&
    !this.isConjured(item);

  private calculateQualityNormalItem = ({ sellIn, quality }: Item) => {
    const isQualityBiggerThan0 = quality > 0;
    const isAfterSellIn = sellIn < 0;

    if (isQualityBiggerThan0 && isAfterSellIn) return -2;
    if (isQualityBiggerThan0) return -1;

    return 0;
  };

  private calculateQualityBackstagePasses = ({ sellIn, quality }: Item) => {
    const isTenDaysOrLessToSel = sellIn <= 10;
    const isFiveDaysOrLessToSell = sellIn <= 5;
    const isAfterSellIn = sellIn < 0;

    if (isAfterSellIn) return -quality;
    if (isFiveDaysOrLessToSell) return 3;
    if (isTenDaysOrLessToSel) return 2;

    return +1;
  };

  private calculateQualityAgedBrie = ({ quality }: Item) => {
    const isQualityLessThan50 = quality < 50;
    if (isQualityLessThan50) return 1;
    return 0;
  };

  private calculateQualityConjured = (item: Item) => {
    return this.calculateQualityNormalItem(item) * 2;
  };

  private calculateQuality = (item: Item) => {
    if (this.isNormalItem(item)) return this.calculateQualityNormalItem(item);
    if (this.isBackstagePasses(item)) return this.calculateQualityBackstagePasses(item);
    if (this.isAgedBrie(item)) return this.calculateQualityAgedBrie(item);
    if (this.isConjured(item)) return this.calculateQualityConjured(item);

    return 0;
  };

  private calculateSellin = (item: Item) => {
    return this.isSulfuras(item) ? 0 : -1;
  };

  updateQuality() {
    return this.items.map((item) => {
      item.sellIn += this.calculateSellin(item);
      item.quality += this.calculateQuality(item);

      return item;
    });
  }
}

const items = [
  new Item('Cloak of Invisibility', 24, 30),
  new Item('Wand with Phoenix feather', 16, 45),
  new Item('Mana Potion', 1, 15),
  new Item('Aged brie', 5, 30),
  new Item(`Spider's legs`, 24, 1),
  new Item(`Sulfuras, Hand of Ragnaros`, 10, 5),
  new Item(`Backstage passes to a TAFKAL80ETC concert`, 25, 4),
];

export const gildedRoseShop = new GildedRoseShop(items);
