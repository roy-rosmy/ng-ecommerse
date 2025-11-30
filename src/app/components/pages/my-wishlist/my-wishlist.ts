import { Component, inject } from '@angular/core';
import { BackButton } from "../back-button/back-button";
import { EcommerceStore } from '../../../ecommerce-store';
import { ProductsCard } from "../products-card/products-card";
import { ToggleWishlist } from "../toggle-wishlist/toggle-wishlist";
import { MatAnchor } from "@angular/material/button";
import { EmptyWishlist } from "../empty-wishlist/empty-wishlist";

@Component({
  selector: 'app-my-wishlist',
  imports: [BackButton, ProductsCard, ToggleWishlist, MatAnchor, EmptyWishlist],
  templateUrl: './my-wishlist.html',
  styleUrl: './my-wishlist.scss',
})
export default class MyWishlist {
  store = inject(EcommerceStore);
}
