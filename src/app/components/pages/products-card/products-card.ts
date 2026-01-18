import { Component, inject, input } from '@angular/core';
import { Product } from '../../models/products';
import { MatAnchor } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { EcommerceStore } from '../../../ecommerce-store';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-products-card',
  imports: [MatAnchor, MatIcon, RouterLink],
  templateUrl: './products-card.html',
  styleUrl: './products-card.scss',
})
export class ProductsCard {
  product = input.required<Product>();

  store = inject(EcommerceStore);
}
