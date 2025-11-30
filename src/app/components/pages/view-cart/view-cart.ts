import { Component } from '@angular/core';
import { BackButton } from "../back-button/back-button";
import { ListCartItems } from "../list-cart-items/list-cart-items";
import { TeaseWishlist } from "../tease-wishlist/tease-wishlist";
import { SummariseOrder } from "../summarise-order/summarise-order";

@Component({
  selector: 'app-view-cart',
  imports: [BackButton, ListCartItems, TeaseWishlist, SummariseOrder],
  templateUrl: './view-cart.html',
  styleUrl: './view-cart.scss',
})
export default class ViewCart {

}
