import { patchState, signalMethod, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { Product } from "./components/models/products"
import { computed, inject } from "@angular/core";
import { produce } from 'immer';
import { Toaster } from "./services/toaster";
import { CartItem } from "./components/models/cart";
export type EcommerceState = {
    products : Product[];
    category : string;
    wishlistItems : Product[];
    cartItems : CartItem[];
    selectedProductId : string | undefined;
} 

// type store=EcommerceState;

export const EcommerceStore = signalStore(
    {
        providedIn : 'root'
    },
    withState({

products : [
  {
    id: 'p001',
    name: 'Wireless Noise-Cancelling Headphones',
    description: 'Premium over-ear headphones with active noise cancellation and long battery life.',
    price: 199.99,
    imageUrl: 'https://picsum.photos/600/800?random=1',
    rating: 4.6,
    reviewCount: 2,
    inStock: true,
    category: 'electronics',
    review: [
      {
        id: 'r001',
        productId: 'p001',
        userName: 'John Carter',
        userImageUrl: 'https://i.pravatar.cc/150?img=11',
        rating: 5,
        title: 'Outstanding sound quality',
        comment: 'Noise cancellation works perfectly and the sound is crystal clear.',
        reviewDate: new Date('2024-11-15')
      },
      {
        id: 'r002',
        productId: 'p001',
        userName: 'Emily Watson',
        userImageUrl: 'https://i.pravatar.cc/150?img=12',
        rating: 4,
        title: 'Very comfortable',
        comment: 'Great comfort and battery life, but slightly expensive.',
        reviewDate: new Date('2024-12-03')
      }
    ]
  },

  {
    id: 'p002',
    name: 'Smart Fitness Watch',
    description: 'Track your health metrics with this sleek and powerful smart watch.',
    price: 149.99,
    imageUrl: 'https://picsum.photos/600/800?random=2',
    rating: 4.0,
    reviewCount: 3,
    inStock: true,
    category: 'electronics',
    review: [
      {
        id: 'r003',
        productId: 'p002',
        userName: 'Michael Brown',
        userImageUrl: 'https://i.pravatar.cc/150?img=21',
        rating: 4,
        title: 'Good fitness tracking',
        comment: 'Accurate tracking and easy to use interface.',
        reviewDate: new Date('2024-10-22')
      },
      {
        id: 'r004',
        productId: 'p002',
        userName: 'Sophia Lee',
        userImageUrl: 'https://i.pravatar.cc/150?img=22',
        rating: 5,
        title: 'Love the design',
        comment: 'Stylish and lightweight. Battery lasts long.',
        reviewDate: new Date('2024-11-10')
      },
      {
        id: 'r005',
        productId: 'p002',
        userName: 'David Miller',
        userImageUrl: 'https://i.pravatar.cc/150?img=23',
        rating: 3,
        title: 'Average experience',
        comment: 'Good features but syncing can be slow at times.',
        reviewDate: new Date('2024-12-01')
      }
    ]
  },

  {
    id: 'p003',
    name: 'Ergonomic Office Chair',
    description: 'Comfortable office chair with lumbar support and adjustable height.',
    price: 279.99,
    imageUrl: 'https://picsum.photos/600/800?random=3',
    rating: 4.8,
    reviewCount: 1,
    inStock: false,
    category: 'home',
    review: [
      {
        id: 'r006',
        productId: 'p003',
        userName: 'Rachel Green',
        userImageUrl: 'https://i.pravatar.cc/150?img=31',
        rating: 5,
        title: 'Perfect for long hours',
        comment: 'My back pain is gone after using this chair. Highly recommended!',
        reviewDate: new Date('2024-11-28')
      }
    ]
  },

  {
    id: 'p004',
    name: 'Minimalist Desk Lamp',
    description: 'LED desk lamp with adjustable brightness and modern design.',
    price: 39.99,
    imageUrl: 'https://picsum.photos/600/800?random=4',
    rating: 4.2,
    reviewCount: 0,
    inStock: true,
    category: 'home',
    review: []
  }
],
 category : 'all',
        wishlistItems : [],
        cartItems : [],
        selectedProductId : undefined
    } as EcommerceState),



    //     products : [
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
    //     },
    //     {
    //     id: "p002",
    //     name: "Laptop",
    //     description: "Smart and fast working smoother keyboard.",
    //     price: 149.50,
    //     imageUrl: "https://cdn.pixabay.com/photo/2017/08/07/03/52/laptop-2599499_1280.jpg",
    //     rating: 4.4,
    //     reviewCount: 512,
    //     inStock: false,
    //     category: "electronics"
    //     },
    //     {
    //     id: "p003",
    //     name: "Smart LED Light Strip",
    //     description: "RGB lighting strip with WiFi control, scene modes, and smart assistant compatibility.",
    //     price: 29.99,
    //     imageUrl: "https://cdn.pixabay.com/photo/2017/08/07/22/15/technology-2608473_1280.jpg",
    //     rating: 4.2,
    //     reviewCount: 289,
    //     inStock: false,
    //     category: "home"
    //     },
    //     {
    //     id: "p004",
    //     name: "Laptop",
    //     description: "Insulated bottle that keeps drinks cold for 24 hours or hot for 12 hours. Durable and BPA-free.",
    //     price: 24.00,
    //     imageUrl: "https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_1280.jpg",
    //     rating: 4.8,
    //     reviewCount: 1887,
    //     inStock: true,
    //     category: "electronics"
    //     },
    //     {
    //     id: "p005",
    //     name: "4K Ultra HD Monitor",
    //     description: "27-inch 4K display with HDR support, ultra-thin bezels.",
    //     price: 349.99,
    //     imageUrl: "https://cdn.pixabay.com/photo/2021/11/16/15/35/technology-6801345_1280.jpg",
    //     rating: 4.5,
    //     reviewCount: 643,
    //     inStock: true,
    //     category: "electronics"
    //     },
    //     {
    //     id: "p006",
    //     name: "Laptop",
    //     description: "Ultra-thin bezels.",
    //     price: 350,
    //     imageUrl: "https://cdn.pixabay.com/photo/2021/11/16/15/35/technology-6801345_1280.jpg",
    //     rating: 4.5,
    //     reviewCount: 643,
    //     inStock: true,
    //     category: "electronics"
    //     }
    //     ],
    //     category : 'all',
    //     wishlistItems : [],
    //     cartItems : [],
    //     selectedProductId : undefined
    // } as EcommerceState),
    withComputed(({ category, products, wishlistItems, cartItems, selectedProductId }) => ({
        filteredProducts : computed(() => {
            if (category() === 'all') return products();
            return products().filter(p => p.category === category().toLowerCase())}),
        wishlistCount : computed(()=> wishlistItems().length),
        cartItemCount : computed(()=> cartItems().reduce((acc, item)=> acc + item.quantity, 0)),
        //reduce loops through the array and combines all items into a single value,(start counting from zero)
        
        selectedProduct : computed(()=> products().find((p)=> p.id === selectedProductId()))
    })),
    withMethods((store, toaster = inject(Toaster)) => ({
        setCategory: signalMethod<string>((category:string)=>{
            patchState(store, {category})
        }),
        setProductId : signalMethod<string>((productId:string)=>{
            patchState(store, { selectedProductId : productId })
        }),
         addToWishlist: (product : Product)=>{
            const updatedWishlistItems = produce(store.wishlistItems(), (draft)=>{
                if(!draft.find(p => p.id === product.id)){
                    draft.push(product);
                }
            })
            patchState(store, {wishlistItems: updatedWishlistItems});
            toaster.success('Product added to wishlist');
        },
        removeFromWishlist:( product : Product)=>{
            patchState(store,{
                wishlistItems : store.wishlistItems().filter((p)=>p.id !== product.id)
            });
            toaster.success('Product removed from wishlist');
        },
        clearWishlist(){
            patchState(store, {wishlistItems : []});
        },
        addToCart: (product : Product, quantity : number)=>{
            const existingItemIndex = store.cartItems().findIndex(i=>i.product.id === product.id);

            const updatedCartItems = produce(store.cartItems(), (draft)=>{
                if(existingItemIndex !==-1){
                    draft[existingItemIndex].quantity += quantity;
                    return;
                }
                draft.push({
                    product, quantity
                })
            })
              patchState(store, {cartItems:updatedCartItems});
              toaster.success(existingItemIndex!==-1 ? 'Product added again' : 'Prodct added to the cart');
                
        },
        setItemQuantity:(params: { productId : string, quantity : number}) => {
            const index = store.cartItems().findIndex(c => c.product.id === params.productId);
            const updated = produce(store.cartItems(), (draft) => {
                draft[index].quantity = params.quantity
            });
            patchState(store, {cartItems:updated});
        },
        addAllWishlistToCart: ()=>{
            const updatedCartItems = produce(store.cartItems(), (draft)=>{
                store.wishlistItems().forEach(p=>{
                    if(!draft.find(c => c.product.id === p.id)){
                        draft.push({ product : p, quantity : 1 });
                    }
                })
            })
            patchState(store, { cartItems: updatedCartItems, wishlistItems: [] })
        },
        moveToWishlist: (product : Product)=>{
            const updatedCartItems = store.cartItems().filter(p=> p.product.id !== product.id);
            /*const updatedCartItems = [];
            for (const p of store.cartItems()) {
            if (p.product.id !== product.id) {
                updatedCartItems.push(p);
            }
            }*/

            const updatedWishlistItems = produce(store.wishlistItems(), (draft)=>{
                if(!draft.find(p=> p.id === product.id)){
                    draft.push(product);
                }
            });
            patchState(store, {cartItems : updatedCartItems, wishlistItems : updatedWishlistItems});
        },
        removeFromCart: (product : Product)=>{
            patchState(store, {
                cartItems : store.cartItems().filter((c) => c.product.id !== product.id)
            })
        }
    })),
)