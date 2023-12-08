//Danielle Taplin
//wishlist-create.component.ts
//11/26/23
//wishlist create component

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

//declare wishlist-create component
@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss']
})
export class WishlistCreateComponent implements OnInit {

  //create output emitter property for adding items
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>()

  //create item property type IWishListItem
  item: IWishlistItem;

  //set constructor to initialize Wishlist item
  constructor() {
    this.item = {} as IWishlistItem;
   }

  ngOnInit(): void {
  }

  //create function to add iteme to wishlist
  addItem(){
    //call addItemEmitter on an item to output data
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    })

    //reset item property
    this.item = {} as IWishlistItem;
  }

}
