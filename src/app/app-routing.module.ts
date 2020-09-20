import { ProductPageComponent } from './product-page/product-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { CategoryComponent } from './category/category.component';
import { RecommendComponent } from './recommend/recommend.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: '', component: RecommendComponent },
      { path: 'cart', component: CartViewComponent },
      { path: 'view/:category', component: CategoryComponent },
      { path: ':item' , component:ProductPageComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
