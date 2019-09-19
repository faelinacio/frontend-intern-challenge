import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/newsletter/header/header.component';
import { FooterComponent } from './components/newsletter/footer/footer.component';
import { ProductsListComponent } from './components/newsletter/products-list/products-list.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewsletterComponent,
    HeaderComponent,
    FooterComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
