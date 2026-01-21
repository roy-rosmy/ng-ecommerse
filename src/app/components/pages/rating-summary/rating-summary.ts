import { Component, computed, input } from '@angular/core';
import { Product } from '../../models/products';
import { count } from 'rxjs';
import { StarRating } from "../star-rating/star-rating";

@Component({
  selector: 'app-rating-summary',
  imports: [StarRating],
  templateUrl: './rating-summary.html',
  styleUrl: './rating-summary.scss',
})
export class RatingSummary {
  product = input.required<Product>();

  totalReviews = computed(()=>this.product().review.length);
  ratingBreakdown = computed(()=>{
    const reviews = this.product().review;
    const total = reviews.length;

    if(total === 0) return [5,4,3,2,1].map((stars)=>({
      stars,
      count : 0,
      percentage : 0
    }));

    const counts = [5,4,3,2,1].map((stars)=> {
      const count = reviews.filter((review)=> review.rating === stars).length;
      return{
        stars,
        count,
        percentage : (count / total) * 100,
      };
  });

  return counts;
});
}
