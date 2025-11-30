import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : '',
        pathMatch : 'full',
        redirectTo : 'products/all'
    },
    {
        path : 'products/:category' , 
        loadComponent : () => import('./components/pages/products-grid/products-grid')
    },
    {
        path : 'wishlist',
        loadComponent : () => import('./components/pages/my-wishlist/my-wishlist')
    },
    {
        path : 'cart',
        loadComponent : () => import('./components/pages/view-cart/view-cart')
    }
];
