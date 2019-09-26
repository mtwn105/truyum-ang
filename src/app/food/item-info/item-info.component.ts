import { FoodItem } from './../FoodItem';
import { FoodService } from './../food.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/site/auth.service';

@Component({
  selector: 'app-food-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class FoodItemComponent implements OnInit {

  foodItem: FoodItem;
  isAdmin: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private foodService: FoodService, private authService: AuthService) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.foodService.getFoodItems().forEach((f: FoodItem) => {
        if (f.id.toString() === params.get('id')) {
          this.foodItem = f;
        }
      });
    });
  }



}
