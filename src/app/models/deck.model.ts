import { Card } from './card.model';

export class Deck {
  private _name: string = 'my deck 1';
  lastUpdated: Date;
  cards: Array<Card>  = [];
  isActive: boolean = true;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    value = value.trim();

    if (value.length < 3) {
      throw new Error('Deck name should contain minimum 3 characters');
    }

    this.lastUpdated = new Date();
    this._name = value;
  }

  constructor(name) {
    this.name = name;
    this.lastUpdated = new Date();
  }

  addCard(newCard: Card): void {
    const existingCard = this.cards.find((cardItem: Card): boolean => cardItem.url === newCard.url);

    existingCard ? existingCard.count += 1 : this.cards.push(newCard);

    this.lastUpdated = new Date();
  }

  removeCard(cardToRemove: Card): void {
    this.cards = this.cards.filter((cardItem: Card): boolean => cardItem !== cardToRemove);
    this.lastUpdated = new Date();
  }
}
