export class Carousel<T> {
  currentItem: T = null;
  constructor(public list: Array<T>,
              public currentIndex: number = 0,
              private onAfterChangeItem: (item: T) => void,
              private onBeforeChangeItem: (item: T) => void) {
    this.onBeforeChangeItem(null);
    this.currentItem = list[currentIndex];
    this.onAfterChangeItem(this.currentItem);
  }

  next(): void {
    this.onBeforeChangeItem(this.currentItem);
    this.currentItem = this.list[++this.currentIndex];
    this.onAfterChangeItem(this.currentItem);
  }

  prev(): void {
    this.onBeforeChangeItem(this.currentItem);
    this.currentItem = this.list[--this.currentIndex];
    this.onAfterChangeItem(this.currentItem);
  }

  removeByIndex(index: number): boolean {
    const removed = this.list.splice(index, 1).length > 0;
    if (this.currentIndex === this.list.length) {
      --this.currentIndex;
    }
    this.onBeforeChangeItem(this.currentItem);
    this.currentItem = this.list[this.currentIndex];
    this.onAfterChangeItem(this.currentItem);
    return removed;
  }

  isDisabledNextShow(): boolean {
    return this.currentIndex >= this.list.length - 1 || this.list.length <= 1;
  }

  isDisabledPrevShow(): boolean {
    return this.currentIndex === 0 || this.list.length <= 1;
  }
}
