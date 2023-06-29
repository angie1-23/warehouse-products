import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeCategoryComponent } from './category/home-category/home-category.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeCategoryComponent,
    ListCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
