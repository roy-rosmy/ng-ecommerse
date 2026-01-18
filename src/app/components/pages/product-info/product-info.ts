import { Component, computed, inject, input, signal } from '@angular/core';
import { Product } from '../../models/products';
import { TitleCasePipe } from '@angular/common';
import { StockStatus } from "../stock-status/stock-status";
import { QtySelector } from "../qty-selector/qty-selector";
import { ToggleWishlist } from "../toggle-wishlist/toggle-wishlist";
import { MatButtonModule } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { EcommerceStore } from '../../../ecommerce-store';

@Component({
  selector: 'app-product-info',
  imports: [TitleCasePipe, StockStatus, QtySelector, MatButtonModule, MatIcon],
  templateUrl: './product-info.html',
  styleUrl: './product-info.scss',
})
export class ProductInfo {
  product = input.required<Product>();
  store = inject(EcommerceStore);

  quantity = signal(1);
  isFavorite = computed(() => this.store.wishlistItems().some(p => p.id === this.product().id));

  toggleFavorite(product : Product) {
    if(this.isFavorite()){
      this.store.removeFromWishlist(product);
    }else{
      this.store.addToWishlist(product);
    }
  }
}
