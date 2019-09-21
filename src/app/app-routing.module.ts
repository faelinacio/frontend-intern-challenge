import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsPageComponent} from './components/productsPage/productsPage.component';


const routes: Routes = [
  {path: '', component: ProductsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
