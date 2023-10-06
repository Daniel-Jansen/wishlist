import { Component, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'add-wish-form',
  templateUrl: './wish-form.component.html',
  styleUrls: ['./wish-form.component.css']
})
export class WishFormComponent {
  @Output() addWish = new EventEmitter<WishItem>();

  newWishText = '';

  addNewWish() {
    this.addWish.emit(new WishItem(this.newWishText));
    this.newWishText = '';
  }
}
