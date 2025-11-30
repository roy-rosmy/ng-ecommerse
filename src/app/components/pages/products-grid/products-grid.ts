import { Component, computed, inject, input, signal } from '@angular/core';
import { Product } from '../../models/products';
import { ProductsCard } from "../products-card/products-card";
import { MatSidenavContainer, MatSidenavContent, MatSidenav } from '@angular/material/sidenav';
import { MatNavList, MatListItem, MatListItemTitle } from '@angular/material/list';
import { RouterLink } from "@angular/router";
import { TitleCasePipe } from '@angular/common';
import { EcommerceStore } from '../../../ecommerce-store';
import { ToggleWishlist } from "../toggle-wishlist/toggle-wishlist";
@Component({
  selector: 'app-products-grid',
  imports: [ProductsCard, MatSidenavContainer, MatSidenavContent, MatSidenav, MatNavList, MatListItem, MatListItemTitle, RouterLink, TitleCasePipe, ToggleWishlist],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export default class ProductsGrid {

  category = input<string>('all');
  
  store = inject(EcommerceStore);
  // products = signal<Product[]>([
  //     {
  //     id: "p001",
  //     name: "Wireless Noise-Cancelling Headphones",
  //     description: "Premium over-ear headphones with active noise cancellation, 30-hour battery life, and fast charging.",
  //     price: 199.99,
  //     imageUrl: "https://cdn.pixabay.com/photo/2023/10/12/13/05/headphones-8310796_1280.jpg",
  //     rating: 4.7,
  //     reviewCount: 1342,
  //     inStock: true,
  //     category: "electronics"
  //   },
  //   {
  //     id: "p002",
  //     name: "Laptop",
  //     description: "Smart and fast working smoother keyboard.",
  //     price: 149.50,
  //     imageUrl: "https://cdn.pixabay.com/photo/2017/08/07/03/52/laptop-2599499_1280.jpg",
  //     rating: 4.4,
  //     reviewCount: 512,
  //     inStock: true,
  //     category: "electronics"
  //   },
  //   {
  //     id: "p003",
  //     name: "Smart LED Light Strip",
  //     description: "RGB lighting strip with WiFi control, scene modes, and smart assistant compatibility.",
  //     price: 29.99,
  //     imageUrl: "https://cdn.pixabay.com/photo/2017/08/07/22/15/technology-2608473_1280.jpg",
  //     rating: 4.2,
  //     reviewCount: 289,
  //     inStock: false,
  //     category: "home"
  //   },
  //   {
  //     id: "p004",
  //     name: "Laptop",
  //     description: "Insulated bottle that keeps drinks cold for 24 hours or hot for 12 hours. Durable and BPA-free.",
  //     price: 24.00,
  //     imageUrl: "https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_1280.jpg",
  //     rating: 4.8,
  //     reviewCount: 1887,
  //     inStock: true,
  //     category: "electronics"
  //   },
  //   {
  //     id: "p005",
  //     name: "4K Ultra HD Monitor",
  //     description: "27-inch 4K display with HDR support, ultra-thin bezels.",
  //     price: 349.99,
  //     imageUrl: "https://cdn.pixabay.com/photo/2021/11/16/15/35/technology-6801345_1280.jpg",
  //     rating: 4.5,
  //     reviewCount: 643,
  //     inStock: true,
  //     category: "electronics"
  //   },
  //   {
  //     id: "p005",
  //     name: "4K Ultra HD Monitor",
  //     description: "27-inch 4K display with HDR support, ultra-thin bezels.",
  //     price: 349.99,
  //     imageUrl: "https://cdn.pixabay.com/photo/2021/11/16/15/35/technology-6801345_1280.jpg",
  //     rating: 4.5,
  //     reviewCount: 643,
  //     inStock: true,
  //     category: "electronics"
  //   }
  // ]);

  // filteredProducts = computed(() => {
  //   if (this.category() === 'all') return this.products();
  //   return this.products().filter(p => p.category === this.category().toLowerCase())});
  // addToCart(event : Product){

  // }

  categories = signal<string[]>(['all' , 'electronics', 'home', 'clothing', 'accessories']);

  constructor() {
    this.store.setCategory(this.category);
  }
}
