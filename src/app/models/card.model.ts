export class Card {
  readonly url: string;
  isSelected: boolean = false;
  count: number = 1;

  constructor(url) {
    this.url = url;
  }
}
