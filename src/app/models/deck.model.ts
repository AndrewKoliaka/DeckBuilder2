import { Card } from './card.model';

export class Deck {
  cards: Card[]  = [];
  lastUpdated: Date;
  private _name: string = 'my deck 1';
  isActive: boolean = true;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    const trimmedValue = value.trim();

    if (trimmedValue.length < 3) {
      throw new Error('Deck name should contain minimum 3 characters');
    }

    this.lastUpdated = new Date();
    this._name = trimmedValue;
  }

  constructor(name) {
    this.name = name;
    this.lastUpdated = new Date();
  }
}
