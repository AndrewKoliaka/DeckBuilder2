import { Injectable } from '@angular/core';
import {Deck} from '../models/deck.model';
import {MTG_DECKS_KEY} from '../constants/storageKeys.constant';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getDecks(): Array<Deck> {
    let savedDecks;

    try {
      savedDecks = JSON.parse(localStorage.getItem(MTG_DECKS_KEY));

      return Array.isArray(savedDecks) ? savedDecks : [];
    } catch (e) {
      console.error(e);

      return [];
    }
  }

  getDeck(name: string): Deck {
    const savedDecks = this.getDecks();

    return savedDecks.find((deckItem: Deck): boolean => deckItem.name === name);
  }

  saveDeck(deck: Deck): void {
    const savedDecks = this.getDecks();
    const filteredDecks = savedDecks.filter((deckItem: Deck): boolean => deckItem.name !== deck.name);

    filteredDecks.push(deck);

    localStorage.setItem(MTG_DECKS_KEY, JSON.stringify(filteredDecks));
  }

  removeDeck(name: string): void {
    const savedDecks = this.getDecks();
    const filteredDecks = savedDecks.filter((deckItem: Deck): boolean => deckItem.name !== name);

    localStorage.setItem(MTG_DECKS_KEY, JSON.stringify(filteredDecks));
  }
}
