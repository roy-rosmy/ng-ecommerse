import { Component, computed, inject } from '@angular/core';
import { ViewPanel } from "../../../directives/view-panel";
import { EcommerceStore } from '../../../ecommerce-store';

@Component({
  selector: 'app-summarise-order',
  imports: [ViewPanel],
  templateUrl: './summarise-order.html',
  styleUrl: './summarise-order.scss',
})
export class SummariseOrder {
  store = inject(EcommerceStore);

  subtotal = computed(() => 
    Math.round(this.store.cartItems().reduce((acc, item) => acc + (item.product.price * item.quantity), 0)));
  tax = computed(()=> 
    Math.round(this.subtotal() * 0.05));
  total = computed(() => this.subtotal() - this.tax());
}
