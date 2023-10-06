import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import { EventService } from '../../../shared/services/EventService';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent {
  @Input() wish! : WishItem;

  get cssClasses() {
    // return this.fullfilled ? ['strikeout', 'text-muted'] : [];

    return {'strikeout text-black-50': this.wish.isComplete};
  }

  constructor(private events: EventService) {

  }

  removeWish() {
    this.events.emit('removeWish', this.wish);
  }

  toggleFullfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}
