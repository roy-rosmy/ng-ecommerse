import { Component, computed, inject, input } from '@angular/core';
import { EcommerceStore } from '../../../ecommerce-store';
import { BackButton } from "../back-button/back-button";
import { ProductInfo } from "../product-info/product-info";
import { ViewReview } from "../view-review/view-review";

@Component({
  selector: 'app-product-details',
  imports: [BackButton, ProductInfo, ViewReview],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export default class ProductDetails {
  productId = input.required<string>();
  store = inject(EcommerceStore);
  
  constructor(){
    this.store.setProductId(this.productId);//instead of sending value sending the signal itself and make it truely reactive
  }

  backRoute = computed(()=>`/products/${this.store.category()}`);
}
