import { FoodItem } from './FoodItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  foodItemsList: FoodItem[];
  subject: string;


  constructor() {
    this.foodItemsList = [
      {
        id: 1,
        name: 'Sandwich',
        category: 'Main Course',
        price: 99,
        active: true,
        freeDelivery: true,
        dateOfLaunch: new Date(),
        imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80"
      },
      {
        id: 2,
        name: 'Burger',
        category: 'Starters',
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
      {
        id: 4,
        name: 'Pizza',
        category: 'Main Course',
        price: 99,
        active: true,
        freeDelivery: false,
        dateOfLaunch: new Date(),
        imageUrl: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      },
      {
        id: 5,
        name: 'Chocolate Brownie',
        category: 'Main Course',
        price: 99,
        active: true,
        freeDelivery: false,
        dateOfLaunch: new Date(2017, 7, 14),
        imageUrl: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=730&q=80"
      },
    ];
  }

  getFoodItems() {
    return this.foodItemsList;
  }

  searchFoodItem(value: string): FoodItem[] {
    let foodItemSearchedList: FoodItem[] = [];
    for (let foodItem of this.foodItemsList) {
      if (foodItem.name.toLowerCase().includes(value.toLowerCase())) {
        foodItemSearchedList.push(foodItem);
        console.log(foodItemSearchedList)

      }
    }
    return foodItemSearchedList;
  }

  updateFoodItem(foodItem: FoodItem) {

    let count = 0;

    for (let fItem of this.foodItemsList) {
      count++;
      if (fItem.id === foodItem.id) {
        this.foodItemsList[count] = foodItem;
      }
    }

    console.log(this.foodItemsList)

  }

}
