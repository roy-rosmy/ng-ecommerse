import { Component, computed, inject, input } from '@angular/core';
import { EcommerceStore } from '../../../ecommerce-store';
import { Product } from '../../models/products';
import { MatIcon } from "@angular/material/icon";
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-toggle-wishlist',
  imports: [MatIcon, MatIconButton],
  templateUrl: './toggle-wishlist.html',
  styleUrl: './toggle-wishlist.scss',
})
export class ToggleWishlist {
  product = input.required<Product>();
  store = inject(EcommerceStore);
  deleteProduct = input<boolean>();
  
  isInWishlist = computed(() => this.store.wishlistItems().some(p => p.id === this.product().id));
  ngOnInit(){
    console.log("product",this.product().id);
    
    console.log("isInWishlist",this.isInWishlist());
    
  }
  toggleWishlist(product : Product){
    if(this.isInWishlist()){
      this.store.removeFromWishlist(product);
    }else{
      this.store.addToWishlist(product);
    }
  }
}
