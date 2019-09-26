import { FoodItem } from './../FoodItem';
import { FoodService } from './../food.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class FoodSearchComponent implements OnInit {

  searchedFoodItemList: FoodItem[] = [];

  constructor(private foodService: FoodService) {

  }

  ngOnInit() {

  }

  search(value: string) {
    this.searchedFoodItemList = this.foodService.searchFoodItem(value);
    console.log(this.searchedFoodItemList)
  }

}
