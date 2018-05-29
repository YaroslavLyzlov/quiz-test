export class Carousel<T> {
  currentItem: T = null;
  constructor(public list: Array<T>,
              public currentIndex: number = 0,
              private onChangeCurrentItem: (item: T) => void) {
    this.currentItem = list[currentIndex];
  }

  next(): void {
    console.log('next', this.currentItem, this.currentIndex, this.list.length);
    this.currentItem = this.list[++this.currentIndex];
    this.onChangeCurrentItem(this.currentItem);
  }

  prev(): void {
    console.log('prev', this.currentItem, this.currentIndex);
    this.currentItem = this.list[--this.currentIndex];
    this.onChangeCurrentItem(this.currentItem);
  }

  selectNextAction(emptyListAction: () => void): void {
    console.log('Before', this.list, this.list.length, this.currentItem);
    if (this.list.length === 1) {
      this.currentItem = this.list[0];
      this.currentIndex = 0;
      this.onChangeCurrentItem(this.currentItem);
    } else if (!this.isDisabledNextShow()) {
      this.next();
    } else if (!this.isDisabledPrevShow()) {
      this.prev();
    } else if (this.list.length === 0) {
      emptyListAction();
    }
    console.log('After', this.list, this.list.length, this.currentItem);
  }

  removeByIndex(index: number): boolean {
    return this.list.splice(index, 1).length > 0;
  }

  isDisabledNextShow(): boolean {
    return this.currentIndex >= this.list.length - 1 || this.list.length <= 1;
  }

  isDisabledPrevShow(): boolean {
    return this.currentIndex === 0 || this.list.length <= 1;
  }
}
