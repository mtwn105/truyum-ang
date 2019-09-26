import { FoodService } from './../food.service';
import { FoodItem } from './../FoodItem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class FoodMenuComponent implements OnInit {

  foodItemsList: FoodItem[];



  constructor(private foodService: FoodService) {

  }

  ngOnInit() {
    this.foodItemsList = this.foodService.getFoodItems();
  }

}
