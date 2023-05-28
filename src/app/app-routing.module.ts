import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: ListProductComponent },
  {
    path: 'add-product',
    component: AddProductComponent,
  },
  {
    path: 'product/:id/edit',
    component: UpdateProductComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
