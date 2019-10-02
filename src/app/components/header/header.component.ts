import {Component, OnInit} from '@angular/core';

import {DeckService} from '../../services/deck.service';
import {Card} from '../../models/card.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  deckSize: number = 0;
  pagesCount: number = 0;

  constructor(private deckService: DeckService) {
  }

  ngOnInit() {
    this.deckSize = this.getDeckSize();
    this.pagesCount = Math.ceil(this.deckSize / 9);
  }

  private getDeckSize(): number {
    if (!this.deckService.currentDeck || !Array.isArray(this.deckService.currentDeck.cards)) {
      return 0;
    }

    return this.deckService.currentDeck.cards.reduce((count: number, card: Card) =>
      count + card.count
      , 0);
  }

}
