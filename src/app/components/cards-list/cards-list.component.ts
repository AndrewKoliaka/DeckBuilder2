import { Component, OnInit, DoCheck } from '@angular/core';
import { DeckService } from '../../services/deck.service';
import { Deck } from '../../models/deck.model';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.less']
})
export class CardsListComponent implements OnInit, DoCheck {
  deck: Deck;
  isSelection: boolean = false;

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.deck = this.deckService.currentDeck;
  }

  ngDoCheck(): void {
    this.checkSelectionStatus();
  }

  private checkSelectionStatus(): void {
    if (!this.deck || !Array.isArray(this.deck.cards)) {
      return;
    }

    this.isSelection = this.deck.cards.some((cardItem: Card): boolean => cardItem.isSelected);
  }
}
