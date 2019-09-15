export class Card {
  readonly url: string;
  isSelected: boolean = false;

  private _count: number = 1;

  get count(): number {
    return this._count;
  }

  set count(value: number) {
    if (value > 0) {
      this._count = value;
    }
  }

  constructor(url) {
    this.url = url;
  }
}
