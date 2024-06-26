import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    {path: '', component:HomePageComponent},
    {path:'login',component:LoginComponent},
    {path:'products',component:ProductsComponent},
    {path:'products/:id',component:ProductComponent}
]; 
 