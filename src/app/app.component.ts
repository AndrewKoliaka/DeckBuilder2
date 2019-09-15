import { Component, OnInit } from '@angular/core';
import { DeckService } from './services/deck.service';
import { Deck } from './models/deck.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  deck: Deck;

  constructor(private deckService: DeckService) {}

  ngOnInit() {
    this.deckService.loadActiveDeck();

    this.deck = this.deckService.currentDeck;
  }
}
