import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
})
export class ListProductComponent {
  products: IProduct[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
  removeItem(id: any) {
    const confirm = window.confirm('Bạn có muốn xoá không?');
    if (confirm) {
      this.productService.removeProduct(id).subscribe((item) => {
        alert(`Xoá thành công sản phẩm ${id}`);
        this.products = this.products.filter((item) => item.id !== id);
      });
    }
  }
}
