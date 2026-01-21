import { Component, input } from '@angular/core';
import { Product } from '../../models/products';
import { ViewPanel } from "../../../directives/view-panel";
import { RatingSummary } from "../rating-summary/rating-summary";

@Component({
  selector: 'app-view-review',
  imports: [ViewPanel, RatingSummary],
  templateUrl: './view-review.html',
  styleUrl: './view-review.scss',
})
export class ViewReview {
  product = input.required<Product>();
}
