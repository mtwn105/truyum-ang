import { LoginComponent } from './site/login/login.component';
import { SignupComponent } from './site/signup/signup.component';
import { FoodSearchComponent } from './food/search/search.component';
import { FoodMenuComponent } from './food/menu/menu.component';
import { FoodItemComponent } from './food/item-info/item-info.component';
import { FoodItemEditComponent } from './food/item-edit/item-edit.component';
import { CartComponent } from './shopping/cart/cart.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: FoodSearchComponent },
  { path: 'cart', component: CartComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'edit/:id', component: FoodItemEditComponent },
  { path: 'item-info/:id', component: FoodItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
