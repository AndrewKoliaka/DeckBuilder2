import { Component, OnInit } from '@angular/core';

import { DeckService } from '../../services/deck.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  deckSize: number = 0;
  pagesCount: number = 0;

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    if (this.deckService.currentDeck && Array.isArray(this.deckService.currentDeck.cards)) {
      this.deckSize = this.deckService.currentDeck.cards.length;
    }

    this.pagesCount = Math.ceil(this.deckSize / 9);
  }

}
