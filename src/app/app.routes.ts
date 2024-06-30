import { Routes } from '@angular/router';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { RestaurantItemsComponent } from './Pages/restaurant-items/restaurant-items.component';
import { CreateOrderComponent } from './Pages/create-order/create-order.component';
import { LoginComponent } from './Pages/login/login.component';

export const routes: Routes = [
    { path: '' ,redirectTo:'food-category',pathMatch:'full'},
    { path: 'food-category',component:CategoriesComponent},
    { path: 'restaurant/:id',component:RestaurantItemsComponent},
    { path: 'create-order',component:CreateOrderComponent},
    { path: 'login',component:LoginComponent}
];
