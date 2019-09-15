import { Injectable } from '@angular/core';

import { Deck } from '../models/deck.model';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  currentDeck: Deck;

  constructor(private storage: StorageService) { }

  loadActiveDeck(): void {
    const savedDecks = this.storage.getDecks();

    if (!savedDecks) {
      return;
    }

    const activeDeck = savedDecks.find((deckItem: Deck): boolean => deckItem.isActive);

    if (activeDeck) {
      return;
    }

    this.currentDeck = activeDeck;
  }

  loadDeck(name): boolean {
    const deck = this.storage.getDeck(name);

    if (deck) {
      this.currentDeck.isActive = false;

      deck.isActive = true;
      this.currentDeck = deck;

      return true;
    }

    return false;
  }

  saveDeck(): void {
    this.storage.saveDeck(this.currentDeck);
  }

  removeDeck(name: string): void {
    this.storage.removeDeck(name);
  }
}
