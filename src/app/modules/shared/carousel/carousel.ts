export class Carousel<T> {
  currentItem: T = null;
  constructor(public list: Array<T>,
              public currentIndex: number = 0,
              private onChangeCurrentItem: (item: T) => void) {
    this.currentItem = list[currentIndex];
  }

  next(): void {
    this.currentItem = this.list[++this.currentIndex];
    this.onChangeCurrentItem(this.currentItem);
    console.log('currentIndex', this.currentIndex);
  }

  prev(): void {
    this.currentItem = this.list[--this.currentIndex];
    this.onChangeCurrentItem(this.currentItem);
    console.log('currentIndex', this.currentIndex);
  }

  selectNextAction(emptyListAction: () => void): void {
    if (this.list.length === 1) {
      this.currentItem = this.list[0];
      this.currentIndex = 0;
      this.onChangeCurrentItem(this.currentItem);
    } else if (!this.isDisabledNextShow()) {
      this.currentIndex--;
      this.next();
    } else if (!this.isDisabledPrevShow()) {
      this.prev();
      this.currentIndex++;
    } else if (this.list.length === 0) {
      emptyListAction();
    }
    console.log('currentIndex', this.currentIndex);
  }

  removeByIndex(index: number): boolean {
    return this.list.splice(index, 1).length > 0;
  }

  isDisabledNextShow(): boolean {
    return this.currentIndex === this.list.length - 1 || this.list.length <= 1;
  }

  isDisabledPrevShow(): boolean {
    return this.currentIndex === 0 || this.list.length <= 1;
  }
}
