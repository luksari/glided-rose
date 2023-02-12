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

export class GlidedRoseShop {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

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
    const isSulfuras = item.name == 'Sulfuras, Hand of Ragnaros';
    const isAgedBrie = item.name == 'Aged Brie';
    const isBackstagePasses = item.name == 'Backstage passes to a TAFKAL80ETC concert';
    const isConjuredItem = item.name.includes('Conjured');
    const isNormalItem =
      !isAgedBrie && !isBackstagePasses && !isSulfuras && !isConjuredItem;

    if (isNormalItem) return this.calculateQualityNormalItem(item);
    if (isBackstagePasses) return this.calculateQualityBackstagePasses(item);
    if (isAgedBrie) return this.calculateQualityAgedBrie(item);
    if (isConjuredItem) return this.calculateQualityConjured(item);

    return 0;
  };

  private calculateSellin = ({ name }: Item) => {
    const isSulfuras = name == 'Sulfuras, Hand of Ragnaros';
    return !isSulfuras ? -1 : 0;
  };

  updateQuality() {
    return this.items.map((item) => {
      item.sellIn += this.calculateSellin(item);
      item.quality += this.calculateQuality(item);

      return item;
    });
  }
}

export const GlidedRoseShop = new GlidedRoseShop([]);
