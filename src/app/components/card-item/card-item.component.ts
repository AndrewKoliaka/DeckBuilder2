import { Component, OnInit, Input, Output } from '@angular/core';

import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.less']
})
export class CardItemComponent implements OnInit {
  @Input() card: Card;
  @Input() isDarkened: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleSelect(): void {
    if (!this.card.isSelected) {
      this.card.isSelected = true;
      return;
    }

    this.card.isSelected = false;
  }
}
