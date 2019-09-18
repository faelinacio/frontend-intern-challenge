import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsletterComponent} from './newsletter/newsletter.component';


const routes: Routes = [
  {path: '', component: NewsletterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
