import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'product-card', component: ProductCardComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
