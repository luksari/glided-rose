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
    const areNoMoreDaysToSell = sellIn < 0;
  
    if (isQualityBiggerThan0 && areNoMoreDaysToSell) return -2;
    if (isQualityBiggerThan0) return -1;
  
    return 0;
  };

  private calculateQualityBackstagePasses = ({ sellIn, quality }: Item) => {
    const tenDaysOrLessToSell = sellIn <= 10;
    const fiveDaysOrLessToSell = sellIn <= 5;
    const areNoMoreDaysToSell = sellIn < 0;
  
    if (areNoMoreDaysToSell) return -quality;
    if (fiveDaysOrLessToSell) return 3;
    if (tenDaysOrLessToSell) return 2;
  
    return +1;
  };

  private calculateQualityAgedBrie = ({ quality }: Item) => {
    const isQualityLessThan50 = quality < 50;
    if (isQualityLessThan50) return 1;
    return 0;
  };

  private calculateQuality = (item: Item) => {
    const isSulfuras = item.name == "Sulfuras, Hand of Ragnaros";
    const isAgedBrie = item.name == "Aged Brie";
    const isBackstagePasses =
    item.name == "Backstage passes to a TAFKAL80ETC concert";
    const isNormalItem =
      !isAgedBrie && !isBackstagePasses && !isSulfuras
  
    if (isNormalItem) return this.calculateQualityNormalItem(item);
    if (isBackstagePasses) return this.calculateQualityBackstagePasses(item);
    if (isAgedBrie) return this.calculateQualityAgedBrie(item);
  
    return 0;
  }
  
  private calculateSellin  = ({ sellIn, name }: Item) => {
    const isSulfuras = name == "Sulfuras, Hand of Ragnaros";
    return !isSulfuras ? -1 : 0;
  };

  updateQuality() {
    return this.items.map(item => {
      item.sellIn += this.calculateSellin(item);
      item.quality += this.calculateQuality(item);

      return item;
    });

  }
}
