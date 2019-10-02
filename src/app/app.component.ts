import { Component, OnInit } from '@angular/core';
import { DeckService } from './services/deck.service';
import { HelperService } from './services/helper.service';
import { Deck } from './models/deck.model';
import { Card } from './models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  deck: Deck;

  constructor(private deckService: DeckService, private helper: HelperService) {}

  ngOnInit() {
    this.deckService.loadActiveDeck();

    this.deck = this.deckService.currentDeck;

    document.addEventListener('drop', (event: DragEvent) => {
      event.preventDefault();

      const url = event.dataTransfer.getData('text/plain');

      if (!this.helper.isURL(url)) {
        return;
      }

      const card = new Card(url);

      if (!this.deck) {
        this.deckService.currentDeck = new Deck('test');
        this.deck = this.deckService.currentDeck;
      }

      this.deckService.addCard(card);
    });

    document.addEventListener('dragover', (event: DragEvent) => event.preventDefault());
  }
}
