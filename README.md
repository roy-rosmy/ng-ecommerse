# NgEcommerse

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.10.

A demo e-commerce web application built with **Angular 20**, showcasing core frontend features such as product listing, cart management, wishlist, and category filtering.

## Features Implemented

- **Homepage:** Lists all products with images, price and description.  
- **Category Filter:** Sidebar to select a category and filter products dynamically.  
- **Wishlist:** Add/remove products from wishlist, view wishlist items, and move items to cart.  
- **Cart Management:** Add items to cart, update item quantity, remove items, add all items to cart from wishlist and view total price.  
- **Reactive State Management:** Built using **NgRx Signals** with `signalStore`, `Immer` and `computed` state for reactive UI updates.  
- **Notifications:** Success messages using `Toaster` service for user actions like adding/removing items.  

**Note:** Sign-in and Sign-up functionality is not implemented yet.

---

## Tech Stack

- Angular 20  
- TypeScript & JavaScript (ES6+)  
- RxJS Signals for state management  
- SCSS for styling  
- Immer for immutable state updates  
- Toaster for notifications  

---

## Getting Started

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/roy-rosmy/ng-ecommerse

# Navigate to project folder
cd ng-ecommerse

# Install dependencies
npm install

# Start the development server
ng serve


Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.
