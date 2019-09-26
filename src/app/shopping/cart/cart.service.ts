import { Cart } from './Cart';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart;

  constructor() {
    this.cart = {
      cartItems: [
        {
          id: 1,
          name: 'Sandwich',
          category: 'Main Course',
          price: 99,
          active: true,
          freeDelivery: false,
          dateOfLaunch: new Date(),
          imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80"
        },
        {
          id: 2,
          name: 'Burger',
          category: 'Main Course',
          price: 99,
          active: true,
          freeDelivery: false,
          dateOfLaunch: new Date(),
          imageUrl: "https://images.unsplash.com/photo-1550949987-33f716ccc232?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=708&q=80"
        },
        {
          id: 3,
          name: 'French Fries',
          category: 'Main Course',
          price: 99,
          active: true,
          freeDelivery: false,
          dateOfLaunch: new Date(),
          imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        },
      ],
      total: 0
    };
  }

  calcPrice() {
    let sum = 0;
    this.cart.cartItems.forEach(cartItem => {
      sum += cartItem.price;
    });
    return sum;
  }

  getCartItems() {
    return this.cart.cartItems;
  }

  getCart() {
    this.cart = {
      cartItems: this.getCartItems(),
      total: this.calcPrice()
    };
    return this.cart;
  }

}
