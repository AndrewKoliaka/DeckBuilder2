import { Component, OnInit, Input } from '@angular/core';

import { DeckService } from '../../services/deck.service';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.less']
})
export class CardItemComponent implements OnInit {
  @Input() card: Card;
  @Input() isDarkened: boolean;

  constructor(private deckService: DeckService) { }

  ngOnInit() {
  }

  toggleSelect(): void {
    if (!this.card.isSelected) {
      this.card.isSelected = true;
      return;
    }

    this.card.isSelected = false;
  }

  onCountChange(): void {
    this.deckService.saveDeck();
  }
}
