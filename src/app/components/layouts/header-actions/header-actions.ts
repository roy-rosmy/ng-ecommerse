import { Component, inject } from '@angular/core';
import { MatIconModule  } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { RouterLink } from "@angular/router";
import { MatBadge } from "@angular/material/badge";
import { EcommerceStore } from '../../../ecommerce-store';
@Component({
  selector: 'app-header-actions',
  imports: [MatButtonModule, MatIconModule, RouterLink, MatBadge],
  templateUrl: './header-actions.html',
  styleUrl: './header-actions.scss',
})
export class HeaderActions {
  store = inject(EcommerceStore)
}
