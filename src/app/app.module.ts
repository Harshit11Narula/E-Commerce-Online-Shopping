import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { HttpClientModule } from "@angular/common/http";
import { TalkWithDbService } from "./talk-with-db.service";
import { ProductDisplayComponent } from './product-display/product-display.component';
import { RecommendComponent } from './recommend/recommend.component';
import { CategoryComponent } from './category/category.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [AppComponent,ProductDisplayComponent, LoginComponent, HomeComponent, RecommendComponent, CategoryComponent, ProductPageComponent, CartViewComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  entryComponents: [LoginComponent, ProductDisplayComponent],
  providers: [
   TalkWithDbService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
